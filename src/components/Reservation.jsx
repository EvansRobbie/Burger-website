import React from 'react'
import Bottle from '../assests/Bottle.png'
import BurgerLeft from '../assests/grp5_burger1.png'
import BurgerRight from '../assests/grp5_burger2.png'
const Reservation = () => {
  return (
    <div className='relative my-8 md:my-28 max-w-full mx-auto px-6 '>
        <div className=' flex  flex-col  items-center'>
            <h2 className='uppercase text-2xl md:text-3xl font-medium text-[var(--primary)] font-bebas'>reservation</h2>
            <h1 className='font-bold text-3xl md:text-5xl font-alfa uppercase text-[var(--primary)]'>book your table</h1>
        </div>
        <form className='my-12 md:my-20 grid grid-cols-2 max-w-[700px] mx-auto gap-2 md:gap-6'>
            <input type="text" placeholder='NAME' required />
            <input type="email" placeholder='EMAIL' required />
            <input type="date" placeholder='DATE' required />
            <input type="time" placeholder='TIME' required />
            <input className='rounded-b-2xl rounded-t-none' type="number" placeholder='N0. oF PEOPLE' />
            <div  className='bg-red-600 flex justify-center shadow-lg hover:shadow-black duration-300 ease-in rounded-b-2xl'>
                <button className='py-2'>Find a table</button>
            </div>
        </form>
        <div className='hidden lg:block'>
        <div className='absolute top-28 lg:left-30 xl:left-32 lg:h-[60vh] xl:h-[50vh]'>
            <img className='w-full h-full' src={Bottle} alt="" />
        </div>
        <div className='absolute -top-[8rem] left-0 lg:w-[25vw]  '>
            <img className='w-full h-full' src={BurgerLeft} alt="" />
        </div>
        <div className='absolute top-[50%] xl:top-[35%] right-0  h-[55vh]'>
            <img className='w-full h-full object-fill' src={BurgerRight} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Reservation