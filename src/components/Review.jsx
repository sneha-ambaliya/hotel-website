import React from 'react'
import abouttitle from "../assets/abouttitle.png"

const Review = () => {
    return (
        <>
            <div className='max-w-[1440px] mx-auto lg:px-20 pt-20 '>
                <div className='flex flex-col  gap-0   justify-center items-center'>
                    <img src={abouttitle} alt="" className='w-50 h-auto ' />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-2xl p-0 text-center'>GUEST REVIEWS</h1>
                </div>
                <h1 className='title text-center text-4xl font-bold my-5 max-sm:text-2xl'>What our Satisfied Guest Saying</h1>
            </div>
        </>
    )
}

export default Review