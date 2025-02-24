import { FaLock } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"
import { Link } from "react-router-dom"

function Loginorregister({logdetails,buttonname,link}) {
    return (
      <div className=' w-full min-h-screen pb-5 px-2 pt-[120px] place-content-center place-items-center '>
      <div className='w-full md:w-[50%] lg:w-[23%] space-y-5 lg:space-y-3  shadow-md shadow-gray-400 
      place-content-center rounded-lg min-h-[380px] lg:min-h-[330px] py-12  px-2 lg:py-5'>
      <label className='font-bold '>Enter Email</label>
     <div className="w-full flex  items-center h-14 pr-1 place-content-center border-2 border-black">
      <IoIosContact className="mt-1"size={29}/>
       <input placeholder='enter your username @gmail.com'className='w-full outline-none mt-1 h-12 md:h-9'/></div>
      <label className='font-bold mt-2'>Enter password</label>
      <div className="w-full flex  items-center h-14 pr-1 place-content-center border-2 border-black">
      <FaLock className="mt-1"size={20}/>
      <input type="password"placeholder='enter your password'className='w-full  outline-none mt-1 h-12 md:h-9'/>  
      </div>
      <p className="font-bold">forget password?</p>
    <Link to={link}> <p className='text-sm font-bold underline text-center mt-2'>{logdetails}</p></Link>
     <div className='w-full mt-2 text-center'>
      <button className='border-2 px-8 py-2 font-bold text-white bg-green-500 '>{buttonname}</button>
      </div>
      </div>
        
      </div>
    )
  }
  
  export default Loginorregister