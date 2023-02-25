import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'

const ToggleButton = ({handleNav, nav}) => {
  return (
    <button onClick={handleNav} className=' z-50 top-[70%] right-[20%] shadow-2xl  my-2 fixed opacity-100 flex flex-col justify-center items-center text-white w-12 h-12 bg-red-600 rounded-full md:hidden transition-all duration-700 delay-100'>
      { nav ?
      <RxCross2 className='text-xl'/>: 
        <div className='m-0'>
          <IoIosArrowUp className=' text-xl  '/>
          <IoIosArrowDown className=' text-xl  '/>
        </div>}
  </button>
  )
}

export default ToggleButton