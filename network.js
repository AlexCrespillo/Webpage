// Schematic river network for the intro figure: drought onset starts in the
// headwaters and moves downstream, reaching each gauge with a delay.
(function () {
  const svg = document.getElementById("network");
  if (!svg) return;
  const NS = "http://www.w3.org/2000/svg";
  const W = 400, H = 440;

  // Seeded generator so the network is the same on every visit
  let seed = 20250117;
  function rand() {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  // Build the tree from the outlet upwards
  const nodes = [];
  function node(x, y, parent, depth) {
    const n = { x, y, parent, depth, children: [] };
    if (parent) parent.children.push(n);
    nodes.push(n);
    return n;
  }
  function inside(x, y) { return x > 14 && x < W - 14 && y > 14 && y < H - 30; }

  function grow(parent, angle, len, depth) {
    const x = parent.x + Math.sin(angle) * len;
    const y = parent.y - Math.cos(angle) * len;
    if (!inside(x, y)) return;
    const n = node(x, y, parent, depth);
    if (depth >= 6 || (depth > 2 && rand() < 0.14)) return;
    const spread = 0.38 + rand() * 0.3;
    const skew = (rand() - 0.5) * 0.35;
    grow(n, angle - spread * (0.7 + rand() * 0.5) + skew, len * (0.7 + rand() * 0.2), depth + 1);
    grow(n, angle + spread * (0.7 + rand() * 0.5) + skew, len * (0.7 + rand() * 0.2), depth + 1);
  }

  const outlet = node(W / 2, H - 22, null, 0);
  grow(outlet, (rand() - 0.5) * 0.15, 66, 1);

  // Upstream size (number of headwater tips) sets channel width
  function tips(n) { n.tips = n.children.length ? n.children.reduce((s, c) => s + tips(c), 0) : 1; return n.tips; }
  tips(outlet);

  // Onset time: headwaters dry almost together, then the onset travels down each
  // link; a junction goes into drought once its upstream branches have.
  const speed = 0.012;
  function onset(n) {
    if (!n.children.length) { n.t = rand() * 0.25; return n.t; }
    n.t = Math.max(...n.children.map(c => onset(c) + c.len * speed));
    return n.t;
  }
  nodes.forEach(n => { if (n.parent) n.len = Math.hypot(n.x - n.parent.x, n.y - n.parent.y); });
  onset(outlet);
  const tMax = outlet.t;

  // Draw: each link from its upstream end to its downstream end, gently curved
  const gBase = document.createElementNS(NS, "g");
  const gDry = document.createElementNS(NS, "g");
  const gGauge = document.createElementNS(NS, "g");
  svg.append(gBase, gDry, gGauge);

  const links = [];
  nodes.forEach(n => {
    if (!n.parent) return;
    const p = n.parent;
    const mx = (n.x + p.x) / 2, my = (n.y + p.y) / 2;
    const off = (rand() - 0.5) * n.len * 0.35;
    const cx = mx + (-(p.y - n.y) / n.len) * off;
    const cy = my + ((p.x - n.x) / n.len) * off;
    const d = `M${n.x.toFixed(1)},${n.y.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    const w = 0.9 + 0.85 * Math.sqrt(n.tips);

    const base = document.createElementNS(NS, "path");
    base.setAttribute("d", d); base.setAttribute("class", "link-base"); base.setAttribute("stroke-width", w);
    gBase.appendChild(base);

    const dry = document.createElementNS(NS, "path");
    dry.setAttribute("d", d); dry.setAttribute("class", "link-dry"); dry.setAttribute("stroke-width", w);
    gDry.appendChild(dry);
    const L = dry.getTotalLength();
    dry.style.strokeDasharray = L;
    dry.style.strokeDashoffset = L;
    links.push({ el: dry, L, t0: n.t, t1: n.t + n.len * speed });
  });

  // Gauges at the main junctions and at the outlet
  const gauges = nodes
    .filter(n => n === outlet || (n.children.length && n.depth <= 3 && n.tips >= 3))
    .map(n => {
      const c = document.createElementNS(NS, "circle");
      c.setAttribute("cx", n.x); c.setAttribute("cy", n.y);
      c.setAttribute("r", n === outlet ? 5.5 : 4.2);
      c.setAttribute("class", "gauge");
      gGauge.appendChild(c);
      return { el: c, t: n.t };
    });

  // Fit the view to the network
  const xs = nodes.map(n => n.x), ys = nodes.map(n => n.y), pad = 12;
  const x0 = Math.min(...xs) - pad, y0 = Math.min(...ys) - pad;
  svg.setAttribute("viewBox", `${x0} ${y0} ${Math.max(...xs) + pad + 40 - x0} ${Math.max(...ys) + pad - y0}`);

  const label = document.createElementNS(NS, "text");
  label.setAttribute("x", outlet.x + 12); label.setAttribute("y", outlet.y + 4);
  label.setAttribute("class", "outlet-label");
  label.textContent = svg.dataset.outlet || "OUTLET";
  svg.appendChild(label);

  // One cycle: propagate, hold, recover
  function draw(time) {
    links.forEach(k => {
      const f = Math.min(1, Math.max(0, (time - k.t0) / (k.t1 - k.t0)));
      k.el.style.strokeDashoffset = k.L * (1 - f);
    });
    gauges.forEach(g => g.el.classList.toggle("dry", time >= g.t));
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { draw(tMax * 0.6); return; }

  const RUN = 6500, HOLD = 1800, FADE = 1200, CYCLE = RUN + HOLD + FADE + 600;
  let start = null, visible = true;
  new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(svg);

  function frame(now) {
    if (start === null) start = now;
    if (visible && !document.hidden) {
      const ph = (now - start) % CYCLE;
      if (ph < RUN) { gDry.style.opacity = 1; draw((ph / RUN) * tMax); }
      else if (ph < RUN + HOLD) { draw(tMax); }
      else if (ph < RUN + HOLD + FADE) {
        gDry.style.opacity = 1 - (ph - RUN - HOLD) / FADE;
        gauges.forEach(g => g.el.classList.remove("dry"));
      } else { gDry.style.opacity = 0; draw(-1); }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
