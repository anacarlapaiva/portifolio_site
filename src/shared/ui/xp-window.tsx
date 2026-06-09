import { Minus, Square, X } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type XpTitleBarProps = {
  title: string;
  icon?: ReactNode;
  /** When provided, the close control becomes a real button. */
  onClose?: () => void;
  closeLabel?: string;
  /** Smaller bar for embedding inside cards. */
  compact?: boolean;
  className?: string;
};

/** Barra de título azul glossy estilo Windows XP, com os controles clássicos. */
export function XpTitleBar({
  title,
  icon,
  onClose,
  closeLabel,
  compact,
  className,
}: XpTitleBarProps) {
  const ctrl = compact ? "h-4 w-4" : "h-5 w-5";

  return (
    <div
      className={cn(
        "aero-gloss flex items-center justify-between gap-3 bg-[linear-gradient(180deg,#54b3ee,#1f6fc4_55%,#1a62b4)] text-white [box-shadow:inset_0_1px_0_rgba(255,255,255,0.55)]",
        compact ? "px-3 py-1.5" : "px-3 py-2",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-2">
        {icon ? (
          <span
            className={cn(
              "grid shrink-0 place-items-center rounded-md bg-white/25 text-[0.7rem] font-bold [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]",
              ctrl,
            )}
            aria-hidden="true"
          >
            {icon}
          </span>
        ) : null}
        <p
          className={cn(
            "truncate font-display font-semibold tracking-wide drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]",
            compact ? "text-xs" : "text-sm",
          )}
        >
          {title}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        <span
          className={cn(
            "grid place-items-center rounded-[6px] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.12))] text-white/90",
            ctrl,
          )}
          aria-hidden="true"
        >
          <Minus size={compact ? 9 : 11} strokeWidth={3} />
        </span>
        <span
          className={cn(
            "grid place-items-center rounded-[6px] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.12))] text-white/90",
            ctrl,
          )}
          aria-hidden="true"
        >
          <Square size={compact ? 8 : 9} strokeWidth={3} />
        </span>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel ?? "Close"}
            className={cn(
              "grid place-items-center rounded-[6px] border border-white/40 bg-[linear-gradient(180deg,#ff8a7a,#e0402c)] text-white transition hover:brightness-110 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]",
              ctrl,
            )}
          >
            <X size={compact ? 9 : 11} strokeWidth={3} />
          </button>
        ) : (
          <span
            className={cn(
              "grid place-items-center rounded-[6px] border border-white/40 bg-[linear-gradient(180deg,#ff8a7a,#e0402c)] text-white [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]",
              ctrl,
            )}
            aria-hidden="true"
          >
            <X size={compact ? 9 : 11} strokeWidth={3} />
          </span>
        )}
      </div>
    </div>
  );
}

type XpWindowProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  onClose?: () => void;
  closeLabel?: string;
};

/**
 * Janela estilo Windows XP / Aqua: barra de título glossy + corpo.
 * Os controles de minimizar/maximizar são decorativos; o fechar vira
 * botão real quando `onClose` é informado (usado no modal).
 */
export function XpWindow({
  title,
  icon,
  children,
  className,
  bodyClassName,
  onClose,
  closeLabel,
}: XpWindowProps) {
  return (
    <div
      className={cn(
        "glass-panel-strong overflow-hidden rounded-2xl border border-white/30 shadow-[var(--shadow)]",
        className,
      )}
    >
      <XpTitleBar title={title} icon={icon} onClose={onClose} closeLabel={closeLabel} />
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </div>
  );
}
