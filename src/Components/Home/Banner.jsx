const banner=[
    {image:"https://funny-daffodil-350bc9.netlify.app/images/hero/h1.png",name:"Family House",property:"122 Property"},
    {image:"https://funny-daffodil-350bc9.netlify.app/images/hero/h2.png",name:"House & Villa",property:"155 Property"},
    {image:"https://funny-daffodil-350bc9.netlify.app/images/hero/h3.png",name:"Apartment",property:"300 Property"},
    {image:"https://funny-daffodil-350bc9.netlify.app/images/hero/h4.png",name:"Office ",property:"80 Property"},
    {image:"https://funny-daffodil-350bc9.netlify.app/images/hero/h6.png",name:"Villa & Condo",property:"80 Property"},
    
    ]
    function Banner() {
      return (
        <>
        <div className='w-full pb-20 bg-slate-100  '>
       
          <div className='w-full px-3 pt-8 gap-9 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3
          md:px-8   '>
         {banner.map((b,index)=>(
          <div className='space-y-2 h-[200px] bg-white  justify-center text-center place-items-center pt-6' key={index}>
           <img className="h-12 w-12"src={b.image}/>
            <p className='font-semibold text-[18px]'>{b.name}</p>
            <p>{b.property}</p>
          </div>
         ))
    
         }
          </div>
          </div>
        </>
      )
    }
    
    export default Banner
    