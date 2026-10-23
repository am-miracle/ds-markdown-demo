import type { InputHTMLAttributes } from "react";
import { cn } from "./cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ invalid = false, className, ...rest }: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        "h-10 w-full rounded-control border bg-surface px-3 text-sm text-fg",
        "placeholder:text-fg-muted",
        "focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand",
        invalid ? "border-danger" : "border-border",
        className,
      )}
      {...rest}
    />
  );
}
