import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
  <p>Welcome to PetCare+, your trusted partner in pet wellness. Our mission is to simplify pet care by connecting pet owners with professional grooming and health services—all in just a few clicks.<br/><br/>
At PetCare+, we provide a seamless platform for booking grooming sessions, purchasing pet essentials, and managing your pet’s care. Whether it's a routine bath, nail trimming, or a vet checkup, we ensure your pets receive the best care with ease and convenience.</p>

<p>PetCare+ is committed to excellence in pet care services. You can:</p>
<ul>
  <li>Book grooming and health checkups anytime, anywhere.</li>
  <li>Explore and purchase quality pet food, supplements, and accessories.</li>
  <li>Get timely reminders for grooming, treatments, and more.</li>
</ul>

<b className='text-gray-800'>Our Vision</b>
<p>Our vision at PetCare+ is to make pet care accessible, stress-free, and personalized. Let us handle the scheduling and service details so you can focus on giving your pets the love and attention they deserve.</p>

        </div>
      </div>
      <div className='texl-xl my-4'>
     <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>

      </div>
      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined booking process that fits into your daily routine.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Access trusted groomers, vets, and pet services near you.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Tailored care reminders and product recommendations for your pet.</p>

        </div>

      </div>

    </div>
  )
}

export default About
