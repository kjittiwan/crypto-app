import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../contexts/Auth'
export default function MobileNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
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
  const toggleMenu = () => {
    setMenuIsOpen(prev => !prev)
  }
  return (
    <nav className='xl:hidden'>
      <div onClick={toggleMenu} className='text-2xl cursor-pointer'>
        <CgMenuRight />
      </div>
      <div className={`${menuIsOpen ? 'block' : 'hidden'} bg-secondary shadow-2xl w-[55%] absolute top-20 right-5 max-w-xs h-fit z-20 rounded-lg`}>
        
        {user?.email ? (
          <ul className='h-full flex flex-col my-8 justify-start items-center gap-y-8 font-semibold text-xl'>
            <li className='hover:underline hover:underline-offset-4 active:translate-y-1'>
              <Link to={'/account'} onClick={toggleMenu} >Account</Link>
            </li>
            <li onClick={() => {handleSignOut(); toggleMenu();}} className='hover:underline hover:underline-offset-4 active:translate-y-1'> Sign Out </li>
          </ul>
        ) : (
          <ul className='h-full flex flex-col my-8 justify-start items-center gap-y-8 font-semibold text-xl'>
            <li className='hover:underline hover:underline-offset-4 active:translate-y-1'>
              <Link to={'/signin'} onClick={toggleMenu}>Sign In</Link>
            </li>
            <li className='hover:underline hover:underline-offset-4 active:translate-y-1'>
              <Link to={'/signup'} onClick={toggleMenu}>Sign Up</Link>
            </li>
          
          </ul>
        )}
        
      </div>
    </nav>
  )
}