# MyFirstWebProject

A minimal React starter using Parcel for bundling. This repository demonstrates a simple setup with React, Parcel, and a basic build workflow.

## Project Structure

- `index.html` — app entry page
- `App.js` — small React app (currently uses `React.createElement`)
- `index.css` — styles
- `package.json` — npm scripts for `start` (dev) and `build` (production)
- `dist/` — output directory after `npm run build`

## Requirements

- Node.js (16+ recommended)
- npm (bundled with Node)

## Quick start

Install dependencies and run the dev server (Parcel):

```powershell
npm install
npm start
```

Open http://localhost:1234 to view the app during development.

Build production files:

```powershell
npm run build
```

Files will be generated in the `dist/` folder.

## Git

This project includes a `.gitignore` that excludes `node_modules/`, `.parcel-cache/`, and `dist/`.

## License

This project is available under the MIT License (see `LICENSE`).

## Notes

- If PowerShell blocks `npm` wrapper scripts, either run npm commands via `cmd /c "npm ..."` or set the CurrentUser execution policy to `RemoteSigned`:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```

Feel free to ask me to convert the app to JSX/functional components or add additional features (CI, tests, deploy workflow, etc.).
