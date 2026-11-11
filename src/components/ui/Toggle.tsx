import type { ComponentProps } from "react"
import cn from "@/utils/cn"

interface ToggleProps extends Omit<ComponentProps<"button">, "aria-pressed"> {
  pressed: boolean
}

const Toggle = ({
  pressed,
  className,
  type = "button",
  ...props
}: ToggleProps) => {
  return (
    <button
      type={type}
      aria-pressed={pressed}
      className={cn(
        // база
        "cursor-pointer rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
        // изключен
        "border-dashed border-stone-400 text-stone-700 hover:bg-stone-200",
        // включен (aria-pressed="true")
        "aria-pressed:border-solid aria-pressed:border-emerald-700 aria-pressed:bg-emerald-700 aria-pressed:text-white aria-pressed:hover:bg-emerald-800",
        // фокус от клавиатура
        "focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  )
}

export default Toggle
