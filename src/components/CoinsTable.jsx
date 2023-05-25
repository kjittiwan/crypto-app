import axios from "axios";
import { useEffect, useState } from "react"
import { CoinList } from "../config/api";
import { CryptoState } from "../contexts/Currency";
import Table from "./Table";

export default function CoinsTable() {
  const { currency, symbol} = CryptoState();
  const [coinList, setCoinList] = useState([]);
  const smallList = coinList.slice(0,10);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('')
  const fetchCoinList = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoinList(data);
    setLoading(false);
  }
  console.log(coinList)
  useEffect(() => {
    fetchCoinList();
  }, [currency]);
  return (
    <div className="my-[8rem] bg-secondary px-14">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Market Update</h1>
        <form action="">
          <input 
          type="text" 
          placeholder="Search a coin"
          className="bg-grey pl-4 outline-none rounded-md py-2 text-lg border border-grey focus:bg-secondary"
          onChange={(e) => setInput(e.target.value)}
            />
        </form>
      </div>
      <Table smallList={smallList} symbol={symbol}/>
    </div>
  )
}
