import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Page content width shared by the header, sections and footer
export const wrap = "mx-auto box-border w-full max-w-[1200px] px-10 max-nav:px-4"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
