# Project instructions for coding assistants

This is a React 19 + TypeScript + Tailwind CSS v4 app. All UI must follow the
design system in `src/ds/`. The system is documented in `docs/design-system/`.

Read these before writing or changing any UI:

- `docs/design-system/tokens.md`: colors, radii, shadows, spacing. Use only these.
- `docs/design-system/components.md`: every component, its props, and when to use it.
- `docs/design-system/patterns.md`: page and form layout recipes.

## Hard rules

1. Import UI primitives from `src/ds` (`import { Button } from "../../ds"`). Never rebuild a button, input, card, switch, or badge.
2. Use only the semantic color utilities in `tokens.md` (`bg-surface`, `text-fg-muted`, `bg-brand`). Never use Tailwind's default palette (`gray-500`, `indigo-600`, `red-600`) and never use hex values.
3. No arbitrary values: no `p-[18px]`, no `bg-[#4f46e5]`, no `w-[437px]`. If a value is missing from the scale, stop and say so instead of inventing one.
4. Radii are `rounded-control` (inputs, buttons, badges) and `rounded-card` (cards). Shadows: only `shadow-card`.
5. If a component or variant you need does not exist, do not invent props. List what is missing in your response and use the closest existing variant.
6. Every form control needs a `Field` with a `label` and a matching `htmlFor`/`id`.

## Commands

- `npm run typecheck`: must pass.
- `npm run check:docs`: must pass. Run it after changing tokens or components.
- `npm run check:after`: must pass for any file under `src/pages/after`. It flags default palette classes, hex values, and arbitrary values.

## When you change the design system

Update the matching file in `docs/design-system/` in the same change. A new
token goes in `tokens.md`. A new component or prop goes in `components.md`.
