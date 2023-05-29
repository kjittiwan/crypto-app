import { LinearProgress } from "@mui/material";
import CoinItem from "./CoinItem";
export default function Table(props) {
  const {searchedCoins, symbol, page, loading } = props
  return (
  <div className=" rounded-lg  shadow-md   flex justify-center ">
    <table className="w-full md:w-[85%] border-collapse bg-secondary text-left text-sm text-secondary flex flex-col overflow-scroll ">
      <thead className="bg-secondary text-white  w-full">
        <tr className="font-semibold text-base md:text-xl  grid grid-rows-1 grid-cols-4 w-[600px] md:w-full px-4">
          <th scope="col" className="py-4">Coin</th>
          <th scope="col" className="py-4 text-right">Price</th>
          <th scope="col" className="py-4 text-right">24h Change</th>
          <th scope="col" className="py-4 text-right">Market Cap</th>
        </tr>
      </thead>
      {loading ? (<LinearProgress />) : (
        <tbody className="divide-y divide-subtitle border-t border-subtitle text-white w-[600px] md:w-full">
        {searchedCoins()
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .map((coin) => {
          return <CoinItem key={coin.id} coin={coin} symbol={symbol}/>
        })}


      </tbody>
      )}
      
    </table>

</div>
  )
}
