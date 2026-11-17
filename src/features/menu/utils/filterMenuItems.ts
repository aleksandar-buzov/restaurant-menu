import type { MenuItem } from "@/types/menu"
import type { MenuFilterState } from "@/features/menu/types"

const GLUTEN_ALLERGEN_ID = 1

const filterMenuItems = (
  menuItems: MenuItem[],
  filters: MenuFilterState,
  searchField: string,
): MenuItem[] => {
  let filteredItems = menuItems.filter((item) => item.isAvailable)

  if (filters.vegetarian) {
    filteredItems = filteredItems.filter((item) => item.isVegetarian)
  }

  if (filters.glutenFree) {
    filteredItems = filteredItems.filter(
      (item) => !item.allergenIds.includes(GLUTEN_ALLERGEN_ID),
    )
  }

  filteredItems = filteredItems.filter((item) =>
    item.name
      .toLocaleLowerCase("bg")
      .includes(searchField.toLocaleLowerCase("bg").trim()),
  )

  return filteredItems
}

export default filterMenuItems
