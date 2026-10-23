# Patterns

## Settings page

Use this layout for any settings or account page.

```tsx
<main className="mx-auto max-w-2xl space-y-6 px-6 py-10">
  <Card>
    <CardHeader title="..." description="..." />
    <CardBody>{/* Fields */}</CardBody>
    <CardFooter>
      <Button>Save changes</Button>
    </CardFooter>
  </Card>
</main>
```

- One `Card` per settings group. Do not put an `h1` outside a card.
- Group related fields in one `CardBody`. Fields are separated by `space-y-4`, already applied by `CardBody`.
- A toggle row is a flex row: label and description on the left, `Switch` on the right.
- Destructive actions get their own `Card`, placed last, with the `danger` button in `CardHeader.action`.

## Toggle row

```tsx
<div className="flex items-center justify-between gap-4">
  <div className="space-y-1">
    <p className="text-sm font-medium text-fg">Title</p>
    <p className="text-sm text-fg-muted">Description</p>
  </div>
  <Switch label="Title" checked={value} onCheckedChange={setValue} />
</div>
```

## Copy

- Buttons use verb + object in sentence case: "Save changes", "Delete workspace".
- Do not use "Submit" or "OK".
