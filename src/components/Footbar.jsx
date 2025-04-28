import React from 'react'
import image from '../assets/Group 23.png'
import image2 from '../assets/Group 24.png'

const Footbar = () => {
  return (
    <div className='flex justify-between items-end mt-[-40px] '>
        <img src={image} alt="" className='w-[320px] ml-5'/>
        <img src={image2} alt="" className='w-[150px] mr-7'/>
    </div>
  )
}

export default Footbar