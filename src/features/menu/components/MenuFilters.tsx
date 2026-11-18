import { useTranslation } from "react-i18next"
import Toggle from "@/components/ui/Toggle"
import type { MenuFilterState } from "@/features/menu/types"

interface MenuFiltersProps {
  filters: MenuFilterState
  hasActiveFilters: boolean
  onToggle: (key: keyof MenuFilterState) => void
  onResetFilters: () => void
}

const FILTER_OPTIONS: { key: keyof MenuFilterState; labelKey: string }[] = [
  { key: "vegetarian", labelKey: "menu.filters.vegetarian" },
  { key: "glutenFree", labelKey: "menu.filters.glutenFree" },
]

const MenuFilters = ({
  filters,
  hasActiveFilters,
  onToggle,
  onResetFilters,
}: MenuFiltersProps) => {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-6xl px-5 pt-5 lg:px-6 lg:pt-8">
      <div
        role="group"
        aria-label={t("menu.filters.label")}
        className="flex flex-wrap items-center gap-2"
      >
        <span className="text-sm text-stone-600">
          {t("menu.filters.label")}:
        </span>

        {FILTER_OPTIONS.map(({ key, labelKey }) => (
          <Toggle
            key={key}
            pressed={filters[key]}
            onClick={() => onToggle(key)}
          >
            {t(labelKey)}
          </Toggle>
        ))}

        {hasActiveFilters && (
          <button
            type="button"
            className="cursor-pointer text-sm font-medium text-emerald-800 underline-offset-4 hover:underline"
            onClick={onResetFilters}
          >
            {t("menu.filters.reset")}
          </button>
        )}
      </div>
    </div>
  )
}

export default MenuFilters
