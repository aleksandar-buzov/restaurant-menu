import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Слепва Tailwind класове: приема низове, условия, масиви и обекти (clsx)
 * и при конфликт оставя последния клас (tailwind-merge): cn("p-3", "p-4") → "p-4".
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export default cn
