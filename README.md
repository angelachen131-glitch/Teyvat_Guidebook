# Teyvat Guidebook

A polished, beginner-friendly fan website for Genshin Impact players. This project is built with React, Tailwind CSS, and Framer Motion, designed to be a static site that can be easily deployed to platforms like GitHub Pages.

## Features

- **Characters**: Detailed cards for popular characters with element, weapon, and build recommendations.
- **Artifacts**: Information on artifact sets, their bonuses, and where to farm them.
- **Team Builder**: Interactive tool to plan your 4-character party and see elemental synergies.
- **Beginner Guide**: Essential tips, resin management, and farming strategies for new players.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Fantasy UI**: A magical purple and white theme inspired by the game's aesthetic.

## Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router 7
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/teyvat-guidebook.git
   cd teyvat-guidebook
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

To deploy this project to GitHub Pages, follow these steps:

1. **Update `vite.config.ts`**:
   Ensure the `base` property matches your repository name:
   ```typescript
   export default defineConfig({
     base: '/teyvat-guidebook/', // Replace with your repo name
     // ... other config
   })
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   You can use the `gh-pages` package to deploy the `dist` folder:
   ```bash
   npm install -D gh-pages
   ```
   Add a deploy script to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   Then run:
   ```bash
   npm run deploy
   ```

## Data Source

This project uses local JSON files located in `src/data/` to ensure stability and offline functionality. Data is curated from public community resources.

## Disclaimer

Teyvat Guidebook is a fan-made project and is not affiliated with HoYoverse. Genshin Impact and all related assets are trademarks of HoYoverse.
