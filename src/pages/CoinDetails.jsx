import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CoinInfo from "../components/CoinInfo/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../contexts/Currency";
import parse from 'html-react-parser';
import { CircularProgress } from "@mui/material";

export default function CoinDetails() {
  const { currency, symbol } = CryptoState()
  const { id } = useParams();
  const [coin, setCoin] = useState()
  const [loading, setLoading] = useState(false)
  const fetchCoin = async () => {
    setLoading(true)
    const { data } = await axios.get(SingleCoin(id))
    setLoading(false)
    setCoin(data)
  };
  console.log(coin)
  useEffect(() => {
    fetchCoin()
  },[])
  return (
    <section className="bg-secondary w-screen lg:h-screen pb-[5rem] px-10">
      {loading ? (<CircularProgress />) : (
        <div className="h-full flex">
          <div className="flex flex-col justify-start  border-r-2 border-grey w-[30%] pr-6 gap-y-6 h-full">
            <img src={coin?.image.large} alt={coin?.name} className='min-h-[200px] max-w-[200px] self-center'/>
            <div className="text-4xl font-bold self-center">{coin?.name}</div>
            {parse(`<p className="font-light text-subtitle text-lg">${coin?.description.en.split(". ")[0]}</p>`)}
            <div className="font-light text-xl">
              <div><span className="font-bold mr-3">Rank:</span> {coin?.market_cap_rank}</div>
              <div>
              <span className=" font-bold mr-3">Current Price:</span> {symbol} {coin?.market_data.current_price[`${currency}`].toLocaleString('en-US',{minimumFractionDigits: 2})}
              </div>
              <div>
              <span className=" font-bold mr-3">Market Cap:</span> {symbol} {parseInt(coin?.market_data.market_cap[`${currency}`].toString().slice(0,-6)).toLocaleString('en-US')} M
              </div>
            </div>
          </div>
          <CoinInfo coin={coin} />
        </div>
      )}

    </section>
  )
}
