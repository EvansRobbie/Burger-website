import React from 'react'
import heroBackground from '../assests/bg1.png'
import HeroBurger from '../assests/burgertitle.png'
import ToggleButton from './ToggleButton'

const Hero = ({handleNav, nav}) => {
  return (
    <div className='relative h-screen w-full '>
        <div className='w-full h-screen'>
            <img className='w-full h-full object-cover' src={heroBackground} alt="herobackground" />
        </div>
        <div className='absolute top-0 left-0 flex  w-full h-full opacity-100 z-10 my-5 '>
            <div className='w-full h-full relative px-12 mx-auto flex flex-col lg:flex-row  items-center justify-center lg:justify-between gap-y-3'>
                <div className='flex flex-col gap-y-2'>
                <div className='uppercase border-dashed border-4 border-[var(--primary)] max-w-[390px] '>
                    {/* small ext */}
                    <p className='py-1 px-2 font-bold text-sm lg:text-base text-[var(--primary)]'>it is good for the great taste of burgers</p>
                </div>
                <div className='w-full h-full'>
                    <h1 className=' font-alfa lg:text-[6rem] text-6xl md:text-[4rem] '>burger</h1>
                    <span className='font-alfa text-4xl  lg:text-5xl  uppercase font-medium text-[var(--primary)]'>Week</span>
                </div>
                </div>
        
                <div className='w-full h-[30vh] md:h-[35vh] lg:h-[60vh] md:w-[600px] lg:w-[660px] lg:pl-20 xl:pl-0 xl:pr-20'>
                        <img className='w-full h-full object-fill' src={HeroBurger} alt="HeroBurger" />
                </div>
                
            </div>
            
        </div>
        <ToggleButton handleNav= {handleNav} nav = {nav}/>
    </div>
  )
}

export default Hero