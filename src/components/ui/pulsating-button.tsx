import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { Pressable, type PressableProps } from "./pressable";

// Magic UI Pulsating Button (magicui.design), adapted to the site tokens:
// a `pulse` ring grows to 8px and fades, every 1.6s
export function PulsatingButton(props: PressableProps) {
  return (
    <Pressable
      {...props}
      style={{ "--duration": "1.6s", "--distance": "8px", ...props.style } as CSSProperties}
      className={cn(
        "relative inline-flex h-[52px] cursor-pointer items-center justify-center rounded-full border-0 bg-fg px-6 text-[15px] font-semibold text-bg",
        "transition-transform duration-200 hover:-translate-y-px",
        props.className,
      )}
    >
      <span className="relative z-10 inline-flex items-center gap-2.5">{props.children}</span>
      <span aria-hidden="true" className="animate-pulsate pointer-events-none absolute inset-0 rounded-[inherit]" />
    </Pressable>
  );
}
