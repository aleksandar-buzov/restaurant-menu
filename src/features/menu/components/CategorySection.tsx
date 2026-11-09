import type { Category, MenuItem } from "@/types/menu"
import MenuItemCard from "./MenuItemCard"

interface CategorySectionProps {
  category: Category
  menuItems: MenuItem[]
}

const CategorySection = ({ category, menuItems }: CategorySectionProps) => {
  const menuItemsCount = menuItems.length
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between border-b border-stone-300 pb-2">
        <h2 className="font-serif text-2xl font-semibold lg:text-3xl">
          {category.name}
        </h2>
        <p className="text-sm text-stone-600">
          {menuItemsCount === 1
            ? `${menuItemsCount} ястие`
            : `${menuItemsCount} ястия`}
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {menuItems.map((menuItem) => (
          <MenuItemCard key={menuItem.id} menuItem={menuItem} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection
