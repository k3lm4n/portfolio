import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ChipProps = PropsWithChildren<{ size?: "sm" | "md" }>;

export function Chip({ size = "sm", children }: ChipProps) {
  return (
    <span
      className={cn(
        "rounded-lg bg-chip-bg px-2.5 text-chip",
        size === "sm" ? "py-[5px] text-[13px]" : "py-1.5 text-sm",
      )}
    >
      {children}
    </span>
  );
}
