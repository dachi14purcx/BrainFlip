import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Signin = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || {};
    
    if (users[input.email] && users[input.email].password === input.password) {
      localStorage.setItem('loggedInUser', input.email); // Store logged-in user
      navigate('/games'); // Navigate to the games page after successful login
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='h-screen overflow-hidden'>
      <Navbar />
      <form onSubmit={handleLogin}>
        <div className='flex h-screen flex-col items-center gap-10'>
          <h1 className='header font-extrabold text-[100px]'>Sign In</h1>

          <div>
            <label htmlFor="email" className='header font-bold text-[40px] mr-5 ml-20'>Email:</label>
            <input
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              value={input.email}
              name="email"
              type="text"
              id="email"
              className='bg-white w-[420px] h-[70px] rounded-xl'
            />
          </div>

          <div>
            <label htmlFor="password" className='header font-bold text-[40px] mr-5'>Password:</label>
            <input
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              value={input.password}
              name="password"
              type="password"
              id="password"
              className='bg-white w-[420px] h-[70px] rounded-xl'
            />
          </div>

          <button type="submit" className='start text-[40px] w-[280px] h-[90px] text-black rounded-[5px] font-semibold duration-300 transition-all hover:scale-110 active:scale-100'>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;