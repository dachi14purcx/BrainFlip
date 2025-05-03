import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import Signin from './Signin';

const Signup = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    score: 0,
  })

  const submitFunc = (e) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify(input))
    navigate("/signin")
  }

  const goToSignIn = () => {
    navigate('/signin');
    setLogin(!login)
  };
  
  return (
    <div className='h-screen overflow-hidden'>
    <Navbar/>
    <form onSubmit={submitFunc}>
      <div className='flex h-screen flex-col items-center gap-10 text-black'>
        <h1 className='header font-extrabold text-[100px]'>Sign Up</h1>

        <div>
          <label htmlFor="username" className='header font-bold text-[40px] mr-5'>Username:</label>
          <input onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})} value={input.name} name="name" type="text"  id="username" className='bg-white w-[420px] h-[70px] rounded-xl'/>
        </div>

        <div>
          <label htmlFor="email" className='header font-bold text-[40px] mr-5 ml-20'>Email:</label>
          <input onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})} value={input.email} name="email"  type="text" id="email" className='bg-white w-[420px] h-[70px] rounded-xl'/>
        </div>

        <div>
          <label htmlFor="password" className='header font-bold text-[40px] mr-5'>Password:</label>
          <input onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})} value={input.password} name="password" type="password" id="password" className='bg-white w-[420px] h-[70px] rounded-xl'/>
        </div>

        <button type='button' onClick={goToSignIn} className=' ml-120 text-[20px] m-[-20px] text-gray-400'>Already have an account?</button>

        <button className='start text-[40px] w-[280px] h-[90px] text-black rounded-[5px] font-semibold duration-300 transition-all hover:scale-110 active:scale-100'>Sign up</button>
      </div>
    </form>
    </div>
  )
}

export default Signup