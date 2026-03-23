import { Navbar } from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { Footer } from "./components/Footer"
import { ShopPage } from "./pages/ShopPage"
import { ContactPage } from "./pages/ContactPage"

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/home"
          element={<HomePage/>}
        />
        <Route
          path="/shop"
          element={<ShopPage/>}
        />
        <Route
          path="/contact"
          element={<ContactPage/>}
        />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
