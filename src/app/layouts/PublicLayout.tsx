import { Outlet } from "react-router"
import { useTranslation } from "react-i18next"
import ScrollToTop from "@/app/ScrollToTop"

const PublicLayout = () => {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Outlet />
      <footer className="mt-auto border-t border-stone-200 py-6 text-center text-sm text-stone-500">
        © {t("common.restaurantName")}
      </footer>
    </div>
  )
}

export default PublicLayout
