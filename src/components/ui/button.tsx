import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "aero-gloss aero-shine bg-[linear-gradient(180deg,color-mix(in_srgb,var(--accent)_72%,white),var(--accent))] px-6 py-3 text-white [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6),0_8px_18px_rgba(24,182,230,0.28)] hover:-translate-y-0.5 hover:brightness-[1.05] hover:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.7),0_12px_24px_rgba(24,182,230,0.36)]",
        secondary:
          "glass-panel border border-accent/40 px-6 py-3 text-accent shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft",
        ghost:
          "glass-panel border border-line px-4 py-3 text-foreground shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent",
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
