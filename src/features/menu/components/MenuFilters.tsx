import Toggle from "@/components/ui/Toggle"
import type { MenuFilterState } from "@/features/menu/types"

interface MenuFiltersProps {
  filters: MenuFilterState
  hasActiveFilters: boolean
  onToggle: (key: keyof MenuFilterState) => void
  onResetFilters: () => void
}

const FILTER_OPTIONS: { key: keyof MenuFilterState; label: string }[] = [
  { key: "vegetarian", label: "Вегетарианско" },
  { key: "glutenFree", label: "Без глутен" },
]

const MenuFilters = ({
  filters,
  hasActiveFilters,
  onToggle,
  onResetFilters,
}: MenuFiltersProps) => {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-5 lg:px-6 lg:pt-8">
      <div
        role="group"
        aria-label="Филтри"
        className="flex flex-wrap items-center gap-2"
      >
        <span className="text-sm text-stone-600">Филтри:</span>

        {FILTER_OPTIONS.map(({ key, label }) => (
          <Toggle
            key={key}
            pressed={filters[key]}
            onClick={() => onToggle(key)}
          >
            {label}
          </Toggle>
        ))}

        {hasActiveFilters && (
          <button
            type="button"
            className="cursor-pointer text-sm font-medium text-emerald-800 underline-offset-4 hover:underline"
            onClick={onResetFilters}
          >
            Изчисти филтрите
          </button>
        )}
      </div>
    </div>
  )
}

export default MenuFilters
