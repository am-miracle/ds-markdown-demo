# Components

All components are exported from `src/ds`. Import them from there.

```tsx
import { Button, Card, CardBody, Field, Input } from "../../ds";
```

## Button

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `"primary" \| "secondary" \| "ghost" \| "danger"` | `"primary"` |
| `size` | `"sm" \| "md"` | `"md"` |

Extends native `button` props. `type` defaults to `"button"`.

- One `primary` button per card or page section.
- `danger` is only for destructive actions.
- There is no `outline`, `link`, `lg`, `color`, or `loading` prop. Use `secondary` for a bordered button.

## Card, CardHeader, CardBody, CardFooter

`Card` is the container. Compose it with the other three.

| Component | Props |
| --- | --- |
| `CardHeader` | `title: string`, `description?: string`, `action?: ReactNode` |
| `CardBody` | native `div` props. Adds `p-6` and `space-y-4` |
| `CardFooter` | native `footer` props. Right-aligned actions |

- Put the section's primary button in `CardFooter`.
- Use `CardHeader.action` for a badge or a single button.
- Do not add your own padding or borders to a card.

## Field

| Prop | Type | Required |
| --- | --- | --- |
| `label` | `string` | yes |
| `htmlFor` | `string` | yes. Must match the control's `id` |
| `hint` | `string` | no |
| `error` | `string` | no. Replaces the hint when set |

Wrap every `Input` in a `Field`. Never render a bare `<label>`.

## Input

| Prop | Type | Default |
| --- | --- | --- |
| `invalid` | `boolean` | `false` |

Extends native `input` props. Set `invalid` together with `Field.error`.

## Switch

| Prop | Type | Required |
| --- | --- | --- |
| `checked` | `boolean` | yes |
| `onCheckedChange` | `(checked: boolean) => void` | yes |
| `label` | `string` | yes. Used as the accessible name |
| `disabled` | `boolean` | no |

Do not build a toggle from `div`s.

## Badge

| Prop | Type | Default |
| --- | --- | --- |
| `tone` | `"neutral" \| "success" \| "danger"` | `"neutral"` |

Badges are outlined, not filled. There is no `info` or `warning` tone. If you need one, say so instead of adding it.
