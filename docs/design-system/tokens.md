# Tokens

Tokens are defined in `src/index.css` under `@theme`. Use the Tailwind utility
in the second column. Never use a raw value or a default Tailwind color.

## Color

| Token | Utilities | Use for |
| --- | --- | --- |
| `--color-canvas` | `bg-canvas` | Page background, hover fill on neutral controls |
| `--color-surface` | `bg-surface` | Cards, inputs, popovers |
| `--color-border` | `border-border`, `bg-border` | All borders and dividers, switch track when off |
| `--color-fg` | `text-fg` | Primary text |
| `--color-fg-muted` | `text-fg-muted` | Secondary text, hints, placeholders |
| `--color-brand` | `bg-brand`, `outline-brand` | Primary actions, focus rings, switch track when on |
| `--color-brand-hover` | `hover:bg-brand-hover` | Hover state of brand fills |
| `--color-brand-fg` | `text-brand-fg` | Text on `bg-brand` |
| `--color-danger` | `bg-danger`, `text-danger`, `border-danger` | Destructive actions, error text, invalid borders |
| `--color-danger-hover` | `hover:bg-danger-hover` | Hover state of danger fills |
| `--color-danger-fg` | `text-danger-fg` | Text on `bg-danger` |
| `--color-success` | `text-success`, `border-success` | Positive status |

Do not use: `gray-*`, `slate-*`, `indigo-*`, `red-*`, `white`, `black`, or any hex.

## Radius

| Token | Utility | Use for |
| --- | --- | --- |
| `--radius-control` | `rounded-control` | Buttons, inputs, badges |
| `--radius-card` | `rounded-card` | Cards and other containers |

`rounded-full` is allowed only for the switch. Do not use `rounded-lg`, `rounded-xl`, or `rounded-md`.

## Shadow

| Token | Utility | Use for |
| --- | --- | --- |
| `--shadow-card` | `shadow-card` | Cards only |

Do not use `shadow-sm`, `shadow-md`, or `shadow-lg`.

## Spacing

Spacing uses Tailwind's default 4px scale (`p-4` = 16px). Use scale steps only.

| Context | Value |
| --- | --- |
| Card padding | `p-6` |
| Gap between fields | `space-y-4` |
| Gap between cards | `space-y-6` |
| Page horizontal padding | `px-6` |
| Page width | `max-w-2xl` for settings and forms |

Never use arbitrary spacing such as `p-[18px]`.

## Typography

Font is `font-sans`. Sizes: `text-base` for card titles, `text-sm` for body, labels, and controls, `text-xs` for badges. Weights: `font-semibold` for titles, `font-medium` for labels and buttons.
