import Logo from '../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx'
import { CryptoState } from '../../contexts/CryptoContext';
import { UserAuth } from '../../contexts/Auth';
import MobileNav from './MobileNav';

export default function Header() {
  const { currency, setCurrency } = CryptoState();
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  const handleSignOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch(err) {
      console.log(err.message)
    }
  }
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
          <div className='w-[150px] md:w-[180px]'>
            <img src={Logo} alt="" />
          </div> 
        </Link>
        <div className='h-[2rem] md:h-[2.5rem] w-[1px] md:w-[1.5px] bg-grey rounded-md ml-2 md:ml-8'></div>
      </div>
      {user?.email ? (
        <div className='gap-x-4 flex'>
          <Link to={'/account'} className='hidden md:flex'>
            <button className='md:border md:border-grey text-sm md:text-base  px-0 md:px-4 rounded-md hover:brightness-75'>Account</button>    
          </Link>
          <button className='md:border md:border-grey text-sm md:text-base  px-0 md:px-4 rounded-md hover:brightness-75 hidden md:block' onClick={handleSignOut}>Sign Out</button>
          <div className='relative cursor-pointer'>
            <div onClick={() => setIsOpen((prev) => !prev)} className={`${isOpen ? 'rounded-t-md ' : 'rounded-md'} flex bg-grey  w-[5rem] py-3 justify-start pl-3 items-center gap-x-2 uppercase hover:brightness-75` }>
              {currency}
              <RxTriangleDown className={`${isOpen ? 'hidden' : 'block'}`} />
              <RxTriangleUp className={`${isOpen ? 'block' : 'hidden'}`} />
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} absolute`}>
              <div onClick={handleClick} className={`${currency === 'usd' ? 'hidden' : 'flex'} bg-grey w-[5rem] py-3 items-center gap-x-2 rounded-b-md pl-3`}>USD</div>
              <div onClick={handleClick} className={`${currency === 'thb' ? 'hidden' : 'flex'} bg-grey w-[5rem] py-3 items-center gap-x-2 rounded-b-md pl-3`}>THB</div>
            </div>   
          </div>
        </div>
      ) : (
      <div className='flex gap-x-8'>
        <Link to={'/signin'} className='hidden md:flex'>
          <button className='border border-grey  px-4 rounded-md hover:brightness-75'>Sign In</button>
        </Link>
        <Link to={'/signup'} className='hidden md:flex'>
          <button className='bg-accent rounded-md px-4 hover:brightness-75'>Sign Up</button>
        </Link>
        <div className='relative cursor-pointer'>
          <div onClick={() => setIsOpen((prev) => !prev)} className={`${isOpen ? 'rounded-t-md ' : 'rounded-md'} flex bg-grey  w-[5rem] py-3 justify-start pl-3 items-center gap-x-2 uppercase hover:brightness-75` }>
            {currency}
            <RxTriangleDown className={`${isOpen ? 'hidden' : 'block'}`} />
            <RxTriangleUp className={`${isOpen ? 'block' : 'hidden'}`} />
          </div>
          <div className={`${isOpen ? 'block' : 'hidden'} absolute`}>
            <div onClick={handleClick} className={`${currency === 'usd' ? 'hidden' : 'flex'} bg-grey w-[5rem] py-3 items-center gap-x-2 rounded-b-md pl-3`}>USD</div>
            <div onClick={handleClick} className={`${currency === 'thb' ? 'hidden' : 'flex'} bg-grey w-[5rem] py-3 items-center gap-x-2 rounded-b-md pl-3`}>THB</div>
          </div>   
        </div>
      </div>
      )}
      <MobileNav />
      
    
    </header>
  )
}
