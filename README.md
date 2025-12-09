# Creafonds AG Website

Modern, mobile-first website redesign for Creafonds AG - a Swiss real estate investment company.

## 🌐 Live Preview

Start a local server to preview the website:

```bash
# Using Python
python3 -m http.server 8080

# Or using Node.js
npx serve
```

Then open `http://localhost:8080` in your browser.

## 📁 Project Structure

```
roger-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # All styles (mobile-first)
├── js/
│   └── main.js             # JavaScript functionality
├── images/
│   ├── home/               # Hero/slider images
│   │   ├── slide-1.jpg
│   │   ├── slide-2.jpg
│   │   └── ...
│   ├── portfolio/          # Property images
│   │   ├── basel.jpg
│   │   ├── steinhausen.jpg
│   │   └── ...
│   ├── team/               # Team member photos
│   │   ├── daniele-obino.jpg
│   │   ├── joerg-furrer.jpg
│   │   └── ...
│   ├── strategy/           # Strategy chart
│   │   └── strategy-chart.png
│   └── logo.png            # Company logo
└── README.md               # This file
```

## ✨ Features

- **Mobile-First Design**: Fully responsive, optimized for all screen sizes
- **Modern Dark Theme**: Elegant color scheme inspired by remnex.ch
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Portfolio Filter**: Filter properties by type (Renditeliegenschaft/Entwicklungsareal)
- **Interactive Modals**: Detailed property views with image galleries
- **Google Maps Integration**: Embedded map for contact section
- **Homegate Ready**: Modal system supports Homegate links when available

## 🎨 Design System

### Colors (Bright Theme - based on creafonds.ch)
- Background Primary: `#ffffff`
- Background Secondary: `#f8f9fa`
- Accent Blue: `#4F91D5`
- Dark Blue: `#0F335A`
- Text Primary: `#0F335A`
- Text Secondary: `#4a5568`

### Typography
- Headings: Playfair Display (serif)
- Body: Open Sans (sans-serif)

## 📱 Sections

1. **Hero**: Full-screen header with animated background
2. **About**: Company introduction with key statistics
3. **Portfolio**: Property grid with filter functionality
4. **Strategy (Anlagestrategie)**: Investment strategy details
5. **Team (Organisation)**: Board members and management
6. **Contact**: Address, phone, email with embedded map

## 🔧 Customization

### Adding Homegate Links

Edit `js/main.js` and add the Homegate URL to the portfolio data:

```javascript
portfolioData = {
    propertyKey: {
        // ... other data
        homegate: 'https://www.homegate.ch/...'
    }
}
```

### Adding New Properties

1. Add property card in `index.html` (Portfolio section)
2. Add property data in `js/main.js` (portfolioData object)

## 📦 Dependencies

None! Pure HTML, CSS, and JavaScript.

External resources loaded via CDN:
- Google Fonts (Cormorant Garamond, Outfit)
- Google Maps Embed

## 🖼️ Images

All images are stored locally in the `/images` directory, organized by category:
- `home/` - Hero slider images
- `portfolio/` - Property images
- `team/` - Team member photos
- `strategy/` - Strategy chart

For production optimization, consider:
- Converting images to WebP format
- Using a CDN for faster delivery
- Adding responsive image srcsets

## 📄 License

© 2025 Creafonds AG. All rights reserved.

## 🙏 Credits

- Design Inspiration: [remnex.ch](https://www.remnex.ch)
- Original Content: [creafonds.ch](https://www.creafonds.ch)
- Development: Cursor AI

