import { cn } from "@/lib/utils";

type WindowBarProps = {
  title: string;
  size?: "sm" | "md";
  className?: string;
};

const dotColors = ["bg-[#ffd36e]", "bg-[#7fe0a8]", "bg-[#ff8fb1]"];

export function WindowBar({ title, size = "md", className }: WindowBarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2.5 border-b border-line bg-bar font-pixel text-[13px] text-muted",
        size === "sm" ? "px-3 py-2" : "px-3.5 py-[9px]",
        className,
      )}
    >
      <span className="truncate">{title}</span>
      <span className="flex flex-none gap-[5px]" aria-hidden="true">
        {dotColors.map((color) => (
          <span
            key={color}
            className={cn(
              "rounded-full border border-black/10",
              size === "sm" ? "h-2.5 w-2.5" : "h-[11px] w-[11px]",
              color,
            )}
          />
        ))}
      </span>
    </div>
  );
}
