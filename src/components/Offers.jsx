import React from 'react'
import Burger2 from '../assests/Burger2.png'
import Burger3 from '../assests/Burger3.png'
import Burger4 from '../assests/Burger4.png'

const Offers = () => {
  return (
    <div className='grid grid-cols-2 gap-4 md:gap-6 w-full h-full max-w-[500px] sm:max-w-[1200px] mx-auto my-8 md:my-12  '>
        
        <img className='row-span-2 h-[30vh] md:h-full w-full object-fill' src={Burger2} alt="/" />
        <img className='w-full h-full object-fill' src={Burger3} alt="/" />
        <img className='w-full h-full object-fill' src={Burger4} alt="/" />
       
        
    </div>
  )
}

export default Offers