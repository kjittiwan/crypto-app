import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import CoinDetails from "./routes/CoinDetails"
import Home from "./routes/Home"
import SignIn from "./routes/SignIn"
import SignUp from "./routes/SignUp"
import Account from "./routes/Account"
import Header from "./components/Header/Header"
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </Router>
  )
}
