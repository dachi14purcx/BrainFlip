import React from 'react'
import image from '../assets/Group 2.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const goToGames = () => {
      navigate('/games');
    };

  return (
    <div className='flex flex-col items-center justify-around h-screen'>
        <div className='btn opacity-0 flex items-center gap-3'>
            <img src={image} alt="" className=' w-[25px]'/>
            <h3 className='text-[25px] font-bold'>By Students of Goa</h3>
        </div>

        <div className='flex flex-col items-center justify-around h-[600px]'>
            <div className='flex items-center absolute top-[15vw] loading'>
                    <div>
                        <div className='w-[6.5vw] h-[6.5vw] rounded-xs mb-7 start origin-bottom-lef rotated'></div>
                        <div className='w-[6.5vw] h-[6.5vw] rounded-xs bg-white'></div>
                    </div>
                    

                    <div className='ml-7 opener'>
                        <div className='w-[6.5vw] h-[6.5vw] rounded-xs bg-white mb-7'></div>
                        <div className='w-[6.5vw] h-[6.5vw] rounded-xs bg-white'></div>
                    </div>
            </div>
            <div>
                <h1 className='header text-[15vw] font-extrabold scale-0'>BrainFlip</h1>
            </div>
            
            <button onClick={goToGames} className='btn opacity-0 start text-[40px] w-[300px] h-[110px] text-black rounded-[5px] font-semibold duration-300 transition-all hover:scale-110 active:scale-100'>Start Playing</button>
        </div>

        <p className='opacity-0 btn text-[22px] font-bold'>&lt;&lt; - Game To Improve Memory - &gt;&gt;</p>
    </div>
  )
}

export default Header