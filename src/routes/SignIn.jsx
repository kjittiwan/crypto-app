import { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/Auth';
const Signin = () => {
  const { signIn } = UserAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch {(err) => {
      setError(err.message)
      console.log(err.message)
    }}
  };
  return (
    <div className='bg-primary h-screen flex items-center'>
      <div className='max-w-[400px] mx-auto  px-6 py-8 bg-secondary rounded-lg'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                className='bg-grey px-4 outline-none rounded-md py-2 text-lg border border-grey focus:bg-secondary w-full hover:brightness-75'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail className='absolute right-4 top-4 text-gray-400' />
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                className='bg-grey px-4 outline-none rounded-md py-2 text-lg border border-grey focus:bg-secondary w-full hover:brightness-75'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiFillLock className='absolute right-2 top-4 text-gray-400' />
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-accent  rounded-lg shadow-xl'>
            Sign in
          </button>
        </form>
        <p className='my-4'>
          Don&apos;t have an account?{' '}
          <Link to='/signup' className='text-accent'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;