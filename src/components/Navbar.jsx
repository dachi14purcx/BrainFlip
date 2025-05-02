import React from 'react'
import image from '../assets/Group 2.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const goToSignUp = () => {
      navigate('/signup');
    };

    const goToGames = () => {
      navigate('/games');
    };

  return (
    <div className='flex justify-between m-5'>
        <div className='flex gap-5'>
            <div className='w-[35px] h-[35px] bg-white rounded-xs'></div>
            <div className='w-[35px] h-[35px] rounded-xs rotate-41 start'></div>
            <div className='w-[35px] h-[35px] bg-white rounded-xs'></div>
        </div>

        <div className='flex text-black gap-9 ml-19'>
            <button onClick={goToGames} className='bg-white w-[120px] h-[40px] pt-[2.5px] text-center text-[22px] font-semibold rounded-3xl'>Games</button>
            <button className='bg-white w-[190px] h-[40px] pt-[2.5px] text-center text-[22px] font-semibold rounded-3xl'>Leaderboard</button>
            <button onClick={goToSignUp} type='button' className='bg-white w-[130px] h-[40px] pt-[2.5px] text-center text-[22px] font-semibold rounded-3xl'>Sign up</button>
        </div>

        <div className='flex items-center gap-3'>
            <img src={image} alt="" className=' w-[25px]'/>
            <h3 className='text-[25px] font-bold'>By Students of Goa</h3>
        </div>
    </div>
  )
}

export default Navbar