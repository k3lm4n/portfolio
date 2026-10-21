import { PropsWithChildren } from "react";

export function Chip({ children }: PropsWithChildren) {
  return <span className="rounded-lg bg-chip-bg px-2.5 py-1 text-[13px] text-chip">{children}</span>;
}
