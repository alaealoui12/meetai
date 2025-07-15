import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// Utility function to merge class names using clsx and tailwind-merge
// This function allows you to conditionally apply classes and ensure that Tailwind's utility classes are
// merged correctly, avoiding conflicts or duplicates.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
