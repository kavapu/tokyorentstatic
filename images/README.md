# Images Guide for TokyoRent Website

## 📁 Folder Structure
```
images/
├── logo.png              # Company logo
├── hero-bg.jpg           # Hero section background
├── apartments/           # Apartment photos
│   ├── flat1.jpg
│   ├── flat2.jpg
│   └── flat3.jpg
├── team/                 # Team member photos
│   ├── agent1.jpg
│   └── agent2.jpg
└── icons/                # Custom icons
    ├── facebook.svg
    └── twitter.svg
```

## 🖼️ How to Add Images

### 1. Copy your images to this folder
```bash
cp /path/to/your/image.jpg dist/images/
```

### 2. Reference in HTML
```html
<!-- Basic image -->
<img src="./images/logo.png" alt="TokyoRent Logo">

<!-- With CSS classes -->
<img src="./images/hero-bg.jpg" alt="Hero Background" class="hero-image">

<!-- In CSS background -->
<div class="hero" style="background-image: url('./images/hero-bg.jpg');">
```

### 3. Image Optimization Tips
- Use JPG for photos
- Use PNG for logos and graphics with transparency
- Use SVG for icons
- Compress images for web (max 500KB per image)
- Use descriptive filenames

## 📐 Recommended Image Sizes

- **Logo**: 200x80px
- **Hero Background**: 1920x1080px
- **Apartment Photos**: 800x600px
- **Team Photos**: 400x400px
- **Icons**: 32x32px

## 🔗 File Paths

All image paths should be relative and start with `./images/`:
- ✅ `./images/logo.png`
- ✅ `./images/apartments/flat1.jpg`
- ❌ `/images/logo.png` (absolute path)
- ❌ `images/logo.png` (missing ./)
