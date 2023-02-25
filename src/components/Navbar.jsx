import React from 'react'
import Burger from '../assests/BurgerHouse.png'
import Logo from '../assests/logo.png'
import { motion } from 'framer-motion'

const Navbar = ({nav}) => {
    // const [navScroll, setNavScroll] = useState(false)
    // const navScrolling = () =>{
    //     window.scrollY > 30 ? setNavScroll(true) : setNavScroll(false)
    // }
    // useEffect (() =>{
    //     window.addEventListener('scroll', navScrolling)
    //     return () =>{
    //         window.removeEventListener('scroll', navScrolling)
    //     }
    // })
    
    nav ? document.body.style.overflow =' hidden ': document.body.style.overflow = 'scroll'
  return (
    <div className='absolute top-0 left-0 opacity-100 z-20 w-full h-20 my-2 '>
        <div className='relative max-w-[1300px] w-full h-full flex items-center justify-between mx-auto '>
            <div className='w-[150px] md:w-[200px] lg:w-[250px] h-16 md:h-full py-4'>
                <img className='w-full  h-full object-fill' src={Burger} alt="BurgerHouse" />
            </div>
            <div className='flex flex-col items-center  h-full' >
                <div className='flex items-center justify-center h-full md:gap-2 px-2'>
                    <img className='w-10 md:w-aut' src={Logo} alt="" />
                    <p className='text-xs md:text-base text-[var(--primary)] font-bold capitalize '>Express delivery</p>
                    <p className='text-xs text-[var(--primary)] md:text-base font-bold'>+254758540620</p>
                </div>
                
            </div>
           
        </div>
        
        <nav className='h-full w-full hidden md:block '>
                    <ul className='flex  justify-end gap-20 w-full md:px-2 xl:px-28'>
                        {
                        ['Home', 'menu', 'our story',' contact us'].map((item) => {
                            return(
                                <li key={item} className='font-bebas text-xl tracking-wider '>
                                    {item}
                                </li>
                            )
                        })
                        }
                    </ul>
                </nav>
                    {/* Mobile nav */}     
        <motion.nav
       
        
         className= { ` ${nav ? 'left-0 ' : '-left-full' } fixed top-0 bg-black/80  flex flex-col justify-center items-center  opacity-100 z-20 w-full h-screen duration-500 ease-in md:hidden`}>
                <ul className=' flex flex-col items-center justify-center w-full h-full'>
                    {
                    ['Home', 'menu', 'our story',' contact us'].map((item) => {
                        return(
                            <motion.li 
                            whileHover={{scale:1.1}}
                            whileTap= {{scale:0.9}}
                            
                            key={item}  className='text-white py-8 font-bebas capitalize text-3xl '>
                                {item}
                            </motion.li>
                        )
                    })
                    }
                </ul>
            </motion.nav>
            
    </div>
  )
}

export default Navbar