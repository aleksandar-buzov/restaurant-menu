import type { MenuItem } from "@/types/menu"
import formatPrice from "@/utils/formatPrice"

interface MenuItemCardProps {
  menuItem: MenuItem
}

const MenuItemCard = ({ menuItem }: MenuItemCardProps) => {
  return (
    <article className="flex gap-4 rounded-2xl bg-white p-3 shadow-sm lg:p-4">
      {menuItem.imageUrl ? (
        <img
          src={menuItem.imageUrl}
          alt={menuItem.name}
          className="size-24 shrink-0 rounded-xl object-cover lg:size-30"
        />
      ) : (
        <div
          aria-hidden="true"
          className="size-24 shrink-0 rounded-xl bg-stone-200 lg:size-30"
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="text-base leading-snug font-semibold lg:text-lg">
          {menuItem.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-stone-600">
          {menuItem.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {menuItem.isVegetarian && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                Вегетарианско
              </span>
            )}
          </div>
          <p className="text-base font-bold whitespace-nowrap text-emerald-800 lg:text-lg">
            {formatPrice(menuItem.priceCents)}
          </p>
        </div>
      </div>
    </article>
  )
}

export default MenuItemCard
