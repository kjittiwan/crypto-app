import axios from "axios"
import { useEffect, useState } from "react"
import { TrendingCoins } from "../../config/api"
import { CryptoState } from "../../contexts/Currency"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from "react-router-dom";

export default function Carousel() {
  const { currency, symbol } = CryptoState()
  const [trending, setTrending] = useState([])
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency))
    setTrending(data);
  }

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency])

  const responsive = {
    0: {
      items: 2,
    },
    640: {
      items: 4,
    }
  }

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <Link to={`/coin/${coin.id}`} key={coin.id} className='flex flex-col justify-center items-center'>
        <img src={coin?.image} alt={coin.name} className='min-h-[100px] max-w-[100px] mb-4' />
        <div className="font-semibold text-2xl">
          <div className="flex flex-1 gap-x-3 mb-2">
            <p className=''>{coin?.symbol}</p>
            <p className={`${profit ? 'text-green-500' : 'text-red-500'}`}>
              {profit && '+'} {coin?.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
          <p className="text-center">
            {symbol} {coin?.current_price.toLocaleString('en-US',{minimumFractionDigits: 2})}
            </p>
        </div>
      </Link>
    )
  })
  return (
    <div className="h-[55%] flex justify-center items-center w-[85%] mx-10 bg-grey py-4 rounded-lg bg-opacity-30">
      <AliceCarousel 
        infinite 
        mouseTracking 
        autoPlayInterval={1000} 
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      ></AliceCarousel>
    </div>
  )
}
