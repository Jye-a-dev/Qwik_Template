# Qwik & Qwik City Engineering Guidelines

This repository follows Production-Ready standards for Qwik + Qwik City, optimized for both Solo and Team development.

## 1. Core Component & Reactivity Rules

- Always use `component$` to wrap components for fine-grained serialization and lazy loading.
- Use fine-grained reactivity primitives: `useSignal` for single values, `useStore` for reactive objects/arrays, and `useComputed$` for derived state.
- Standard HTML attributes are mandatory: use `class` (never `className`) and `for` (never `htmlFor`).
- Prefer server-side data loading via `routeLoader$` and mutations via `routeAction$` or `server$`.
- Prioritize `useTask$` and SSR loaders for asynchronous work. Avoid `useVisibleTask$` unless strictly required for browser-only DOM access (canvas, web APIs).

## 2. Architecture & Directory Boundaries

- **Thin Routes (`src/routes/`):** Contains ONLY route handlers, layouts (`<Slot />`), page loaders/actions, and endpoint logic (`onGet`, `onPost`).
- **Feature-Based Modularity (`src/features/<feature>/`):** Group business logic into self-contained domains with `api/`, `components/`, `hooks/`, `schemas/`, and `types/`.
- **Reusable UI Primitives (`src/components/ui/`):** Common presentation components styled with `cn()` (`clsx` + `tailwind-merge`).
- **Shared State (`src/stores/`) & Helpers (`src/utils/`):** Context IDs, global signals, and utility functions.
- **Path Aliasing:** Always use `~/*` (mapped to `./src/*`) for internal imports.

## 3. Styling & Styling Engine

- Tailwind CSS v4+ with `@tailwindcss/vite` in `vite.config.ts`.
- Single entrypoint `@import "tailwindcss";` in `src/global.css`. Do not add legacy `tailwind.config.js`.

## 4. Configuration & Safety

- Environment variables must be validated through Zod in `src/config/env.ts`.
- Port configuration is driven via `PORT` in `.env` (default 5000) loaded dynamically in `vite.config.ts`.
- Strict TypeScript (`"strict": true`) without `any` bypasses.

## 5. Quality Gate & Commits

- All code must pass `npm run type-check` and `npm run lint`.
- Commits must strictly adhere to Conventional Commits format (`feat:`, `fix:`, `refactor:`, `chore:`, etc.).
