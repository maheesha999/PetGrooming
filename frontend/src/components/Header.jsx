import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
<div
   className='w-full flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 bg-cover bg-center min-h-[570px]'
  style={{
    backgroundImage: `url(${assets.header_img})`,
  }}
>

      {/*--left--*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Schedule Your Pet’s Care <br /> With Trusted Experts
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt='' />
          <p>
            Simply browse through our extensive list of trusted Veterinarians , <br className='hidden sm:block' />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-150 transition-all duration-300'
        >
          Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/*--right--*/}
      <div className='md:w-1/2 relative'>
        {/* Remove this image since it's now used as background */}
      </div>
    </div>
  );
};

export default Header;

