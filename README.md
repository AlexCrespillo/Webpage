# Alex Crespillo López — personal website

Source of [alexcrespillo.github.io/Webpage](https://alexcrespillo.github.io/Webpage/), the academic page of Alex Crespillo López, PhD researcher at the Pyrenean Institute of Ecology ([IPE-CSIC](https://www.ipe.csic.es/)) and the [Laboratory of Climatology and Climate Services](https://lcsc.csic.es/), Zaragoza. The research is on how hydrological drought propagates through river networks.

The page is in English, with a Spanish version at [/es/](https://alexcrespillo.github.io/Webpage/es/).

## Contents

| Section | What it holds |
|---|---|
| Intro | Short presentation, links (email, CV, ORCID, GitHub, ResearchGate, LinkedIn) and an animated sketch of a river network in which drought onset moves downstream |
| About | Portrait, doctorate, supervisor, funding and expected defence, institution logos |
| Research | The four parts of the thesis and their status |
| Publications | Journal articles, articles under review and conference contributions, with links to the articles, code and slides |
| Background | Experience, education, tools, languages and courses |
| Contact | Institutional email and address |

## Files

```
index.html                  English page
es/index.html               Spanish page (same structure, paths with ../)
style.css                   Styles for both pages, light and dark themes
network.js                  Generates and animates the river-network sketch
Cv/                         CV in PDF
Talks/                      Slides of conference talks
Photos and logos/           Portrait and institution logos
```

It is a static site with no build step and no dependencies other than Google Fonts. GitHub Pages serves it from the `main` branch.

## Updating it

- Each change to the content has to be made in **both** `index.html` and `es/index.html`.
- **New publication:** copy an existing `<li class="pub">` block in the right list. Use `class="pub own"` for first-author work, which adds the coloured dot.
- **New CV:** replace the PDF in `Cv/` and, if the file name changes, update the links (two per page).
- **Thesis progress:** change the label in `<span class="status">`. The class `done` marks a finished part.
- Update the date in the footer.

To preview locally, from the repository folder:

```bash
python -m http.server 8000
```

and open `http://localhost:8000`.

## Contact

[alex@ipe.csic.es](mailto:alex@ipe.csic.es) · [ORCID 0009-0009-3918-8702](https://orcid.org/0009-0009-3918-8702)
