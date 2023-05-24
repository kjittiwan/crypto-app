import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import CoinDetails from "./pages/CoinDetails"
import Home from "./pages/Home"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
      </Routes>
    </Router>
  )
}
