import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Signin = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const loginFunc = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if (input.email === loggeduser.email && input.password === loggeduser.password) {
      localStorage.setItem('loggedin', true);
      localStorage.setItem('loggedInUser', loggeduser.name);
      navigate("/games");
    } else {
      alert("Wrong Email Or Password");
    }
  };

  return (
    <div className='h-screen overflow-hidden'>
      <Navbar />
      <form onSubmit={loginFunc}>
        <div className='flex h-screen flex-col items-center gap-10'>
          <h1 className='header font-extrabold text-[100px]'>Sign In</h1>

          <div>
            <label htmlFor="email" className='header font-bold text-[40px] mr-5 ml-20'>Email:</label>
            <input onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} value={input.email} name="email" type="text" id="email" className='bg-white w-[420px] h-[70px] rounded-xl' />
          </div>

          <div>
            <label htmlFor="password" className='header font-bold text-[40px] mr-5'>Password:</label>
            <input onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} value={input.password} name="password" type="password" id="password" className='bg-white w-[420px] h-[70px] rounded-xl' />
          </div>

          <button className='start text-[40px] w-[280px] h-[90px] text-black rounded-[5px] font-semibold duration-300 transition-all hover:scale-110 active:scale-100'>Sign In</button>
        </div>
      </form>
    </div>
  )
}

export default Signin