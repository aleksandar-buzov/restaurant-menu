import { Route, Routes } from "react-router"
import MenuPage from "./pages/MenuPage"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>ZDRAVEI BRO</h1>
            </>
          }
        />
        <Route path="/home" element={<MenuPage></MenuPage>} />
      </Routes>
    </>
  )
}

export default App
