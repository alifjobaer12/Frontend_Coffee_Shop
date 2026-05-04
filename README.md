# Coffee Cup Landing Page

A modern coffee shop landing page built with React, Vite, and Tailwind CSS.

This project focuses on clean visual presentation, reusable section-based components, and a straightforward front-end architecture that is easy to scale.

## Overview

Coffee Cup is a single-page marketing website for a coffee brand. It includes:

- Sticky navigation bar
- Hero section with call-to-action and key stats
- Service highlights
- Product showcase grid
- Customer review carousel
- Full footer with social links, company info, and opening hours

The current codebase is static (front-end only) and ideal as a strong base for adding routing, API integration, authentication, and e-commerce behavior.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 (via @tailwindcss/vite)
- Lucide React (UI icons)
- React Icons (social icons)
- ESLint (flat config)

## Features

- Section-driven UI architecture for maintainability
- Reusable components like section heading and cards
- Local array-driven rendering for services, products, and reviews
- Stateful customer review slider using React useState
- Responsive utility-first styling with Tailwind CSS
- Background-image based footer hero with overlay treatment

## Project Structure

```text
Coffee_Shop_Website/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- common/
|   |   |   `-- Heading.jsx
|   |   |-- navbar/
|   |   |   |-- Navbar.jsx
|   |   |   `-- navComponent/
|   |   |       |-- Logo.jsx
|   |   |       |-- NavButton.jsx
|   |   |       `-- NavLink.jsx
|   |   `-- section/
|   |       |-- hero/
|   |       |-- service/
|   |       |-- product/
|   |       |-- review/
|   |       `-- footer/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- DESIGN.md
|-- eslint.config.js
|-- index.html
|-- package.json
`-- vite.config.js
```

## App Composition

The page renders in this order:

1. Navbar
2. HeroSection
3. ServiceSection
4. ProductSection
5. ReviewSection
6. FooterSection

## Styling and Design Notes

- Tailwind CSS is enabled in src/index.css using @import "tailwindcss".
- Color palette and design direction align with coffee-inspired tones from DESIGN.md.
- Google Fonts are preconnected in index.html and Great Vibes is loaded for decorative typography in customer names.
- The component styling uses utility classes directly in JSX for quick iteration and clarity.

## Assets

The project includes local assets under src/assets, including:

- Brand/logo image
- Hero artwork
- Service icons
- Product photos
- Customer photos
- Footer background

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Available Scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| npm run dev     | Starts Vite dev server with HMR      |
| npm run build   | Generates optimized production build |
| npm run preview | Serves the build locally for preview |
| npm run lint    | Runs ESLint checks on JS/JSX files   |

## Current Limitations

- No backend/API integration yet
- No React Router setup (single-page static flow)
- CTA buttons are visual and not wired to business logic
- Product/review/service data is hardcoded in components
- Footer link labels are placeholders

## Improvement Roadmap

1. Add React Router for section and page navigation.
2. Move static arrays to centralized data files or CMS/API.
3. Implement cart, search, and signup interactions.
4. Replace placeholder links and contact metadata with real data.
5. Add loading states, error boundaries, and empty states.
6. Add tests (unit + component + integration) and CI checks.
7. Improve accessibility (focus states, ARIA labels, keyboard flow).

## Development Standards in This Repo

- Componentized structure with small reusable UI pieces.
- ESLint flat configuration with React hooks and Vite refresh rules.
- Visual consistency guided by DESIGN.md design system notes.

## Deployment

This app can be deployed easily to:

- Vercel
- Netlify
- GitHub Pages (with Vite-compatible base config if needed)

Use npm run build to generate the dist folder before deployment.

## License

This project is currently unlicensed. Add a LICENSE file if you intend to distribute it publicly.
