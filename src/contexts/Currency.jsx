import { createContext, useContext, useEffect, useState } from "react"
import { auth, db } from "../firebase"
import { onSnapshot, doc } from "firebase/firestore"
const Crypto = createContext()

const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useState('thb')
  const [symbol, setSymbol] = useState('฿')
  
  useEffect(() => {
    if (currency === 'thb') {
      setSymbol('฿')
    }
    if (currency === 'usd') {
      setSymbol('$')
    }
  }, [currency]);
  
  return (
    <Crypto.Provider value={{currency, setCurrency, symbol}}>
      {children}     
    </Crypto.Provider>
  )
}
export default CryptoContext
export const CryptoState = () => {
  return useContext(Crypto)
}