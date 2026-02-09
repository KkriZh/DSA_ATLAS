# DSA Atlas

Dark, focused DSA practice tracker built on the Striver A2Z sheet. This app lets you filter problems fast and track progress per user profile, stored locally in your browser.

## Features
- Multi-profile progress tracking (local browser storage)
- Search + filter by difficulty, platform, and completion status
- Step and topic progress indicators
- Clean dark UI optimized for focus

## Tech Stack
- React + Vite
- Tailwind CSS v4
- TypeScript

## Project Structure
- `app/App.tsx` — main UI and state logic
- `data/dsa-questions.ts` — source question data
- `styles/` — Tailwind + theme styles
- `index.html`, `main.tsx` — Vite entry files

## Getting Started
Install dependencies:
```bash
npm install
```

Build for production:
```bash
npm run build
```

## Local Progress Storage
Progress is saved in `localStorage` under the key `dsa-progress-v2`. Each profile has its own stored progress.

## Deploy
This is a static Vite app. After `npm run build`, deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Data Source
The sheet is based on the Striver A2Z DSA course list.

## Notes
- If you want a dev server, add a script to `package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build"
}
```
