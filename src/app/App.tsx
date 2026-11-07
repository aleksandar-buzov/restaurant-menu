import { Route, Routes, Navigate } from "react-router"
import MenuPage from "@/pages/MenuPage"
function App() {
  return (
    <Routes>
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/" element={<Navigate to="/menu" replace />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  )
}

export default App
