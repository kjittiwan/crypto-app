import { useNavigate } from "react-router-dom";
import SavedCoins from "../components/SavedCoins"
import { UserAuth } from "../contexts/Auth"


export default function Account() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate()
  const handleSignOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch(err) {
      console.log(err.message)
    }
  }
  return (
    <section className="bg-secondary min-h-screen">
      <div className='w-[80%] md:w-[50%] h-full mx-auto'>
        <div className='flex justify-between items-center  rounded-div'>
          <div>
            <h1 className='text-2xl font-bold'>Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button onClick={handleSignOut} className='border px-3 md:px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Out
            </button>
          </div>
        </div>
        <div className='flex justfiy-between items-center rounded-div mt-10'>
          <div className='w-full min-h-[300px]'>
            <h1 className='text-2xl font-bold py-4'>Watch List</h1>
            <SavedCoins />
          </div>
        </div>
      </div>
    </section>
    
  )
}
