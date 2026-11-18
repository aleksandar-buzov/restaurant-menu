import { Link, useParams } from "react-router"
import { useTranslation } from "react-i18next"
import { categories, menuItems, allergens } from "@/data/menu"
import formatPrice from "@/utils/formatPrice"
import NotFoundPage from "@/pages/NotFoundPage"

const MenuItemPage = () => {
  const { t } = useTranslation()
  const id = Number(useParams().id)
  const menuItem = menuItems.find((item) => item.id === id)

  if (!menuItem) return <NotFoundPage />

  const category = categories.find((item) => item.id === menuItem.categoryId)
  const allergensList = allergens.filter((allergen) =>
    menuItem.allergenIds.includes(allergen.id),
  )

  return (
    <main className="mx-auto max-w-3xl bg-white lg:my-8 lg:overflow-hidden lg:rounded-2xl">
      <div className="relative h-64 bg-stone-200 lg:h-80">
        <Link
          to="/menu"
          className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-full bg-white shadow-sm"
          aria-label={t("menuItem.backLabel")}
        >
          <span aria-hidden="true">←</span>
        </Link>
        {menuItem.imageUrl ? (
          <img
            src={menuItem.imageUrl}
            alt={menuItem.name}
            className="size-full object-cover"
          />
        ) : (
          <div aria-hidden="true" className="size-full" />
        )}
      </div>

      <div className="flex flex-col gap-4 px-5 py-6">
        <p className="text-sm font-semibold text-emerald-700">
          {category?.name}
        </p>

        <div className="flex items-baseline justify-between gap-3">
          <h1 className="font-serif text-2xl leading-tight font-semibold lg:text-3xl">
            {menuItem.name}
          </h1>
          <p className="text-xl font-bold whitespace-nowrap">
            {formatPrice(menuItem.priceCents)}
          </p>
        </div>

        <p className="leading-relaxed text-stone-700">{menuItem.description}</p>

        {menuItem.isVegetarian && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
              {t("common.vegetarian")}
            </span>
          </div>
        )}

        {allergensList.length === 0 ? (
          <p className="text-sm text-stone-500">{t("menuItem.noAllergens")}</p>
        ) : (
          <section className="flex flex-col gap-2.5 rounded-xl border border-stone-200 bg-stone-50 p-4">
            <h2 className="text-sm font-semibold">{t("menuItem.allergens")}</h2>
            <div className="flex flex-wrap items-center gap-1.5">
              {allergensList.map((allergen) => (
                <span
                  key={allergen.id}
                  className="rounded-lg border border-stone-300 bg-white px-2.5 py-1 text-sm"
                >
                  {allergen.name}
                </span>
              ))}
            </div>

            <p className="text-xs text-stone-500">
              {t("menuItem.allergyNote")}
            </p>
          </section>
        )}
      </div>
    </main>
  )
}

export default MenuItemPage
