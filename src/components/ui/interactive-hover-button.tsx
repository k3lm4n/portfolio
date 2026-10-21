import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Pressable, type PressableProps } from "./pressable";

// Magic UI Interactive Hover Button (magicui.design), adapted to the site tokens.
// The background comes from className (bg-surface, bg-bg); on hover the `fg` dot fills the pill.
export function InteractiveHoverButton(props: PressableProps) {
  return (
    <Pressable
      {...props}
      className={cn(
        "group relative inline-flex h-[50px] min-w-[168px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-line px-6 text-[15px] font-medium text-fg",
        props.className,
      )}
    >
      <span className="flex items-center justify-center gap-2.5">
        <span
          aria-hidden="true"
          className="size-2 rounded-full bg-fg transition-[scale] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[60]"
        />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {props.children}
        </span>
      </span>
      {/* Visual copy only, so the accessible name is read once */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-10 flex translate-x-12 items-center justify-center gap-2 text-bg opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      >
        {props.children}
        <ArrowRight size={16} />
      </span>
    </Pressable>
  );
}
