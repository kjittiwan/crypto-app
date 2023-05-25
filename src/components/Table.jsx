export default function Table(props) {
  const {smallList, symbol} = props
  return (
  <div className=" overflow-x-scroll rounded-lg  shadow-md m-5">
    <table className="w-[85%] border-collapse bg-secondary text-left text-sm text-secondary flex flex-col">
      <thead className="bg-secondary text-white px-4 w-full">
        <tr className="font-semibold text-lg  grid grid-rows-1 grid-cols-4">
          <th scope="col" className="py-4">Coin</th>
          <th scope="col" className="py-4 text-right">Price</th>
          <th scope="col" className="py-4 text-right">24h Change</th>
          <th scope="col" className="py-4 text-right">Market Cap</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-subtitle border-t border-subtitle text-white">
        {smallList.map((coin) => {
          let profit = coin?.price_change_percentage_24h >= 0;
          return (
            <tr key={coin.id} className="hover:bg-grey hover:bg-opacity-50 grid grid-rows-1 grid-cols-4 px-4 text-xl font-semibold">
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
              <td className="flex justify-end items-center">
                {symbol} {parseInt(coin?.current_price.toLocaleString('en-US')).toFixed(2)}</td>
              <td className={`${profit ? 'text-green-500' : 'text-red-500'} flex justify-end items-center`}>
                {profit && '+'} {coin?.price_change_percentage_24h.toFixed(2)} %
              </td>
              <td className="flex justify-end items-center text-lg">Product Designer</td>
          </tr>
          )
        })}


      </tbody>
    </table>
</div>
  )
}
