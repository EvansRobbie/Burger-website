import React from 'react'
import MenuData from '../data/MenuData'
import Shadow from '../assests/Shadow_middle.png'

const Menu = () => {
  return (
    <div className='my-8 md:my-12 max-w-[1200px] mx-auto px-6'>
        <div className=' flex  flex-col  items-center gap-6 '>
            <div className='bg-orange-400/100 px-3 py-1 '>
            <h4 className='uppercase text-2xl md:text-3xl font-medium text-[var(--primary)] font-bebas'>Always tasty burger</h4>
            </div>
            
            <h2 className='font-bold text-3xl md:text-5xl font-alfa uppercase text-[var(--primary)]'>Choose & Enjoy</h2>
            <p className='text-[var(--primary)] text-base text-center max-w-[900px] w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis aperiam quisquam repellat adipisci eos neque inventore, error beatae voluptates obcaecati hic rem itaque vero magni pariatur a, laborum ea.</p>
        </div>
        <div className='my-10 grid grid-cols-2 md:grid-cols-3 gap-x-20 w-full `'>
            {MenuData.map((menu)=>{
                return(
                    <div key={menu.id} className='flex items-center flex-col  w-full'>
                        <div className='w-[180px] lg:w-[300px] h-full grid items-center justify-items-center duration-300 ease-in'>
                            <img className='w-full  object-fill' src={menu.image} alt="" />
                            <img src={Shadow} alt="" />
                        </div>
                        <div className='flex items-center flex-col my-4'>
                            <h1 className='text-lg font-bold md:text-3xl font-bebas'>{menu.name}</h1>
                            <p className='text-sm text-start md:text-center md:text-base text-[var(--primary)] '>{menu.description}</p>
                            <div className='bg-red-600 my-8 w-[120px] md:w-[150px] flex justify-center shadow-lg hover:shadow-black duration-300 ease-in rounded-b-2xl'>
                                <button className='py-2 '>Order now</button>
                            </div>
                        </div>
                    </div>
                )
                
            })}
        </div>
    </div>
  )
}

export default Menu