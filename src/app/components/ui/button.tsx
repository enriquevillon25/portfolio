import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
  className?: string;
};

const cx = (...c: Array<string | false | undefined>) =>
  c.filter(Boolean).join(" ");

export function Button({
  variant = "default",
  size = "md",
  asChild,
  className,
  children,
  ...rest
}: ButtonProps) {
  const variantCls =
    variant === "outline"
      ? "border border-neutral-300 dark:border-neutral-700 bg-transparent"
      : variant === "ghost"
      ? "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800"
      : "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900";

  const sizeCls =
    size === "sm"
      ? "h-8 px-3 text-sm"
      : size === "lg"
      ? "h-11 px-5 text-base"
      : size === "icon"
      ? "h-10 w-10 p-0"
      : "h-10 px-4 text-sm";

  const classes = cx(
    // base & layout
    "relative overflow-hidden group inline-flex items-center justify-center rounded-2xl select-none",
    // motion & transitions
    "transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]",
    // focus ring (usa tus tokens)
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
    // disabled
    "disabled:opacity-50 disabled:pointer-events-none",
    // shimmer diagonal
    "after:content-[''] after:absolute after:inset-0 after:rounded-[inherit]",
    "after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)]",
    "after:-translate-x-full after:opacity-0 after:transition-all after:duration-700",
    "group-hover:after:opacity-100 group-hover:after:translate-x-full",
    
    // variantes y tamaños que ya tienes
    variantCls,
    sizeCls,
    className
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: cx(classes, child.props.className),
      ...rest,
    });
  }

  return (
    <button className={classes} {...rest}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
