import type { ComponentPropsWithoutRef } from "react";

// With href it navigates (<a>), without it acts (<button type="button">)
export type PressableProps =
  | (ComponentPropsWithoutRef<"a"> & { href: string })
  | (ComponentPropsWithoutRef<"button"> & { href?: undefined });

export function Pressable(props: PressableProps) {
  if (props.href !== undefined) return <a {...props} />;
  return <button type="button" {...props} />;
}
