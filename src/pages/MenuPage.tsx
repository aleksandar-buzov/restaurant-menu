import MenuItemCard from "@/features/menu/components/MenuItemCard"
import { menuItems } from "@/data/menu"

const MenuPage = () => {
  return menuItems.map((item) => {
    return <MenuItemCard key={item.id} menuItem={item}></MenuItemCard>
  })
}

export default MenuPage
