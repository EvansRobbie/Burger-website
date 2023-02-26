import React from 'react'
import FooterImage from '../assests/bg_footer.png'
import BurgerHouse from '../assests/BurgerHouse_footer.png'
import { HiLocationMarker, HiOutlineMail} from 'react-icons/hi'
import { MdFacebook} from 'react-icons/md'
import { AiFillTwitterCircle, AiFillInstagram, AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
    const today = new Date()
  return (
    <footer className='relative w-full h-[60vh] md:h-[40vh] lg:h-[60vh] md:px-10 md:my-10 '>
        <img className='w-full h-full object-fill' src={FooterImage} alt="footerBurger" />
        <div className='absolute top-0 left-0 opacity-100 z-10 px-4 w-full h-full'>
            <div className='flex flex-col md:flex-row md:items-center lg:px-20 justify-center md:justify-between md:gap-4  w-full md:h-full '>
                <div className='flex flex-col w-full my-4 max-w-[500px] h-[25vh] md:h-[17vh] lg:h-[35vh] justify-between  '>
                    <img className='w-[60vw] md:w-[40vw]' src={BurgerHouse} alt="BurgerHouse" />
                    <p className='text-gray-300 text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe aperiam vero, cum quibusdam quae dolorum, molestiae eaque illo dolor nemo! Veniam doloremque at reprehenderit porro, id consequatur vero inventore.</p>
                </div>
                <div className='flex py-4 flex-col gap-2  '>
                    <div className='text-white flex items-center gap-2  w-full'>
                        {/* location icon */}
                        <HiLocationMarker size={30}/>
                        <h2 className='font-bold text-base md:text-lg'>Waiyaki way, Nairobi, Kenya</h2>
                    </div>
                    <div className='text-white flex items-center gap-2  w-full'>
                        {/* email icon */}
                        <HiOutlineMail size={30}/>
                        <h2 className='font-bold text-base md:text-lg'>evansrobbie5311@gmail.com</h2>
                    </div>
                </div>
           
            </div>
            <div className=' absolute bottom-0 my-4 px-2 lg:px-16 flex left-0 w-full flex-col md:flex-row  items-center justify-between text-white'>
                {/* copyright */}
                <div className='flex items-center gap-2'>
                    <span>&copy;</span>
                    <p className='text-sm md:text-lg font-bebas'>Copyright</p>
                    <h2 className='text-sm md:text-lg font-bebas text-red-500'>Mehar Sanaullah.</h2>
                    <h2 className='font-bebas text-sm md:text-lg'>Robbievans {today.getFullYear()}.</h2>
                </div>
                <div className='flex items-center gap-2 md:gap-4 justify-between md:justify-start w-full md:w-auto px-4'>
                    {/* Social Icons */}
                    <AiFillInstagram size={25} className='active:scale-105 md:h-8 md:w-8 hover:shadow-slate-200 shadow-xl'/>
                    <MdFacebook size={25} className='active:scale-105 md:h-9 md:w-9 hover:shadow-slate-200 shadow-xl'/>
                    <AiFillTwitterCircle size={25} className='active:scale-105 md:h-8 md:w-8 hover:shadow-slate-200 shadow-xl'/>
                    <AiOutlineWhatsApp size={25} className='active:scale-105 md:h-8 md:w-8 hover:shadow-slate-200 shadow-xl'/>
                </div>

            </div>
        </div>
        
    </footer>
  )
}

export default Footer