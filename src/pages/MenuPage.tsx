import { useState } from "react"
import MenuHeader from "@/features/menu/components/MenuHeader"
import CategorySection from "@/features/menu/components/CategorySection"
import MenuFilters from "@/features/menu/components/MenuFilters"
import groupItemsByCategory from "@/features/menu/utils/groupItemsByCategory"
import filterMenuItems from "@/features/menu/utils/filterMenuItems"
import { DEFAULT_FILTERS, type MenuFilterState } from "@/features/menu/types"
import { categories, menuItems } from "@/data/menu"

const MenuPage = () => {
  const [filters, setFilters] = useState<MenuFilterState>(DEFAULT_FILTERS)

  const hasAvailableItems = menuItems.some((item) => item.isAvailable)
  const hasActiveFilters = Object.values(filters).some((filter) => filter)

  const toggleFilter = (key: keyof MenuFilterState) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS)
  }

  const filteredMenuItems = filterMenuItems(menuItems, filters)

  const groups = groupItemsByCategory(categories, filteredMenuItems)

  return (
    <>
      <MenuHeader />

      <MenuFilters
        hasActiveFilters={hasActiveFilters}
        filters={filters}
        onToggle={toggleFilter}
        onResetFilters={resetFilters}
      />

      <main className="mx-auto max-w-6xl space-y-8 px-5 py-6 lg:px-6 lg:py-8">
        {groups.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center text-stone-600">
            Няма налични ястия {hasAvailableItems ? "по тези филтри" : ""}
          </p>
        ) : (
          groups.map(({ category, items }) => (
            <CategorySection
              key={category.id}
              category={category}
              menuItems={items}
            />
          ))
        )}
      </main>
    </>
  )
}

export default MenuPage
