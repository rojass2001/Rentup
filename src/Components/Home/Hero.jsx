import React from 'react'
import heroimg from "./hero.jpg"
import { IoSearchSharp } from "react-icons/io5";
const input="w-full h-10 border-2 border-gray-400"
function Hero() {
  return (
    <>
    <div className='w-full mt-[60px] '>
    <div className='w-full   md:px-11 relative place-items-center 
    place-content-center bg-cover  bg-no-repeat   min-h-screen px-6'style={{backgroundImage:`url(${heroimg})`}}>
    
   <div className=' w-full text-center place-items-center '>
   <h1 className=' text-3xl md:text-6xl  font-bold  text-white'>Search your Next Homes</h1>
   </div>
  <div className='text-center'>
   <p className='font-semibold  sm:mx-auto text-white mt-3 text-xl inline-block'>Find new & featured property located in your <span className='text-center'>local city.</span></p>
   </div>
   <div className='w-full mt-16 bg-white
    gap-6 px-3 py-4   grid md:grid-cols-4 grid-cols-1 '>
    <div><p className='font-bold'>City/Street</p>
    <input type="text" className={input}placeholder='Location'/>
    </div>
    <div><p className='font-bold'>Property Type</p>
    <input type="text"className={input}placeholder='Propert Type'/>
    </div>
    <div><p className=' font-bold '>Price Range</p>
    <input className={input} placeholder ='Price Range'/>
    </div>
    <div className='flex justify-around'>
        <div className='text-md font-bold text-black'>
        <p className='mt-2 '> Advanced </p>
        <p >Filter</p></div>
    <div className='w-16 rounded-lg place-content-center place-items-center h-14 bg-green-500 my-auto '>
        <IoSearchSharp className='text-white' size={28}/>
    </div>
    </div>
   </div>
   </div>
   </div>
    </>
  )
}

export default Hero
