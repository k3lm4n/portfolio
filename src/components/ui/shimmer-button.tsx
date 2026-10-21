import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { Pressable, type PressableProps } from "./pressable";

// Magic UI Shimmer Button (magicui.design), adapted to the site tokens:
// a `spark` glint travels around the border of a `fg` pill
export function ShimmerButton(props: PressableProps) {
  return (
    <Pressable
      {...props}
      style={{ "--speed": "3s", "--spread": "90deg", "--cut": "1.5px", ...props.style } as CSSProperties}
      className={cn(
        // clip-path: iOS Safari ignores overflow-hidden + radius for the blurred, rotating spark
        "group relative isolate inline-flex h-[50px] cursor-pointer items-center justify-center overflow-hidden [clip-path:inset(0_round_9999px)] rounded-full border-0 bg-fg px-6 text-[15px] font-semibold whitespace-nowrap text-bg",
        "transition-transform duration-200 hover:-translate-y-px active:translate-y-px",
        props.className,
      )}
    >
      {/* spark */}
      <span aria-hidden="true" className="absolute inset-0 -z-30 overflow-visible blur-[2px] @container-size">
        <span className="animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh]">
          <span className="animate-spin-around absolute -inset-full [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--spark)_var(--spread),transparent_var(--spread))]" />
        </span>
      </span>
      {props.children}
      {/* highlight */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full shadow-[inset_0_-8px_12px_rgba(255,255,255,0.12)] transition-shadow duration-300 group-hover:shadow-[inset_0_-6px_12px_rgba(255,255,255,0.22)]"
      />
      {/* backdrop */}
      <span aria-hidden="true" className="absolute inset-(--cut) -z-20 rounded-full bg-fg" />
    </Pressable>
  );
}
