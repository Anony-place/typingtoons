# Typing Game — Neon Siege

A dependency-free arcade typing game built for GitHub Pages.

## Gameplay

Typing is the attack mechanic: enemies arrive on screen, and completing their words destroys them. Clean hits build combo, combo boosts score, and successful typing charges abilities.

## Modes

- Arcade — escalating survival waves.
- Boss Rush — periodic boss encounters with longer typing targets.
- Time Attack — 60-second score sprint.
- Zen — pressure-free practice.

## Core systems

- Combo multiplier and score scaling.
- Core health and game-over state.
- Energy meter.
- Slow-time, blast and repair abilities.
- Progressive speed and word difficulty.
- Local high score and run profile.
- Neon arcade visual system.
- Responsive desktop/mobile layout.
- Keyboard shortcuts: Enter = hit, P = pause, S = slow, B = blast, R = repair, Esc = home.
- PWA manifest + service worker for offline-friendly caching.

## Run locally

Open `index.html` in a modern browser. There is no build step or package install.

## GitHub Pages

The repository is structured as a static site with `index.html` at the root. Enable GitHub Pages from the `main` branch and `/ (root)` or use the repository's Pages deployment workflow when available.

Expected site pattern:

`https://<username>.github.io/<repository>/`

## Local data

Scores and profile data are stored in `localStorage`. No account is required.

## Testing

`tests/smoke.js` contains a lightweight browser-console smoke check for required UI elements and local score state.

## Design basis

The game design follows the supplied deep-research brief: typing as the action mechanic, survival-first gameplay, wave/boss/time/zen modes, combo and power-up systems, progressive/adaptive difficulty, neon arcade UI, accessibility, responsive layout, local storage, offline support, and browser smoke/performance testing.

## License

MIT
