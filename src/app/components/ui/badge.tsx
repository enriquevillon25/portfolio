import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

const cx = (...c: Array<string | false | undefined>) =>
  c.filter(Boolean).join(" ");

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const styles =
    variant === "secondary"
      ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
      : variant === "outline"
      ? "border border-neutral-300 dark:border-neutral-700"
      : "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900";

  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        styles,
        className
      )}
      {...props}
    />
  );
}
