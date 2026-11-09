import CategorySection from "@/features/menu/components/CategorySection"
import groupItemsByCategory from "@/features/menu/utils/groupItemsByCategory"
import MenuHeader from "@/features/menu/components/MenuHeader"
import { categories, menuItems } from "@/data/menu"

const MenuPage = () => {
  const groups = groupItemsByCategory(categories, menuItems)

  return (
    <>
      <MenuHeader />

      <main className="mx-auto max-w-6xl space-y-8 px-5 py-6 lg:px-6 lg:py-8">
        {groups.map(({ category, items }) => (
          <CategorySection
            key={category.id}
            category={category}
            menuItems={items}
          />
        ))}
      </main>
    </>
  )
}

export default MenuPage
