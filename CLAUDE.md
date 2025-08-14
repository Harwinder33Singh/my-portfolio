# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run lint` - Run ESLint code linting
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Project Architecture

This is a React portfolio website built with Vite, featuring:

### Tech Stack
- **React 19** with functional components and hooks
- **React Router DOM** for client-side routing with basename `/my-portfolio`
- **Framer Motion** for animations and scroll-triggered effects
- **React Icons** for iconography
- **EmailJS** for contact form functionality
- **Vite** as build tool and development server

### Project Structure
```
src/
├── App.jsx              # Main app with navigation and routing
├── main.jsx            # React app entry point
├── pages/              # Route components
│   ├── Home.jsx        # Landing page with typewriter effect
│   ├── Projects.jsx    # Project showcase grid
│   ├── Contact.jsx     # Contact information
│   └── Projects/       # Individual project detail pages
│       ├── Seeme.jsx   # SeeMe AI Voice Assistant details
│       └── MarsField.jsx # Mars on the Field VR project
├── components/
│   └── HomeTimeline/   # Animated timeline component
└── assets/             # Images and media files
```

### Key Architecture Patterns

**Routing**: Uses React Router with basename `/my-portfolio/` for GitHub Pages deployment. All internal links should use relative paths or the Link component.

**State Management**: Uses React's built-in useState and useEffect hooks. No external state management library.

**Animation**: Framer Motion is used throughout for:
- `initial={{ opacity: 0, y: 30 }}` and `whileInView={{ opacity: 1, y: 0 }}` scroll animations
- Staggered animations using delay multipliers (e.g., `delay: idx * 0.1`)

**Styling**: CSS modules approach with separate CSS files per component/page.

**Navigation**: Hamburger menu for mobile with `open` state toggle. Uses `NavLink` with active state styling.

## Development Notes

- The project uses GitHub Pages deployment with base path `/my-portfolio/`
- ESLint configured with React hooks and refresh plugins
- Custom rule: unused vars ignored if they match pattern `^[A-Z_]`
- TypeScript types available but project uses JSX (not TSX)
- All animations use `viewport={{ once: true }}` to trigger only on first scroll into view

## Component Patterns

**Motion Components**: Create motion-enabled versions of components:
```javascript
const MotionLink = motion(Link);
```

**Timeline Data**: Timeline components use static data arrays with period, role, company structure.

**Project Cards**: Projects use image, title, description, and link structure for consistent grid layout.