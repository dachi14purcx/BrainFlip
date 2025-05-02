import React from 'react'
import Navbar from './Navbar'
import Footbar from './Footbar'

const Signin = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <Navbar />

      <div className='flex h-screen flex-col items-center gap-10 justify-center pb-45'>
        <h1 className='header font-extrabold text-[100px] mb-5'>Sign Up</h1>

        <div>
          <label htmlFor="email" className='header font-bold text-[40px] mr-5 ml-20'>Email:</label>
          <input type="text" name="" id="email" className='bg-white w-[420px] h-[70px] rounded-xl'/>
        </div>

        <div>
          <label htmlFor="password" className='header font-bold text-[40px] mr-5'>Password:</label>
          <input type="text" name="" id="password" className='bg-white w-[420px] h-[70px] rounded-xl'/>
        </div>

        <button className='mt-5 start text-[40px] w-[280px] h-[90px] text-black rounded-[5px] font-semibold duration-300 transition-all hover:scale-110 active:scale-100'>Sign up</button>
      </div>
    </div>
  )
}

export default Signin