import { Link } from "react-router-dom";
export default function CoinItem({ coin, symbol }) {
  let profit = coin?.price_change_percentage_24h >= 0;
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="hover:bg-grey hover:bg-opacity-50 grid grid-rows-1 grid-cols-4 px-4 text-base md:text-xl font-semibold ">
        <th className="flex gap-3 md:gap-5 py-4 items-center">
          <div className="flex items-center gap-x-4">
            <div className="relative min-h-[4rem] w-[4rem]">
              <img
                className="h-full w-full  object-cover object-center"
                src={coin?.image}
                alt=""
              />
            </div>
            <div className="">
              <div className="font-semibold md:text-xl uppercase">
                {coin?.symbol} 
              </div>
              <div className="text-subtitle text-sm md:text-base">
                {coin?.name}
              </div>
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
