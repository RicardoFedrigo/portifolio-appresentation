# 🎯 Portfolio Presentation

A modern, interactive portfolio website built with React, TypeScript, and Vite. This project features a terminal-style interface with smooth animations and dark mode design.

## ✨ Features

- **Terminal-style Interface** - Interactive command-line like experience
- **Multi-language Support** - English and Portuguese (Brazilian)
- **Dark Mode Design** - Creative dark theme with modern aesthetics
- **Responsive Layout** - Fully responsive design with Windows-style UI
- **Smooth Animations** - Page transitions and animated components
- **Redux State Management** - Global state management for language and themes
- **Tailwind CSS** - Utility-first CSS framework for styling

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool with HMR
- **Redux** - State management
- **Tailwind CSS** - Styling
- **React SWC** - Fast JavaScript compiler

## 📦 Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── contexts/       # React contexts
├── shared/         # Shared utilities and configuration
│   ├── redux/      # Redux store and reducers
│   ├── services/   # Business logic
│   ├── styles/     # Global styles
│   └── texts/      # i18n translations
└── assets/         # Images and icons
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/RicardoFedrigo/portifolio-appresentation.git
cd portifolio-appresentation

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy

```bash
# Deploy to GitHub Pages
npm run deploy
```

## 🌐 Live Demo

Visit the live portfolio: [https://ricardofedrigo.github.io/portifolio-appresentation/](https://ricardofedrigo.github.io/portifolio-appresentation/)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to GitHub Pages

## 🔄 Continuous Deployment

This project uses GitHub Actions for automatic deployment. Every push to the `main` branch triggers:

1. Dependency installation
2. Production build with Vite
3. Automatic deployment to GitHub Pages

See `.github/workflows/deploy.yml` for workflow configuration.

## 🌍 Multi-language Support

The portfolio supports multiple languages through JSON translation files:

- English: `src/shared/texts/en/english.json`
- Portuguese (Brazil): `src/shared/texts/pt/portuguese-brasil.json`

Language preference is managed via Redux store.

## 📄 License

This project is open source and available under the MIT License.
