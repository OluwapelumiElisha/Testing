import ticket from '../assets/Vector.svg'
import path from '../assets/path27.svg'
import Enter from '../assets/svg10610178807.svg'
import Enter2 from '../assets/Vector2.svg'
import Green from '../assets/Button-tiny.svg'
import image from '../assets/image 64.svg'
import star from '../assets/Star.svg'
const hero = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mt-14">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full text-sm text-[#035E71] mb-8 border border-[#0A8BA6] bg-[#045F721A] font-inter font-medium">
        <img
          src={ticket}
          alt="icon"
          className="w-5 h-5 mr-2"
        />
        Exclus : Business high ticket
      </div>


      {/* Main Headline */}
      <div>

      </div>
      <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-[#000000] via-[#7F7F7F] via-[#000000] via-[#000000] via-[#7F7F7F] to-[#000000] bg-clip-text text-transparent">
        Parce que Chaque
        <br />
        <span>Lead</span> <span></span>
        {/* <span className="text-orange-500">Lead</span> */}
        {/* <span>Compete</span> */}
        <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
          Compete
        </span>
        <div>
          <img src={path} alt="" className='absolute top-[98%] right-[18%]' />
        </div>
      </h1>



      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
        Chaque prospect suivi, chaque KPI en direct : Kombineo centralise tout dans un CRM pensé pour les business high-ticket.
      </p>

      {/* CTA Button */}
      <div className='flex justify-center items-center gap-3'>
         <button  style={{background: "radial-gradient(circle, #FFCF72, #E49600)",}} className=" hover:bg-orange-600 text-white lg:px-8 md:px-8 sm:px-5 px-1 py-3 font-semibold mb-12 shadow-md rounded-lg flex justify-center items-center lg:space-x-5 md:space-x-5 sm:space-x-3 space-x-1">
          <span className='bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent text-[14px]'>Essayez gratuitement</span>
          <img src={Enter2} alt="" className='w-[15px] h-[15px]'/>
        </button>
        <button className="bg-[#FFFFFF] hover:bg-orange-600 text-white lg:px-8 md:px-8 sm:px-5 px-1 py-3 font-semibold mb-12 shadow-md rounded-lg flex justify-center items-center lg:space-x-5 md:space-x-5 sm:space-x-3 space-x-1">
          <span className='bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent text-[14px]'>Voir démo</span>
          <img src={Enter} alt="" className='w-[25px] h-[25px]'/>
        </button>
      </div>

      <div className='flex justify-center items-center gap-3'>
          <div className='flex justify-between space-x-2 items-center'>
            <img src={Green} alt="" />
            <p className='text-[#5E5E5E] font-inter text-[12px] font-[700]'>Setup en 10 minutes</p>
          </div>
           <div className='flex justify-between space-x-2 items-center'>
            <img src={Green} alt="" />
            <p className='text-[#5E5E5E] font-inter text-[12px] font-[700]'>Support & migration en 1 clic</p>
          </div>
      </div>

      <div className='flex justify-center items-center mt-6 space-x-2'>
        <img src={image} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        {/* <img src={star} alt="" /> */}
      </div>

      <div className='w-[100%] h-[500px] m-auto bg-[#D9D9D9] mt-7 rounded-xl'>

      </div>
    </div>
  )
}

export default hero
