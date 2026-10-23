# Design system markdown demo

Companion repo for the LogRocket article on teaching AI coding assistants your design system with markdown.

The same prompt, run twice against a small React 19 + Tailwind CSS v4 design system:

- `src/pages/before/SettingsPage.tsx`: generated with no design system context
- `src/pages/after/SettingsPage.tsx`: generated with `AGENTS.md` and `docs/design-system/` in context

Prompt used for both:

> Build a workspace settings page with a workspace name field, a billing email field, a weekly digest toggle, a plan badge, a Save button and a Delete workspace button.

## Run it

```bash
npm install
npm run dev
```

Use the toggle at the top of the page to switch between the two outputs.

## What's in the repo

| Path | Purpose |
| --- | --- |
| `src/index.css` | Design tokens (`@theme`). Source of truth for values |
| `src/ds/` | Components: Button, Card, Field, Input, Switch, Badge |
| `AGENTS.md` | Rules every assistant reads first |
| `CLAUDE.md` | One line: imports `AGENTS.md` for Claude Code |
| `.cursor/rules/design-system.mdc` | Points Cursor at `AGENTS.md` |
| `.github/copilot-instructions.md` | Points GitHub Copilot at `AGENTS.md` |
| `docs/design-system/` | `tokens.md`, `components.md`, `patterns.md` |
| `scripts/check-ds.mjs` | Docs sync check and drift scanner |

## Checks

```bash
npm run check:docs     # every token and component is documented
npm run check:before   # fails: 25 problems
npm run check:after    # passes
```

`check:docs` is what keeps the markdown from going stale. Add a token or export a component without documenting it and CI fails.

## Note on the "before" file

The before output is a representative sample of unguided assistant output, not a recorded run. Replace it with a real capture from the tool you use before publishing, and update the `check:before` count in this README.
