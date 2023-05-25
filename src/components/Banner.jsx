import Carousel from "./Carousel";

export default function Banner() {
  return (
    <div className="bg-secondary flex flex-col items-center mx-14 rounded-lg py-14 h-[35rem] justify-between">
      <div className="text-6xl font-bold flex flex-col items-center gap-y-2">
        <h1>Track & Trade</h1>
        <h1 className="text-accent">Crypto Instantly</h1>
        <p className="text-xl text-subtitle font-light pt-4">Optimizing your crypto holdings has never been easier</p>
      </div>
      <Carousel/>
      
    </div>
  )
}
