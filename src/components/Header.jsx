import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx'
import { CryptoState } from '../contexts/Currency';
export default function Header() {
  const { currency, setCurrency } = CryptoState();
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    if (currency === 'usd') {
      setIsOpen(false);
      setCurrency('thb');
    } else {
      setIsOpen(false);
      setCurrency('usd'); 
    }
  };
  
  return (
    <header className='drop-shadow-xl bg-transparent absolute w-full z-30 py-4 flex items-center  justify-between px-8 lg:px-32'>
      <div className='flex'>
        <Link to={'/'} >
          <div className='w-[180px]'>
            <img src={Logo} alt="" />
          </div> 
        </Link>
        <div className='h-[2.5rem] w-[1.5px] bg-grey rounded-md ml-8'></div>
      </div>
      
      <div className='relative cursor-pointer'>
        <div onClick={() => setIsOpen((prev) => !prev)} className={`${isOpen ? 'rounded-t-md ' : 'rounded-md'} flex bg-grey  w-[5rem] py-3 justify-start pl-3 items-center gap-x-2 uppercase`}>
          {currency}
          <RxTriangleDown className={`${isOpen ? 'hidden' : 'block'}`} />
          <RxTriangleUp className={`${isOpen ? 'block' : 'hidden'}`} />
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} absolute`}>
          <div onClick={handleClick} className={`${currency === 'usd' ? 'hidden' : 'flex'} bg-grey w-[5rem] py-3 items-center gap-x-2 rounded-b-md pl-3`}>USD</div>
          <div onClick={handleClick} className={`${currency === 'thb' ? 'hidden' : 'flex'} bg-grey w-[5rem] py-3 items-center gap-x-2 rounded-b-md pl-3`}>THB</div>
        </div>
        
      </div>
    
    </header>
  )
}
