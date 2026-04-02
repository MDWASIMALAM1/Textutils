# Textutils (React + Vite)

A small React text utility app built with Vite. Supports text transformation, theme switch (light/dark), alerts, and a responsive navbar. Intended as a learning project for React fundamentals.

## Tech stack

- React (JSX)
- Vite
- JavaScript (ESNext)
- CSS modules + global styling

## Folder structure

- `src/`
  - `App.jsx` - top-level app container
  - `main.jsx` - app entry point
  - `assets/Component/` - custom components (Navbar, Alert, About, Textforms)

## Setup

1. Clone repo:

   ```bash
   git clone <your-repo-url>
   cd Textutils
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open the URL shown by Vite (usually `http://localhost:5173`).

## Scripts

- `npm run dev` - start dev server with HMR
- `npm run build` - production build into `/dist`
- `npm run preview` - preview production build

## Features

- Convert text to uppercase/lowercase
- Clear text
- Copy text to clipboard
- Remove extra spaces
- Live summary, word count, char count, reading time
- Light/Dark theme toggle
- Alert messages for actions

## Contributing

1. Create a branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "feat: ..."`
3. Push branch and open PR.

## Notes

- Keep `node_modules/` and local env files out of Git via `.gitignore`.
- Use `npm run lint` if lint config is enabled.

