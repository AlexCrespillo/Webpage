# Alex Crespillo López - Academic Portfolio Website

## 📋 Overview

This is a professional academic portfolio website for **Alex Crespillo López**, a Predoctoral Researcher (PhD student) specializing in hydrology and climate science at the Institute of Pyrenean Ecology - CSIC.

The website showcases academic achievements, research projects, publications, skills, and contact information in a modern, responsive, and elegant design.

---

## 📁 File Structure

```
Webpage/
├── index.html              # Main HTML file (website structure)
├── style.css               # Stylesheet (all visual styling)
├── WEBSITE_README.md       # This documentation file
├── Cv/
│   └── cv.pdf             # Your curriculum vitae
├── Photos and logos/
│   ├── Photo_me.JPG       # Your profile photo
│   ├── new_header.jpg     # Header background image
│   ├── IPE-CSIC logo.jpg  # Institution logo
│   ├── LCSC logo.png      # LCSC logo
│   └── momentum_logo.png  # Momentum program logo
└── Proyects/
    ├── Author/
    │   └── master_thesis.pdf
    └── Co-author/
        ├── An Optimal and Flexible Approach for Drought.pdf
        ├── Developing science-informed maps and climate service for.pdf
        ├── Ems2024.pdf
        └── Spatial Assessment of Dry-Spell Hazards in Spain...pdf
```

---

## 🌐 Website Sections

### 1. **Navigation Bar**
- Sticky navigation that stays at the top while scrolling
- Smooth scroll to different sections
- Mobile-responsive hamburger menu for smaller screens
- Active link highlighting based on current section

### 2. **Hero Section**
- Full-screen landing area with background image
- Your name, position, and affiliation
- Call-to-action buttons (Learn More, Download CV)
- Animated scroll indicator

### 3. **About Me**
- Profile photo
- Professional bio (3 paragraphs)
- Information cards showing:
  - Current Position
  - Institution
  - Research Focus

### 4. **Research & Projects**
- Four research area cards:
  - Drought Characterization
  - Dry-Spell Hazard Mapping
  - Climate Services Development
  - Hydrological Modeling
- Affiliated programs/institutions with logos

### 5. **Publications & Contributions**
- Master's Thesis section
- Co-authored publications (4 papers)
- Download links to all PDF documents
- Academic profile links (ResearchGate, ORCID, Google Scholar, GitHub)

### 6. **Skills & Training**
- Technical skills with progress bars:
  - Python, R & RStudio, Machine Learning, Data Science, GIS, Climate Data Analysis
- Languages: Spanish, English, French
- Certifications and training courses (5 listed)

### 7. **Contact**
- Email card with direct link
- Location information
- CV download option
- Social media icons (LinkedIn, GitHub, ResearchGate, ORCID, Google Scholar, Twitter)

### 8. **Footer**
- Copyright information
- Institution logo
- Additional attribution

### 9. **Additional Features**
- Scroll-to-top button (appears after scrolling down)
- Smooth scrolling throughout
- Hover effects and animations
- Fully responsive for all device sizes

---

## 🎨 Design Features

### Color Palette
- **Primary Color (Teal):** `#0d9488` - Main accent color
- **Secondary Color (Navy):** `#1e3a8a` - Headers and emphasis
- **Text Dark:** `#1f2937` - Main text
- **Text Light:** `#6b7280` - Secondary text
- **Background Light:** `#f9fafb` - Light sections
- **Background White:** `#ffffff` - White sections

### Typography
- **Font Family:** Segoe UI, Roboto, Helvetica Neue, Arial (sans-serif)
- **Base Font Size:** 16px
- **Line Height:** 1.6 for optimal readability

### Responsive Breakpoints
- **Desktop:** 1200px and above
- **Tablet:** 768px - 992px
- **Mobile:** 480px - 768px
- **Small Mobile:** Below 480px

---

## 🚀 How to Use

### Viewing Locally

1. **Open the website:**
   - Simply double-click `index.html` in your file explorer
   - Or right-click and choose "Open with" → Your preferred browser

2. **Navigate the site:**
   - Use the navigation menu to jump to different sections
   - Click on PDF links to view publications
   - Click social media icons to visit profiles (update links first!)

### Deploying to GitHub Pages

1. **Create a GitHub repository:**
   ```bash
   git init
   git add index.html style.css "Photos and logos/" Cv/ Proyects/
   git commit -m "Initial commit: Academic portfolio website"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "main" branch as source
   - Save
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

3. **Custom Domain (Optional):**
   - Purchase a domain name
   - Add a `CNAME` file with your domain
   - Configure DNS settings in your domain provider

---

## ✏️ How to Update Content

### Updating Text Content

**To change your bio:**
1. Open `index.html` in a text editor
2. Find the section with `id="about"`
3. Locate the paragraphs under `<div class="about-text">`
4. Edit the text within `<p>` tags
5. Save the file

**To change section titles:**
- Find `<h2 class="section-title">` tags
- Update the text between the tags

**To update contact email:**
1. Find the Contact section (`id="contact"`)
2. Update the email address in:
   - The text display: `<p>alex.crespillo@ipe.csic.es</p>`
   - The mailto link: `<a href="mailto:alex.crespillo@ipe.csic.es">`

### Adding/Removing Publications

**To add a new publication:**
1. Open `index.html`
2. Find the Publications section
3. Copy an existing `<div class="publication-item">` block
4. Paste it where you want the new publication
5. Update:
   - Title in `<h4>` tag
   - Publication type in `<span class="pub-type">`
   - Description in `<p class="pub-description">`
   - PDF link in `<a href="path/to/file.pdf">`
6. Add the PDF file to the appropriate folder

**To remove a publication:**
- Delete the entire `<div class="publication-item">` block

### Updating Social Media Links

1. Find the Contact section's social icons
2. Replace the `#` in `<a href="#">` with your actual URLs:
   ```html
   <a href="https://www.linkedin.com/in/your-profile" title="LinkedIn" target="_blank">
   <a href="https://github.com/your-username" title="GitHub" target="_blank">
   <a href="https://www.researchgate.net/profile/your-profile" title="ResearchGate" target="_blank">
   <a href="https://orcid.org/0000-0000-0000-0000" title="ORCID" target="_blank">
   ```

