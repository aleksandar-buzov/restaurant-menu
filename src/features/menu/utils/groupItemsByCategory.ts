import type { Category, MenuItem } from "@/types/menu"

export interface CategoryGroup {
  category: Category
  items: MenuItem[]
}

const groupItemsByCategory = (
  categories: Category[],
  items: MenuItem[],
): CategoryGroup[] =>
  [...categories]
    .sort((a, b) => a.position - b.position)
    .map((category) => ({
      category,
      items: items.filter((item) => item.categoryId === category.id),
    }))
    .filter((group) => group.items.length > 0)

export default groupItemsByCategory
