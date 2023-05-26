import { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineClose } from 'react-icons/ai'
export default function SavedCoins() {
  const [coins, setCoins] = useState([])
  return (
    <div>
      {coins.length === 0 ? (<p>
        Please save a coin to add it to your watch list. <Link to='/'>Click here to search coins.</Link>
      </p>) : (
        <table className='w-full border-collapse bg-secondary text-left text-sm text-secondary flex flex-col'>
        <thead className="bg-secondary text-white px-4 w-full">
          <tr className='font-semibold text-lg  grid grid-rows-1 grid-cols-3'>
            <th scope="col" className="py-4">Rank #</th>
            <th scope="col" className="py-4 text-right">Coin</th>
            <th scope="col" className="py-4 text-right">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-subtitle border-t border-subtitle text-white">
          {coins?.map((coin) => (
            <Link key={coin.id} to={`/coin/${coin.id}`}>
              <tr key={coin.id} className='h-[60px] overflow-hidden'>
                <td>{coin?.rank}</td>
                <th className="flex gap-5 py-4 font-normal items-center">
                  <div className="relative min-h-[4rem] max-w-[4rem]">
                    <img
                      className="h-full w-full  object-cover object-center"
                      src={coin?.image}
                      alt=""
                    />
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
                <td className='pl-8'>
                  <AiOutlineClose
                    className='cursor-pointer'
                  />
                </td>
            </tr>
            </Link>

          ))}
        </tbody>
      </table>
      )}
    </div>
  )
}
