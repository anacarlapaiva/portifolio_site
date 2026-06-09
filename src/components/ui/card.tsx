import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-[1.5rem] border border-line shadow-[var(--shadow)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/45 hover:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.55),0_30px_64px_rgba(24,182,230,0.22)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("p-5", className)} {...props}>
      {children}
    </div>
  );
}
