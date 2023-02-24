import React from 'react'
import heroBackground from '../assests/bg1.png'
import HeroBurger from '../assests/burgertitle.png'

const Hero = () => {
  return (
    <div className='relative h-screen w-full'>
        <div className='w-full h-screen'>
            <img className='w-full h-full object-cover' src={heroBackground} alt="herobackground" />
        </div>
        <div className='absolute top-0 left-0 flex  w-full h-full opacity-100 z-10 '>
            <div className='w-full h-full relative px-12 mx-auto flex flex-col lg:flex-row  items-center justify-center lg:justify-between gap-y-3'>
                <div className='flex flex-col gap-y-2'>
                <div className='uppercase border-dashed border-4 border-[var(--primary)] max-w-[430px] '>
                    {/* small ext */}
                    <p className='py-1 px-2 font-bold text-sm lg:text-lg text-[var(--primary)]'>it is good for the great taste of burgers</p>
                </div>
                <div className='w-full h-full'>
                    <h1 className=' font-alfa lg:text-[6rem] text-6xl md:text-[4rem] xl:text-[7rem]'>burger</h1>
                    <span className='font-alfa text-4xl  lg:text-5xl xl:text-7xl uppercase font-medium text-[var(--primary)]'>Week</span>
                </div>
                </div>
        
                <div className='w-full h-[35vh] md:h-[45vh] lg:h-auto md:w-[600px] lg:w-[700px]'>
                        <img className='w-full h-full object-fill' src={HeroBurger} alt="HeroBurger" />
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Hero