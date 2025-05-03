import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    score: 0,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[input.email]) {
      alert('User already exists!');
      return;
    }

    users[input.email] = {
      username: input.name,
      email: input.email,
      password: input.password,
      score: 0,
    };

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedin', 'true');
    localStorage.setItem('loggedInUser', input.email);

    navigate('/games');
  };

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="flex h-screen flex-col items-center gap-10 text-black">
          <h1 className="header font-extrabold text-[100px]">Sign Up</h1>

          <div>
            <label htmlFor="username" className="header font-bold text-[40px] mr-5">
              Username:
            </label>
            <input
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              value={input.name}
              name="name"
              type="text"
              id="username"
              className="bg-white w-[420px] h-[70px] rounded-xl"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="header font-bold text-[40px] mr-5 ml-20">
              Email:
            </label>
            <input
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              value={input.email}
              name="email"
              type="email"
              id="email"
              className="bg-white w-[420px] h-[70px] rounded-xl"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="header font-bold text-[40px] mr-5">
              Password:
            </label>
            <input
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              value={input.password}
              name="password"
              type="password"
              id="password"
              className="bg-white w-[420px] h-[70px] rounded-xl"
              required
            />
          </div>

          <button
            type="submit"
            className="start text-[40px] w-[280px] h-[90px] text-black rounded-[5px] font-semibold duration-300 transition-all hover:scale-110 active:scale-100"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
