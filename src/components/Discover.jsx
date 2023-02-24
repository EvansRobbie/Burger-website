import React from 'react'
import Burger from '../assests/Burger_chips.png'

const Discover = () => {
  return (
    <div className='my-8 md:my-12 max-w-[1200px] mx-auto px-2 gap-3 flex flex-col md:flex-row items-center inset-1 rounded-b-xl  shadow-xl drop-shadow-xl shadow-gray-500/70 py-6 '>
        <div className='flex flex-col items-center md:items-start md:pl-20'>
            <h2 className='uppercase text-2xl md:text-3xl font-medium text-[var(--primary)] font-bebas'>Discover</h2>
            <h1 className='font-bold text-2xl lg:text-4xl font-alfa uppercase text-[var(--primary)]'>Upcoming events</h1>
            <p className='text-[var(--primary)] text-base text-start lg:px-10 py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, inventore adipisci! Veniam ipsa sed molestiae cupiditate modi nam impedit illo quo perferendis, delectus quam a suscipit provident voluptatem neque facere!</p>
        </div>
        <div className='w-full md:w-[200vw] lg:w-[120vw] h-full md:h-[30vh] rounded-b-xl md:rounded-r-xl overflow-hidden'>
            <img className='w-full h-full object-fit ' src={Burger} alt="/" />
        </div>
    </div>
    
  )
}

export default Discover