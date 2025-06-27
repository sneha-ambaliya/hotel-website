import React from 'react'
import abouttitle from "../assets/abouttitle.png"
import choose1 from "../assets/choose1.png"
import choose2 from "../assets/choose2.png"
import right from "../assets/right.png"
import AdLine from './AdLine'

const Choose = () => {
    return (
        <>
            <div className='p-20 max-w-[1440px] mx-auto max-sm:p-5' >
                <div className='flex flex-col  gap-0  mt-8  justify-center items-center'>
                    <img src={abouttitle} alt="" className='w-50 h-auto ' />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-2xl p-0 text-center'>WHY CHOOSE US</h1>
                </div>
                <h1 className='title text-center text-4xl max-sm:text-2xl font-bold my-5'>Discover Comfort Like Never Before </h1>

                <div className='flex justify-center flex-wrap gap-10 mt-10'>
                    <div className='flex max-sm:flex-wrap gap-4 h-90' data-aos="fade-right" data-aos-duration="1000">
                        <img src={choose1} alt="" />
                        <img src={choose2} alt="" className='max-lg:hidden' />
                    </div>
                    <div className='max-sm:px-5' data-aos="fade-left" data-aos-duration="1000">
                        <h1 className='text-black text-xl max-sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                            sed do eiusmod tempor incididunt.</h1>
                        <div className='flex mt-8 mb-8 max-sm:mt-10'>
                            <div className='pr-5 border-r-2 border-[#00000033]'>
                                <h1 className='title font-bold text-[#9C005D] text-5xl mb-4 max-sm:text-2xl'>150+</h1>
                                <p className='text-sm text-[#000000A8]'>Staff members</p>
                            </div>
                            <div className='px-10 max-sm:px-2 border-r-2 border-[#00000033]'>
                                <h1 className='title font-bold text-[#9C005D] text-5xl mb-4 max-sm:text-2xl'>20+</h1>
                                <p className='text-sm text-[#000000A8]'>Amenities </p>
                            </div>
                            <div className='px-5'>
                                <h1 className='title font-bold text-[#9C005D] text-5xl mb-4 max-sm:text-2xl text-center'>24/7</h1>
                                <p className='text-sm text-[#000000A8]'>Booking Availabilities</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center '>
                             <img src={right} alt="" className='h-8'/>
                             <h1>Luxurious & comfortable Accommodations</h1>                         
                        </div>
                        <div className='flex gap-2 items-center my-2'>
                             <img src={right} alt="" className='h-8'/>
                             <h1>Exceptional Service & Hospitality</h1>                         
                        </div>
                        <div className='flex gap-2 items-center'>
                             <img src={right} alt="" className='h-8'/>
                             <h1>Delicious Dinning Options </h1>                         
                        </div>

                        <button className='px-5 py-1 bg-[#9C005D] text-white rounded-4xl mt-3 '>Learn more</button>
                    </div>

                </div>

            </div>
            <AdLine/>

        </>
    )
}

export default Choose