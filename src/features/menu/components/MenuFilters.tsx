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
          <button
            key={key}
            type="button"
            aria-pressed={filters[key]}
            onClick={() => onToggle(key)}
            className="cursor-pointer rounded-lg border border-dashed border-stone-400 px-3 py-1.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-200 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none aria-pressed:border-solid aria-pressed:border-emerald-700 aria-pressed:bg-emerald-700 aria-pressed:text-white aria-pressed:hover:bg-emerald-800"
          >
            {label}
          </button>
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
