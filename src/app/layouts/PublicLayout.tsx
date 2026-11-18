import { Outlet } from "react-router"
import ScrollToTop from "@/app/ScrollToTop"

const PublicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Outlet />
      <footer className="mt-auto border-t border-stone-200 py-6 text-center text-sm text-stone-500">
        © Бистро Липа
      </footer>
    </div>
  )
}

export default PublicLayout
