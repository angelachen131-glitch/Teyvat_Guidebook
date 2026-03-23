# Teyvat Guidebook

Teyvat Guidebook is a beginner-friendly **Genshin Impact** fan website designed to help new players learn the basics of the game. It includes character guides, artifact recommendations, a team builder, and a beginner guide, all wrapped in a fantasy-inspired purple and white interface.

Built as a static frontend project with **React**, **Tailwind CSS**, **Framer Motion**, and **Vite**, the site is designed for smooth deployment on **GitHub Pages**.

## Features

- **Character Guides**  
  Browse character cards with key details such as element, weapon type, nation/region, role, and recommended builds.

- **Artifact Directory**  
  Explore artifact sets, their effects, ideal users, and where to farm them.

- **Team Builder**  
  Build a 4-character team, explore elemental synergy, and experiment with different team compositions.

- **Beginner Guide**  
  Learn essential early-game topics including leveling, resin management, artifact and weapon farming, domains, and team-building basics.

- **Responsive Design**  
  Optimized for desktop, tablet, and mobile.

- **Fantasy-Inspired UI**  
  Styled with a polished purple-and-white theme inspired by the feel of Teyvat.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/angelachen131-glitch/Teyvat_Guidebook.git
   cd Teyvat_Guidebook
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Live Site

GitHub Pages deployment:
   ```
   https://angelachen131-glitch.github.io/Teyvat_Guidebook/
   ```

### Deployment

This project is configured for deployment through GitHub Pages using GitHub Actions.

If you are deploying under this repository name, make sure vite.config.ts uses:

``` base: '/Teyvat_Guidebook/' ```

To deploy:

Push changes to the main branch
GitHub Actions will automatically build and deploy the site
Open the GitHub Pages live link once deployment finishes

## Data Source

This project uses local JSON files located in `src/data/` to ensure stability and offline functionality. Data is curated from public community resources.

## Disclaimer

Teyvat Guidebook is a fan-made project and is not affiliated with HoYoverse. Genshin Impact and all related assets are trademarks of HoYoverse.
