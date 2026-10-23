/**
 * Same prompt as ../before/SettingsPage.tsx.
 * Generated with AGENTS.md and docs/design-system/*.md in context.
 */
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Field,
  Input,
  Switch,
} from "../../ds";

export function SettingsPage() {
  const [digest, setDigest] = useState(true);

  return (
    <main className="mx-auto max-w-2xl space-y-6 px-6 py-10">
      <Card>
        <CardHeader
          title="Workspace settings"
          description="Manage how your workspace appears and how we contact you."
          action={<Badge tone="success">Pro plan</Badge>}
        />
        <CardBody>
          <Field label="Workspace name" htmlFor="workspace-name">
            <Input id="workspace-name" defaultValue="Acme Inc" />
          </Field>
          <Field
            label="Billing email"
            htmlFor="billing-email"
            hint="Invoices and payment notices go here."
          >
            <Input
              id="billing-email"
              type="email"
              defaultValue="billing@acme.com"
            />
          </Field>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-fg">Weekly digest</p>
              <p className="text-sm text-fg-muted">
                Get a summary of workspace activity every Monday.
              </p>
            </div>
            <Switch
              label="Weekly digest"
              checked={digest}
              onCheckedChange={setDigest}
            />
          </div>
        </CardBody>
        <CardFooter>
          <Button variant="primary">Save changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader
          title="Delete workspace"
          description="Permanently remove this workspace and all of its data."
          action={<Button variant="danger">Delete workspace</Button>}
        />
      </Card>
    </main>
  );
}
