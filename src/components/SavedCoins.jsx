import { Link } from "react-router-dom"
import { AiOutlineClose } from 'react-icons/ai'
import { CryptoState } from "../contexts/CryptoContext"
export default function SavedCoins() {
  const { coins, deleteCoin} = CryptoState()
  return (
    <div>
      { Array.isArray(coins) && coins.length === 0 ? (<p>
        Please save a coin to add it to your watch list. <Link to='/'>Click here to search coins.</Link>
      </p>) : (
        <table className='w-full border-collapse bg-secondary text-left text-sm text-secondary flex flex-col overflow-scroll'>
          <thead className="bg-secondary text-white  w-full">
            <tr className='font-semibold text-lg px-4 grid grid-rows-1 grid-cols-3 w-[400px] md:w-full'>
              <th scope="col" className="py-4 ">Coin</th>
              <th scope="col" className="py-4 text-right">Rank #</th>
              <th scope="col" className="py-4 text-right">Remove</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-subtitle border-t border-subtitle text-white w-[400px] md:w-full ">
            {coins?.map((coin) => (
                <tr key={coin.id} className='hover:bg-grey hover:bg-opacity-50 grid grid-rows-1 grid-cols-3 px-4 py-4 text-base md:text-xl font-semibold w-full'>
                  
                  <Link to={`/coin/${coin.id}`}>
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
                  </Link>
                  <td className="flex items-center justify-end md:px-6">{coin?.rank}</td>
                  <td className='flex items-center justify-end md:px-6'>
                    <AiOutlineClose
                      className='cursor-pointer'
                      onClick={() => deleteCoin(coin.id)}
                    />
                  </td>
              </tr>

            ))}
          </tbody>
      </table>
      )}
    </div>
  )
}
