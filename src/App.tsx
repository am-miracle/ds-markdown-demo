import { useState } from "react";
import { SettingsPage as Before } from "./pages/before/SettingsPage";
import { SettingsPage as After } from "./pages/after/SettingsPage";
import { Button } from "./ds";

type View = "before" | "after";

export function App() {
  const [view, setView] = useState<View>("after");

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-center gap-2 border-b border-border bg-surface p-3">
        <Button
          size="sm"
          variant={view === "before" ? "primary" : "secondary"}
          onClick={() => setView("before")}
        >
          Before: no context
        </Button>
        <Button
          size="sm"
          variant={view === "after" ? "primary" : "secondary"}
          onClick={() => setView("after")}
        >
          After: markdown context
        </Button>
      </div>
      {view === "before" ? <Before /> : <After />}
    </>
  );
}
