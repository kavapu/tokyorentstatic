# 📸 Complete Guide: Adding Images to TokyoRent Website

## 🚀 Quick Start

### 1. **Add Your Images**
```bash
# Copy images to the images folder
cp your-image.jpg dist/images/
cp your-logo.png dist/images/
cp apartment-photos/* dist/images/apartments/
```

### 2. **Reference in HTML**
```html
<!-- Basic image -->
<img src="./images/your-image.jpg" alt="Description">

<!-- With styling -->
<img src="./images/logo.png" alt="Logo" class="logo-image">

<!-- Background image -->
<div class="hero" style="background-image: url('./images/hero-bg.jpg');">
```

## 📁 Folder Structure

```
dist/images/
├── logo.png                    # Company logo
├── hero-bg.jpg                 # Hero background
├── apartments/                 # Apartment photos
│   ├── flat1.jpg
│   ├── flat2.jpg
│   └── flat3.jpg
├── team/                       # Team photos
│   ├── agent1.jpg
│   └── agent2.jpg
└── icons/                      # Custom icons
    ├── facebook.svg
    └── twitter.svg
```

## 🎯 Common Use Cases

### 1. **Company Logo**
```html
<!-- In navigation -->
<div class="nav-logo">
    <a href="./index.html">
        <img src="./images/logo.png" alt="TokyoRent Logo">
        <span>TokyoRent</span>
    </a>
</div>
```

### 2. **Hero Background**
```html
<!-- Option 1: CSS background -->
<section class="hero" style="background-image: url('./images/hero-bg.jpg'); background-size: cover;">

<!-- Option 2: With overlay class -->
<section class="hero with-bg-image" style="background-image: url('./images/hero-bg.jpg');">
```

### 3. **Apartment Photos**
```html
<!-- Replace placeholder with real photo -->
<div class="flat-image">
    <img src="./images/apartments/flat1.jpg" alt="Cozy Studio in Shibuya">
    <div class="flat-badge">Available</div>
</div>
```

### 4. **Team Member Photos**
```html
<div class="team-member">
    <img src="./images/team/agent1.jpg" alt="Agent Name">
    <h3>Agent Name</h3>
    <p>Senior Property Manager</p>
</div>
```

### 5. **Testimonial Photos**
```html
<div class="testimonial">
    <img src="./images/testimonials/sarah.jpg" alt="Sarah Johnson" class="testimonial-photo">
    <p>"Great service!"</p>
</div>
```

## 🎨 CSS Styling Examples

### **Responsive Images**
```css
img {
    max-width: 100%;
    height: auto;
}
```

### **Cover Images (for cards)**
```css
.card-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
```

### **Circular Images**
```css
.profile-photo img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
}
```

### **Hover Effects**
```css
.apartment-image img {
    transition: transform 0.3s ease;
}

.apartment-image:hover img {
    transform: scale(1.05);
}
```

## 📐 Recommended Image Sizes

| Use Case | Width | Height | Format |
|----------|-------|--------|--------|
| Logo | 200px | 80px | PNG |
| Hero Background | 1920px | 1080px | JPG |
| Apartment Photos | 800px | 600px | JPG |
| Team Photos | 400px | 400px | JPG |
| Icons | 32px | 32px | SVG/PNG |
| Testimonial Photos | 100px | 100px | JPG |

## 🔧 Image Optimization

### **File Formats**
- **JPG**: Photos, backgrounds (smaller file size)
- **PNG**: Logos, graphics with transparency
- **SVG**: Icons, scalable graphics
- **WebP**: Modern format (better compression)

### **Compression Tips**
```bash
# Using ImageOptim (Mac) or similar tools
# Target file sizes:
# - Thumbnails: < 50KB
# - Regular photos: < 200KB
# - Hero images: < 500KB
```

### **Lazy Loading**
```html
<!-- For better performance -->
<img src="./images/apartment.jpg" alt="Apartment" loading="lazy">
```

## 🚨 Common Issues & Solutions

### **Image Not Showing**
```html
<!-- ❌ Wrong path -->
<img src="/images/logo.png">

<!-- ✅ Correct path -->
<img src="./images/logo.png">
```

### **Image Too Large**
```css
/* Add max-width to prevent overflow */
img {
    max-width: 100%;
    height: auto;
}
```

### **Poor Quality on Retina Displays**
```html
<!-- Use 2x images for high-DPI displays -->
<img src="./images/logo@2x.png" alt="Logo">
```

## 📱 Mobile Optimization

### **Responsive Images**
```html
<!-- Different sizes for different screens -->
<picture>
    <source media="(min-width: 768px)" srcset="./images/hero-large.jpg">
    <source media="(min-width: 480px)" srcset="./images/hero-medium.jpg">
    <img src="./images/hero-small.jpg" alt="Hero">
</picture>
```

### **Touch-Friendly Sizes**
```css
/* Ensure images are large enough to tap */
.interactive-image {
    min-width: 44px;
    min-height: 44px;
}
```

## 🔄 Deployment

### **After Adding Images**
```bash
# 1. Add images to dist/images/
# 2. Update HTML to reference them
# 3. Commit and push

cd dist
git add images/
git commit -m "Add new images"
git push
```

### **GitHub Pages**
- Images will be available at: `https://yourusername.github.io/tokyorentstatic/images/`
- Example: `https://yourusername.github.io/tokyorentstatic/images/logo.png`

## 🎯 Best Practices

1. **Use descriptive filenames**: `tokyo-apartment-shibuya.jpg`
2. **Include alt text**: `<img src="..." alt="Description">`
3. **Optimize file sizes**: Compress images before uploading
4. **Use relative paths**: Always start with `./images/`
5. **Test on different devices**: Ensure images look good on mobile
6. **Backup originals**: Keep high-resolution versions

## 🆘 Troubleshooting

### **Image Still Not Showing?**
1. Check file path starts with `./images/`
2. Verify image file exists in the folder
3. Check file permissions
4. Clear browser cache
5. Check browser console for 404 errors

### **Images Loading Slowly?**
1. Compress images further
2. Use WebP format if supported
3. Implement lazy loading
4. Consider using a CDN for large images
