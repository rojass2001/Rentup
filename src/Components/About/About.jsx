import Pageheading from "../Pageheading"

function About() {
  return (
    <div className='w-full'>
      <Pageheading mainhead="About Us" subhead="About Us - Who We Are?"/>

      <div className='w-full   py-20 bg-white flex gap-5 flex-col md:flex-row px-1'>
 <div className='md:w-[50%] text-[18px] text-center md:text-start  text-black w-full'>
 <p className='text-slate-700 text-center md:text-start  font-bold text-4xl'>Our Agency Story</p>
  <p className=' text-slate-600 text-[20px] mt-5 font-semibold '>Check out our company story and work process</p>
  <p  className='mt-7 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
     ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     <p className='mt-12 '>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
     </p>
     <div className='bg-green-500 px-2 mx-auto flex items-center place-content-center font-bold w-[40%] md:w-[30%] mt-4 h-[60px]
      rounded-full text-white  '>More About Us</div>
 </div>
 <img className='md:w-[50%] w-full h-[80%]  md:h-[500px]' src="https://funny-daffodil-350bc9.netlify.app/immio.jpg" />
      </div>
    </div>
  )
}

export default About
