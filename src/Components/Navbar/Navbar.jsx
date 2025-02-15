import { useState } from 'react'
import navarray from './Navarray'
import { FaBars,  } from 'react-icons/fa'


function Navbar() {
  const[open,setopen]=useState(false)
  const openandclose=()=>{
    setopen(!open)
  }
  return (
    <>
    <div className='w-full fixed z-30 top-0  right-0 left-0  items-center justify-between md:justify-around h-16 flex 
     bg-white shadow-sm shadow-gray-400 '>
      <div >
  <img className ="w-[155px] h-full"src="https://funny-daffodil-350bc9.netlify.app/images/logo.png"/>
      </div>
      <div className='hidden md:flex font-medium text-[17px] gap-5 '>
{navarray?.slice(0,5).map((a)=>(
        <p className="hover:text-green-500 mr-3" key={a.name}>{a.name}</p>
        ))}
        
      </div>
     
      <button className='bg-green-500 hidden md:block  rounded-lg w-32 h-[50px] text-md
       text-white font-bold ' >Sign in</button>
    
      <button className='md:hidden bg-green-500 rounded-lg w-32 h-[80%] text-[30px] text-white 
      font-bold place-content-center place-items-center ' onClick={openandclose}><FaBars/></button>
      {open&&
      <div className='w-[90%] absolute py-10   top-20 rounded-lg right-5 left-5  bg-green-500'>
        
        {navarray?.map((b)=>(
          <p className='text-2xl font-bold mb-6 text-white text-center' key={b.name} onClick={openandclose}>
            {b.name}</p>
       
      ))}
    
      </div>
}
    </div>
    
    
    </>
  )
}

export default Navbar
