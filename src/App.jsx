import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import CoinDetails from "./routes/CoinDetails"
import Home from "./routes/Home"

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
