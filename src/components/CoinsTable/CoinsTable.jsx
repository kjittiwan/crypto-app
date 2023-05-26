import axios from "axios";
import { useEffect, useState } from "react"
import { CoinList } from "../../config/api";
import { CryptoState } from "../../contexts/Currency";
import Pagination from "./Pagination";
import Table from "./Table";

export default function CoinsTable() {
  const { currency, symbol} = CryptoState();
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const fetchCoinList = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoinList(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchCoinList();
  }, [currency]);
  const searchedCoins = () => {
    return coinList.filter((coin) => (
      coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
    ))
  }
  return (
    <div className="mt-[8rem] bg-secondary px-14 py-14 flex flex-col gap-y-14">
      <div className="flex flex-col justify-between items-center section-1 gap-y-4 w-full">
        <h1 className="text-4xl font-bold">Market Update</h1>
        <form action="" className="w-[70%]">
          <input 
          type="text" 
          placeholder="Search a coin"
          className="bg-grey pl-4 outline-none rounded-md py-2 text-lg border border-grey focus:bg-secondary w-full hover:brightness-75"
          onChange={(e) => setSearch(e.target.value)}
            />
        </form>
      </div>
      <div className="">
        <Table searchedCoins={searchedCoins} page={page} symbol={symbol} loading={loading}/>
        <Pagination itemsPerPage={10} breakLabel='...' setPage={setPage}/>
      </div>
      
    </div>
  )
}
