/* eslint-disable react/jsx-key */
import { useState } from 'react'
import navarray from './Navarray'
import { FaBars,  } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

function Navbar() {
  const[open,setopen]=useState(false)
  const openandclose=()=>{
    setopen(!open)
  }
  return (
    <>
    <motion.div 
     initial={{opacity:0,y:-100}}
     animate={{opacity:1,y:0}}
     transition={{duration:0.6,delay:0.6}}
    className='w-full fixed z-30 top-0  right-0 left-0  items-center justify-between md:justify-around h-16 flex 
     bg-white shadow-sm shadow-gray-400 '>
      <div >
  <img className ="w-[155px] h-full"src="https://funny-daffodil-350bc9.netlify.app/images/logo.png"/>
      </div>
      <div className='hidden md:flex font-medium text-[17px] gap-5 '>
{navarray?.slice(0,5).map((a)=>( 
      <Link to={a.links}><p className="hover:text-green-500 mr-3" key={a.name}>{a.name}</p></Link> 
        ))}
        
      </div>
     
     <Link to="/login"> <button className='bg-green-500 hidden md:block  rounded-lg w-32 h-[50px] text-md
       text-white font-bold ' >Sign in</button></Link>
    {/*mobilenavbar*/}
      <div className='md:hidden flex place-content-center items-center bg-green-500 rounded-lg w-28 h-[80%] text-[30px] text-white 
      font-bold  ' onClick={openandclose}><FaBars/></div>
      {open&&
      <motion.div 
      initial={{opacity:0,y:-100}}
     animate={{opacity:1,y:0}}
     transition={{duration:0.4,delay:0.5}}
      className='w-[90%] absolute py-10   top-20 rounded-lg right-5 left-5  bg-green-500'>
        
        {navarray?.map((b)=>(
          <Link to={b.links}><p className='text-2xl font-bold mb-6 text-white text-center' key={b.name} 
          onClick={openandclose}> {b.name}</p></Link>
       
      ))}
    
      </motion.div>
}
    </motion.div>
    
    
    </>
  )
}

export default Navbar
