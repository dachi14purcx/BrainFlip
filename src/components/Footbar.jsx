import React from 'react'
import image from '../assets/Group 23.png'
import image2 from '../assets/Group 24.png'

const Footbar = () => {
  return (
    <div className='flex justify-between items-end mt-[-40px] z-10'>
        <img src={image} alt="" className='w-[18vw] ml-5'/>
        <img src={image2} alt="" className='w-[8vw] mr-20'/>
    </div>
  )
}

export default Footbar