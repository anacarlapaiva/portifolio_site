import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent px-6 py-3 text-white shadow-[0_14px_30px_rgba(255,122,89,0.22)] hover:-translate-y-0.5 hover:bg-highlight",
        secondary:
          "border border-accent/35 bg-accent-soft px-6 py-3 text-accent hover:-translate-y-0.5 hover:border-accent hover:bg-accent/16",
        ghost:
          "border border-line bg-[var(--card)] px-4 py-3 text-foreground hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent-soft",
      },
      size: {
        default: "",
        icon: "h-11 w-11 rounded-full px-0 py-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type SharedProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  className,
  variant,
  size,
  children,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </a>
  );
}
