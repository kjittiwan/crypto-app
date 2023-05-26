import { createContext, useContext, useEffect, useState } from "react"
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from "../firebase"
import { UserAuth } from "../contexts/Auth"
const Crypto = createContext()

const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useState('thb')
  const [symbol, setSymbol] = useState('฿')
  const [coins, setCoins] = useState([])
  
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [user?.email]);
  const coinPath = doc(db, 'users', `${user?.email}`)
  const deleteCoin = async (passedId) => {
    try {
      const result = coins.filter((coin) => coin.id !== passedId)
      await updateDoc(coinPath, {
        watchList: result
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    if (currency === 'thb') {
      setSymbol('฿')
    }
    if (currency === 'usd') {
      setSymbol('$')
    }
  }, [currency]);
  
  return (
    <Crypto.Provider value={{currency, setCurrency, symbol, coins, deleteCoin, coinPath}}>
      {children}     
    </Crypto.Provider>
  )
}
export default CryptoContext
export const CryptoState = () => {
  return useContext(Crypto)
}