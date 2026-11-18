import { Route, Routes, Navigate } from "react-router"
import MenuPage from "@/pages/MenuPage"
import AdminLayout from "@/app/layouts/AdminLayout"
import PublicLayout from "./layouts/PublicLayout"
import AdminItemsPage from "@/pages/admin/AdminItemsPage"
import AdminCategoriesPage from "@/pages/admin/AdminCategoriesPage"
import NotFoundPage from "@/pages/NotFoundPage"

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/" element={<Navigate to="/menu" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="items" element={<AdminItemsPage />}></Route>
        <Route path="categories" element={<AdminCategoriesPage />}></Route>
        <Route index element={<Navigate to="items" replace />} />
      </Route>
    </Routes>
  )
}

export default App
