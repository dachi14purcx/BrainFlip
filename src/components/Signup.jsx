import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/signin');
  };
  
  return (
    <div className='h-screen overflow-hidden'>
      <Navbar />

      <div className='flex h-screen flex-col items-center gap-10'>
        <h1 className='header font-extrabold text-[100px]'>Sign Up</h1>

        <div>
          <label htmlFor="username" className='header font-bold text-[40px] mr-5'>Username:</label>
          <input type="text" name="" id="username" className='bg-white w-[420px] h-[70px] rounded-xl'/>
        </div>

        <div>
          <label htmlFor="email" className='header font-bold text-[40px] mr-5 ml-20'>Email:</label>
          <input type="text" name="" id="email" className='bg-white w-[420px] h-[70px] rounded-xl'/>
        </div>

        <div>
          <label htmlFor="password" className='header font-bold text-[40px] mr-5'>Password:</label>
          <input type="text" name="" id="password" className='bg-white w-[420px] h-[70px] rounded-xl'/>
        </div>

        <button type='button' onClick={goToSignIn} className=' ml-120 text-[20px] m-[-20px] text-gray-400'>Already have an account?</button>

        <button className='start text-[40px] w-[280px] h-[90px] text-black rounded-[5px] font-semibold duration-300 transition-all hover:scale-110 active:scale-100'>Sign up</button>
      </div>
    </div>
  )
}

export default Signup