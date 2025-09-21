# DnD Vibe

Cross-platform Dungeons & Dragons "vibe" companion app – desktop (Electron) + web (Vite + React) with a shared TypeScript codebase.

## Features (Initial)
- React + TypeScript frontend
- Electron desktop shell with secure preload (contextIsolation + sandbox + no nodeIntegration)
- Single dev command launches Vite + Electron
- Vitest + Testing Library for unit/component tests
- Biome (formatter + linter) for code quality
- Yarn 4 Plug'n'Play (no node_modules) for fast, deterministic installs
# DnD Vibe

Cross-platform Dungeons & Dragons "vibe" companion app – desktop (Electron) + web (Vite + React) with a shared TypeScript codebase.

## Features (Initial)
- React + TypeScript frontend
- Electron desktop shell with secure preload (contextIsolation + sandbox + no nodeIntegration)
- Single dev command launches Vite + Electron
- Vitest + Testing Library for unit/component tests
- Biome (formatter + linter) for code quality
- Yarn 4 Plug'n'Play (no node_modules) for fast, deterministic installs

## Getting Started
```bash
# Install (PnP – generates .pnp.cjs)
yarn install

# Run web only
yarn dev:renderer

# Run Electron + web together
yarn dev

# Run tests
yarn test

# Build production bundles (renderer + main)
yarn build

# Package desktop app (electron-builder)
yarn package
```

## Project Structure
```text
electron/
	main/           # Electron main process sources (TS -> dist)
	preload/        # Preload scripts exposing safe, typed bridge
src/
	components/     # Reusable UI components
	features/       # Vertical feature slices (state + service)
		example/      # Example feature skeleton
	hooks/          # Generic React hooks
	lib/            # Framework-agnostic utilities (logger, env, etc.)
	types/          # Global type declarations (preload API)
tests/            # Vitest tests
dist/             # Build output (renderer / compiled TS)
release/          # Packaged application artifacts
```

## Security Notes
- Preload limits surface area; only exposes `window.dndVibe.getAppInfo()` now
- `contextIsolation: true`, `sandbox: true`, `nodeIntegration: false`
- Add future IPC via a strict allowlist + typed contracts

## Yarn Plug'n'Play (PnP)
This project uses **Yarn 4 (Berry)** with Plug'n'Play to eliminate `node_modules` and enforce dependency boundaries.

### Key Files
- `.yarnrc.yml` – Yarn config (`nodeLinker: pnp`)
- `.pnp.cjs` – PnP dependency map (do not edit)
- `.yarn/releases/` – pinned Yarn version
- `.yarn/sdks/` – editor SDK shims (TypeScript, ESLint, etc.)

### IDE Setup
If TypeScript or ESLint can't resolve modules:
```bash
yarn dlx @yarnpkg/sdks vscode
```
Reload VS Code after generation.

### Adding Dependencies
```bash
yarn add <pkg>        # runtime
yarn add -D <pkg>     # dev
```

### Why explicit `.js` extensions?
`moduleResolution: "NodeNext"` requires explicit extensions for ESM friendliness and future Node runtime compatibility.

### Running Scripts
All former `npm run <script>` commands map directly to `yarn <script>`.

### Clearing Cache / Reinstall (PowerShell)
```bash
yarn cache clean
Remove-Item .pnp.cjs,yarn.lock -ErrorAction SilentlyContinue
yarn install
```

### Upgrading Yarn
```bash
yarn set version stable
```

## Component & Feature Conventions
- `components/` UI/presentational (keep logic minimal)
- `features/<name>/state.ts` defines data structures/store init
- `features/<name>/service.ts` encapsulates operations/business logic
- `hooks/` generic reusable hooks
- `lib/` cross-cutting utilities (env, logger)
- `types/` global ambient declarations

## Logging Utility
`lib/logger.ts` provides a light wrapper with level filtering. Extend with sinks or persistent storage later.

## Next Ideas
- Theming / ambience (audio, lighting cues)
- State persistence (local storage or file-based)
- Auto-updates (`electron-updater`)
- E2E tests (Playwright)
- Configurable sound & mood profiles

## License
MIT

