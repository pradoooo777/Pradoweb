# Pangasinan Heritage Digital Showcase

A mobile-first static website for the Pangasinan Provincial Tourism Office, showcasing Hundred Islands National Park, Cape Bolinao Lighthouse, and Balungao Hot Spring.

## Project Title

Pangasinan Heritage Digital Showcase

## Student Name

John Recto Prado

## Selected Framework

Next.js 14 (App Router) with Static Site Generation (`output: "export"`)

## Live Website

[https://pradoooo777.github.io/Pradoweb/](https://pradoooo777.github.io/Pradoweb/)

## GitHub Repository

[https://github.com/pradoooo777/Pradoweb](https://github.com/pradoooo777/Pradoweb)

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Architecture:** Brad Frost Atomic Design
- **Deployment:** GitHub Pages (JAMstack static export)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the heritage showcase.  
Open [http://localhost:3000/design-system](http://localhost:3000/design-system) for the live component documentation.

## Static build

```bash
npm run build
```

The production static files are generated in the `out/` folder for GitHub Pages.

## Project Structure

```
src/
├── tokens/           # Design tokens (colors)
├── components/
│   ├── atoms/        # Button, Typography, ColorTokens, Icon, Image
│   ├── molecules/    # HeritageCard, SearchForm, NavigationItem
│   └── organisms/    # HeritageGrid, HeaderNavigation, HeritageExplorer, SiteFooter
├── data/             # Heritage site content
└── app/              # Statically generated pages
```
