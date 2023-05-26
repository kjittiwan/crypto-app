import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { UserAuth } from "../../contexts/Auth";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export default function CoinItem({ coin }) {
  const { user } = UserAuth()
  const [savedCoin, setSavedCoin] = useState(false)
  const coinPath = doc(db, 'users', `${user?.email}`)
  const saveCoin =  async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
        
        }),
      });
    } else {
      alert('Please sign in to save  a coin to your watch list.')
    }
  }

  let profit = coin?.price_change_percentage_24h >= 0;
  return (
    <Link to={`/coin/${coin.id}`} key={coin.id}>
      <tr className="hover:bg-grey hover:bg-opacity-50 grid grid-rows-1 grid-cols-4 px-4 text-xl font-semibold">
        <th className="flex gap-5 py-4 font-normal items-center">
          <div className="flex items-center gap-x-4">
            <div onClick={saveCoin}>
              {savedCoin ? 
              <AiFillStar className=" text-yellow-500" />
              : <AiOutlineStar />
              }
              
            </div>
            
          <div className="relative min-h-[4rem] max-w-[4rem]">
          <img
            className="h-full w-full  object-cover object-center"
            src={coin?.image}
            alt=""
          />
          </div>
          
          </div>
          <div className="">
            <div className="font-semibold text-xl uppercase">
              {coin?.symbol} 
            </div>
            <div className="text-subtitle text-base">
              {coin?.name}
            </div>
          </div>
        </th>
        <td className="flex justify-end items-center">
          {symbol} {coin?.current_price.toLocaleString('en-US',{minimumFractionDigits: 2})}</td>
        <td className={`${profit ? 'text-green-500' : 'text-red-500'} flex justify-end items-center`}>
          {profit && '+'} {coin?.price_change_percentage_24h.toFixed(2)} %
        </td>
        <td className="flex justify-end items-center text-lg">
          {symbol} {parseInt(coin?.market_cap.toLocaleString('en-US')).toFixed(2)} M
        </td>
      </tr>
    </Link>
    
  )
}
