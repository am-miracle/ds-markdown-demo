import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

export function Card({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "rounded-card border border-border bg-surface shadow-card",
        className,
      )}
      {...rest}
    />
  );
}

export interface CardHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function CardHeader({ title, description, action }: CardHeaderProps) {
  return (
    <header className="flex items-start justify-between gap-4 border-b border-border p-6">
      <div className="space-y-1">
        <h2 className="text-base font-semibold text-fg">{title}</h2>
        {description ? (
          <p className="text-sm text-fg-muted">{description}</p>
        ) : null}
      </div>
      {action}
    </header>
  );
}

export function CardBody({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-4 p-6", className)} {...rest} />;
}

export function CardFooter({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        "flex items-center justify-end gap-3 border-t border-border p-6",
        className,
      )}
      {...rest}
    />
  );
}