### Changing Images

**Profile Photo:**
1. Replace `Photos and logos/Photo_me.JPG` with your new photo (keep the same filename)
2. Or update the path in: `<img src="Photos and logos/Photo_me.JPG">`

**Header Background:**
1. Replace `Photos and logos/new_header.jpg`
2. Or update in `style.css`: Find `.hero` section and change `background-image: url('...')`

**Logos:**
- Replace files in `Photos and logos/` folder
- Or update paths in the HTML

### Modifying Skills

**To adjust skill levels:**
1. Find the Skills section in `index.html`
2. Locate the skill bars: `<div class="skill-progress" style="width: 90%;"></div>`
3. Change the percentage value (0-100%)

**To add a new skill:**
1. Copy a complete `<div class="skill-item">` block
2. Update the icon, title, description, and percentage

### Changing Colors

1. Open `style.css`
2. Find the `:root` section at the top
3. Modify the CSS variables:
   ```css
   --primary-color: #0d9488;        /* Your preferred color */
   --secondary-color: #1e3a8a;      /* Your preferred color */
   ```
4. Colors update automatically throughout the site

---

## 🔧 Technical Details

### Technologies Used
- **HTML5:** Semantic markup for structure
- **CSS3:** Modern styling with CSS Grid and Flexbox
- **JavaScript:** Vanilla JS for interactions (no frameworks)
- **Font Awesome 6.4.0:** Icon library (loaded from CDN)

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- Optimized CSS with minimal repaints
- Smooth scroll behavior
- CSS animations (hardware-accelerated)
- Responsive images
- Minimal external dependencies

### Accessibility Features
- Semantic HTML5 elements
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus states for interactive elements

---

## 📱 Responsive Design

The website automatically adapts to different screen sizes:

- **Desktop (> 992px):** Full multi-column layout
- **Tablet (768px - 992px):** Adjusted grid layouts
- **Mobile (< 768px):** Single-column layout, hamburger menu
- **Small Mobile (< 480px):** Optimized for very small screens

---

## 🎯 Future Improvements

Consider adding these features in the future:

1. **Blog Section:** Share research updates and insights
2. **Interactive CV Timeline:** Visual representation of academic journey
3. **Research Data Visualizations:** D3.js charts for climate data
4. **Contact Form:** Instead of just email links
5. **Multi-language Support:** Spanish/English toggle
6. **Dark Mode Toggle:** User-selectable theme
7. **Publication Filters:** Sort by year, type, topic
8. **Search Functionality:** Find publications and projects
9. **Analytics Integration:** Track visitor statistics with Google Analytics
10. **RSS Feed:** For blog posts or updates

---

## 🛠️ Troubleshooting

### Images Not Displaying
- **Check file paths:** Ensure paths in HTML match actual file locations
- **Check file names:** Case-sensitive on some systems
- **Check file formats:** Use JPG, PNG, or GIF

### PDF Links Not Working
- Verify PDF files are in correct folders
- Check file names match exactly (including spaces)
- Ensure PDFs aren't corrupted

### Styling Issues
- Clear browser cache: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check that `style.css` is in the same directory as `index.html`
- Verify the `<link>` tag in HTML header

### Mobile Menu Not Working
- Check JavaScript at bottom of `index.html` is intact
- Test in different browsers
- Check browser console for errors (F12)

### Slow Loading
- Optimize images (reduce file size)
- Consider using WebP format for images
- Compress PDF files

---

## 📞 Support

If you need help customizing the website:
1. Check this documentation first
2. Search for HTML/CSS tutorials online
3. Use browser Developer Tools (F12) to inspect elements
4. Consult web development communities (Stack Overflow, Reddit)

---

## 📝 License

This website template is free to use and modify for personal academic purposes.

---

## ✅ Checklist Before Going Live

- [ ] Update all social media links from `#` to actual URLs
- [ ] Verify all PDF links work correctly
- [ ] Update email address if different
- [ ] Check all images display properly
- [ ] Test on mobile device
- [ ] Add Google Analytics tracking code (optional)
- [ ] Test all navigation links
- [ ] Proofread all text content
- [ ] Optimize images for web (< 500KB each)
- [ ] Add favicon (small icon for browser tab)
- [ ] Test website speed with PageSpeed Insights
- [ ] Add meta description for SEO
- [ ] Submit to search engines (Google Search Console)

---

## 📚 Resources

### Learning Resources
- **HTML:** [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS:** [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Responsive Design:** [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Tools
- **Image Optimization:** [TinyPNG](https://tinypng.com/)
- **PDF Compression:** [iLovePDF](https://www.ilovepdf.com/compress_pdf)
- **Color Picker:** [Coolors](https://coolors.co/)
- **Font Awesome Icons:** [Font Awesome Gallery](https://fontawesome.com/icons)

### Hosting Options
- **GitHub Pages:** Free, easy, perfect for static sites
- **Netlify:** Free tier, automatic deployments
- **Vercel:** Free for personal projects
- **Firebase Hosting:** Free tier available

---

**Created:** October 2025
**Last Updated:** October 2025
**Version:** 1.0

---

*This website was designed with academic professionalism, accessibility, and user experience in mind. Enjoy showcasing your research!* 🎓🌍
