import React, { useState } from 'react'
import Burger from '../assests/BurgerHouse.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='absolute top-0 left-0 opacity-100 z-20 w-full h-20'>
        <div className=''>
            <img src={Burger} alt="BurgerHouse" />
        </div>
        <div>
            <div>
                <img src="" alt="" />
                <p>Express delivery</p>
                <p>+254 758 540 620</p>
            </div>
            <nav>
                <ul>
                    {
                    ['Home', 'menu', 'our story',' contact us'].map((item) => {
                        return(
                            <li key={item}>
                                {item}
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
            
        </div>
                    {/* Mobile nav */}
                    {/* overlay */}
        <div className='absolute top-0 left-0 bg-black/80 opacity-100 z-20 w-full h-screen'/>
        <nav className='absolute top-0 left-0 flex flex-col justify-center items-center  opacity-100 z-20 w-full h-screen'>
                <ul className=' flex flex-col items-center justify-center w-full h-full'>
                    {
                    ['Home', 'menu', 'our story',' contact us'].map((item) => {
                        return(
                            <li key={item} className='text-white py-8 font-bebas capitalize text-3xl '>
                                {item}
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
    </div>
  )
}

export default Navbar