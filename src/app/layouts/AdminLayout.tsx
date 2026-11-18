import { Outlet, NavLink, Link } from "react-router"
import { useTranslation } from "react-i18next"

const navLinkClasses =
  "block rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap text-stone-700 transition-colors hover:bg-stone-100 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-800"

const AdminLayout = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen lg:flex">
      <aside className="border-b border-stone-200 bg-white p-4 lg:min-h-screen lg:w-60 lg:shrink-0 lg:border-r lg:border-b-0">
        <p className="mb-4 hidden px-3 font-serif text-lg font-semibold lg:block">
          {t("common.restaurantName")}
        </p>
        <nav aria-label={t("admin.navLabel")}>
          <ul role="list" className="flex gap-1 overflow-x-auto lg:flex-col">
            <li>
              <NavLink to="/admin/items" className={navLinkClasses}>
                {t("admin.items")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/categories" className={navLinkClasses}>
                {t("admin.categories")}
              </NavLink>
            </li>
            <li className="lg:mt-4 lg:border-t lg:border-stone-200 lg:pt-4">
              <Link to="/menu" className={navLinkClasses}>
                {t("admin.publicMenu")} <span aria-hidden="true">↗</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="min-w-0 flex-1 p-5 lg:p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
