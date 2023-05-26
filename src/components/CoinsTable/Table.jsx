import { LinearProgress } from "@mui/material";
import CoinItem from "./CoinItem";
export default function Table(props) {
  const {searchedCoins, symbol, page, loading } = props
  return (
  <div className=" overflow-x-scroll rounded-lg  shadow-md  w-full flex justify-center">
    <table className="w-[85%] border-collapse bg-secondary text-left text-sm text-secondary flex flex-col">
      <thead className="bg-secondary text-white px-4 w-full">
        <tr className="font-semibold text-lg  grid grid-rows-1 grid-cols-4">
          <th scope="col" className="py-4">Coin</th>
          <th scope="col" className="py-4 text-right">Price</th>
          <th scope="col" className="py-4 text-right">24h Change</th>
          <th scope="col" className="py-4 text-right">Market Cap</th>
        </tr>
      </thead>
      {loading ? (<LinearProgress />) : (
        <tbody className="divide-y divide-subtitle border-t border-subtitle text-white">
        {searchedCoins()
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .map((coin) => {
          return <CoinItem key={coin.id} coin={coin}/>
        })}


      </tbody>
      )}
      
    </table>

</div>
  )
}
