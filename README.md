# TokyoRent - Static Website

This is a static version of the TokyoRent website, converted from a Node.js + Express + EJS application for deployment on GitHub Pages.

## 📁 File Structure

```
dist/
├── index.html          # Home page
├── flats.html          # Available apartments listing
├── apply.html          # Rental application form
├── faq.html           # Frequently asked questions
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── main.js        # Main JavaScript file
└── images/            # Image assets (if any)
```

## 🚀 Deployment to GitHub Pages

1. **Create a new GitHub repository** (or use an existing one)

2. **Upload the contents of the `dist/` folder** to your repository:
   - You can drag and drop the files directly to GitHub
   - Or use Git commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Your site will be available at**: `https://yourusername.github.io/your-repo-name/`

## 🎨 Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Static Content**: All apartment listings and FAQ content is hardcoded
- **Client-side Form Handling**: Application form shows success message on submit
- **Interactive Elements**: FAQ accordion, modal popups, form validation
- **Modern UI**: Clean, professional design with smooth animations

## 📝 Pages

### Home (`index.html`)
- Hero section with call-to-action buttons
- Features highlighting TokyoRent benefits
- Statistics and testimonials
- Contact form with client-side submission

### Available Flats (`flats.html`)
- 10 apartment listings with detailed information
- Filter options (non-functional in static version)
- Grid/List view toggle
- "Apply Now" buttons linking to application form

### Application Form (`apply.html`)
- Comprehensive rental application form
- Client-side validation
- Success message on submission
- Form data logged to console (for demo purposes)

### FAQ (`faq.html`)
- 8 common questions with expandable answers
- Interactive accordion functionality
- Contact links for additional support

## 🔧 Customization

### Adding New Apartments
Edit `flats.html` and add new apartment cards following the existing structure:

```html
<div class="flat-card">
    <div class="flat-image">
        <div class="flat-placeholder">
            <i class="fas fa-home"></i>
            <p>Your Apartment Title</p>
        </div>
        <div class="flat-badge">Available</div>
    </div>
    <div class="flat-content">
        <!-- Add apartment details here -->
    </div>
</div>
```

### Adding New FAQ Items
Edit `faq.html` and add new FAQ items:

```html
<div class="faq-item">
    <div class="faq-question" onclick="toggleFAQ(8)">
        <h3>Your Question?</h3>
        <i class="fas fa-chevron-down faq-icon"></i>
    </div>
    <div class="faq-answer" id="faq-answer-8">
        <p>Your answer here.</p>
    </div>
</div>
```

### Styling Changes
Edit `css/style.css` to modify colors, fonts, layouts, etc.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Notes

- This is a static site with no server-side processing
- Form submissions are handled client-side only
- No sensitive data is transmitted or stored
- All external resources (fonts, icons) are loaded from CDNs

## 📞 Support

For questions about the static site or deployment, please refer to the original project documentation or contact the development team.

---

**Note**: This static version maintains all the visual design and user experience features of the original dynamic application while being fully deployable on static hosting platforms like GitHub Pages.
