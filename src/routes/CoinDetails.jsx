import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { SingleCoin } from "../config/api";
import { CryptoState } from "../contexts/CryptoContext";
import parse from 'html-react-parser';
import { CircularProgress } from "@mui/material";
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { UserAuth } from "../contexts/Auth";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { db } from "../firebase";
export default function CoinDetails() {
  const { currency, symbol, deleteCoin, coins } = CryptoState()
  const { id } = useParams();
  const [coin, setCoin] = useState()
  const [loading, setLoading] = useState(false)
  const { user } = UserAuth()
  const coinPath = doc(db, 'users', `${user?.email}`)
  const fetchCoin = async () => {
    setLoading(true)
    const { data } = await axios.get(SingleCoin(id))
    setLoading(false)
    setCoin(data)
  };
  useEffect(() => {
    fetchCoin()
  },[currency])
  const saveCoin =  async () => {
    if (user?.email) {
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin?.id,
          name: coin?.name,
          image: coin?.image.large,
          symbol: coin?.symbol,
          rank: coin?.market_cap_rank,
        })
      });
    } else {
      alert('Please sign in to save  a coin to your watch list.')
    }
  }
  const data = coin?.market_data.sparkline_7d.price
  return (
    <section className="bg-secondary w-screen lg:h-screen pb-[5rem] px-10">
      {loading ? (<CircularProgress />) : (
        <div className="h-full flex gap-x-14   rounded-lg py-10 px-10">
          <div className="flex flex-col justify-center w-[40%] px-10 gap-y-6 h-full bg-grey rounded-lg">
            <img src={coin?.image.large} alt={coin?.name} className='min-h-[200px] max-w-[200px] self-center'/>
            <div className="text-4xl font-bold self-center flex gap-x-4 items-center">{coin?.name}
            {user?.email 
            ? (
              <div>
              <AiFillStar onClick={() => deleteCoin(coin?.id)} className={`${coins.find((item) => item.id === coin?.id) ? 'block' : 'hidden'} text-yellow-500`} />
              <AiOutlineStar onClick={saveCoin} className={`${coins.find((item) => item.id === coin?.id) ? 'hidden' : 'block'} `} />
              </div>
             )
            : (
              <AiOutlineStar onClick={() => alert('Please sign in to save  a coin to your watch list.')} />
            )
            }
            
            </div>
            {parse(`<p className="font-light text-subtitle text-lg text-center">${coin?.description.en.split(". ")[0]}</p>`)}
          </div>
          <div className='flex flex-col gap-y-10 flex-1 justify-between '>
            <div className="flex flex-col flex-1 bg-grey px-4 py-10 gap-y-10 rounded-lg">
              <div className='text-2xl font-semibold text-right'>Last 7 days</div>
              <Sparklines data={data}>
                <SparklinesLine color='#5466fe' />
              </Sparklines> 
            </div>
            
            <div className="font-light text-xl flex justify-between flex-1 w-full px-10 items-center bg-grey rounded-lg">
              <div>
                <span className="font-bold mr-3">
                Rank:</span> {coin?.market_cap_rank}
              </div>
              <div>
                <span className=" font-bold mr-3">
                  Current Price:</span> {symbol} {coin?.market_data.current_price[`${currency}`].toLocaleString('en-US',{minimumFractionDigits: 2})}
              </div>
              <div>
                <span className=" font-bold mr-3">Market Cap:</span> {symbol} {parseInt(coin?.market_data.market_cap[`${currency}`].toString().slice(0,-6)).toLocaleString('en-US')} M
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
