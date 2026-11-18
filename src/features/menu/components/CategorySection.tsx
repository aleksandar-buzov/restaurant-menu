import { useTranslation } from "react-i18next"
import type { Category, MenuItem } from "@/types/menu"
import MenuItemCard from "@/features/menu/components/MenuItemCard"

interface CategorySectionProps {
  category: Category
  menuItems: MenuItem[]
}

const CategorySection = ({ category, menuItems }: CategorySectionProps) => {
  const { t } = useTranslation()

  return (
    <section
      className="flex scroll-mt-4 flex-col gap-4"
      id={`category-${category.id}`}
    >
      <div className="flex items-baseline justify-between border-b border-stone-300 pb-2">
        <h2 className="font-serif text-2xl font-semibold lg:text-3xl">
          {category.name}
        </h2>
        <p className="text-sm text-stone-600">
          {t("menu.itemCount", { count: menuItems.length })}
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
