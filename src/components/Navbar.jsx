import React from 'react';
import image from '../assets/Group 2.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const goToSignUp = () => navigate('/signup');
  const goToGames = () => navigate('/games');
  const goToLead = () => navigate('/leaderboard');
  const logout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/signup');
  };

  // Check if user is logged in
  const loggedInEmail = localStorage.getItem('loggedInUser');
  const users = JSON.parse(localStorage.getItem('users')) || {};
  const userName = loggedInEmail && users[loggedInEmail]?.name ? users[loggedInEmail].name : 'Guest';

  return (
    <div className='flex justify-between m-5'>
      <div className='flex gap-5'>
        <div className='w-[35px] h-[35px] bg-white rounded-xs'></div>
        <div className='w-[35px] h-[35px] rounded-xs rotate-41 start'></div>
        <div className='w-[35px] h-[35px] bg-white rounded-xs'></div>
      </div>

      <div className='flex text-black gap-9 ml-19'>
        <button onClick={goToGames} className='bg-white w-[120px] h-[40px] pt-[2.5px] text-center text-[22px] font-semibold rounded-3xl'>
          Games
        </button>
        <button onClick={goToLead} className='bg-white w-[190px] h-[40px] pt-[2.5px] text-center text-[22px] font-semibold rounded-3xl'>
          Leaderboard
        </button>
        <button onClick={goToSignUp} className='bg-white w-[130px] h-[40px] pt-[2.5px] text-center text-[22px] font-semibold rounded-3xl'>
          Sign Up
        </button>
        {loggedInEmail && (
          <button onClick={logout} className='bg-white w-[130px] h-[40px] pt-[2.5px] text-center text-[22px] font-semibold rounded-3xl'>
            Logout
          </button>
        )}
      </div>

      <div className='flex items-center gap-3'>
        <img src={image} alt="User Icon" className='w-[25px]' />
        <h3 className='text-[1.5vw] font-bold'>{userName}</h3>
      </div>
    </div>
  );
};

export default Navbar;