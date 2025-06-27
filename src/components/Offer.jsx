import React from 'react'
import offerback from "../assets/offerback.png"
import abouttitle from "../assets/abouttitle.png"
import time from "../assets/time.png"

const Offer = () => {
  return (
    <>
      <div className='bg-cover bg-no-repeat max-w-[1440px] h-[500px] flex flex-col justify-center mx-auto items-center mt-20' style={{ backgroundImage: `url(${offerback})` }}>

        <div className='flex flex-col  gap-0  mt-8  justify-center items-center'>
          <img src={abouttitle} alt="" className='w-50 h-auto ' />
          <h1 className=' font-bold text-white tracking-widest text-2xl p-0 text-center max-sm:text-sm'>OFFERS & DISCOUNTS</h1>
        </div>
        <h1 className='title text-center text-white text-5xl py-10 max-sm:text-3xl'>Limited Time Holiday Sale   </h1>
        <h1 className='text-white'>Enjoy Exclusive 25% Discounts On Stays!</h1>
        <img src={time} alt="" className='w-80 py-5 max-sm:w-50'/>
        <button className='border-2 border-white text-white px-8 py-1 rounded-4xl my-5'>Book now</button>


      </div>
    </>
  )
} 

export default Offer