# Requirements

This document outlines all technical requirements, dependencies, and setup instructions for the Harwinder Singh Portfolio project.

## System Requirements

### Node.js Environment
- **Node.js**: Version 18.0.0 or higher (recommended: LTS version)
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Operating System**: Windows, macOS, or Linux

### Browser Compatibility
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **JavaScript**: ES2020+ support required
- **CSS**: CSS Grid and Flexbox support required

## Core Dependencies

### Runtime Dependencies
```json
{
  "emailjs-com": "^3.2.0",        // Email service integration for contact forms
  "framer-motion": "^12.23.0",    // Animation library for smooth transitions
  "react": "^19.1.0",             // Core React framework
  "react-dom": "^19.1.0",         // React DOM rendering
  "react-icons": "^5.5.0",        // Icon library (Font Awesome, etc.)
  "react-router-dom": "^7.6.3"    // Client-side routing
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.29.0",                    // ESLint JavaScript configuration
  "@types/react": "^19.1.8",                 // React TypeScript definitions
  "@types/react-dom": "^19.1.6",             // React DOM TypeScript definitions
  "@vitejs/plugin-react": "^4.5.2",          // Vite React plugin
  "eslint": "^9.29.0",                       // JavaScript linter
  "eslint-plugin-react-hooks": "^5.2.0",     // React Hooks ESLint rules
  "eslint-plugin-react-refresh": "^0.4.20",  // React Fast Refresh ESLint rules
  "gh-pages": "^6.3.0",                      // GitHub Pages deployment
  "globals": "^16.2.0",                      // Global variables for ESLint
  "vite": "^7.0.0"                           // Build tool and dev server
}
```

## Technical Stack Requirements

### Frontend Framework
- **React 19.1.0**: Uses latest React features including concurrent rendering
- **JSX**: All components written in JSX (not TypeScript)
- **ES Modules**: Project uses `"type": "module"` in package.json

### Build System
- **Vite 7.0.0**: Modern build tool for fast development and optimized production builds
- **ES2020**: Target compilation level for modern JavaScript features

### Routing
- **React Router DOM 7.6.3**: Client-side routing with browser history API
- **Base Path**: Configured for `/my-portfolio/` deployment path

### Animation & UI
- **Framer Motion 12.23.0**: Declarative animations and gestures
- **React Icons 5.5.0**: Comprehensive icon library
- **CSS3**: Modern CSS features including Grid, Flexbox, and CSS Variables

### Development Tools
- **ESLint 9.29.0**: Code linting with React-specific rules
- **Vite Dev Server**: Hot module replacement and fast refresh
- **GitHub Pages**: Static site deployment platform

## Setup Requirements

### Initial Setup
1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - No environment variables required for basic functionality
   - EmailJS configuration needed for contact form (if used)

### Development Environment
- **Port**: Vite dev server runs on http://localhost:5173 by default
- **Hot Reload**: Automatic browser refresh on file changes
- **ESLint Integration**: Real-time linting in supported editors

## Deployment Requirements

### GitHub Pages Deployment
- **Build Output**: `dist/` directory
- **Base Path**: `/my-portfolio/` configured in vite.config.js
- **Branch**: Deployment to `gh-pages` branch
- **Domain**: Serves from username.github.io/my-portfolio/

### Build Process
```bash
npm run build      # Creates production build in dist/
npm run preview    # Preview production build locally
npm run deploy     # Build and deploy to GitHub Pages
```

## Performance Requirements

### Bundle Size
- **Target**: < 500KB total bundle size (gzipped)
- **Code Splitting**: Automatic via Vite/Rollup
- **Tree Shaking**: Dead code elimination enabled

### Runtime Performance
- **First Contentful Paint**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Animation Frame Rate**: 60fps for smooth animations

## Browser Support Matrix

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome  | 90+     | Full Support  |
| Firefox | 88+     | Full Support  |
| Safari  | 14+     | Full Support  |
| Edge    | 90+     | Full Support  |
| IE      | Any     | Not Supported |

## Security Requirements

- **Content Security Policy**: Implemented via build process
- **XSS Protection**: React's built-in XSS protection
- **HTTPS**: Required for production deployment
- **No Sensitive Data**: All configuration is client-side safe

## Accessibility Requirements

- **WCAG 2.1**: Level AA compliance target
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 ratio for text