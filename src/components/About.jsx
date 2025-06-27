import React from 'react'
import aboutimg from "../assets/aboutimg.png"
import abouttitle from "../assets/abouttitle.png"
import star1 from "../assets/star1.png"
import AdLine from './AdLine'

const About = () => {
    return (
        <>
            <div className='flex justify-center gap-5 my-20 mt-40 max-lg:flex-wrap max-lg:mt-50 max-sm:mt-150 max-sm:px-5' id="about">
                <div>
                    <img src={aboutimg} alt="" className='lg:h-150 'data-aos="fade-right" data-aos-duration="1000" />
                </div>
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div className='flex flex-col  gap-0 w-32 mt-8'>
                        <img src={abouttitle} alt="" />
                        <h1 className=' font-bold text-[#DD9521] tracking-widest text-xl p-0 text-center'>ABOUT US</h1>
                    </div>
                    <h1 className='text-[#151414] text-5xl title py-10 max-sm:py-5 font-bold max-sm:text-2xl'>Luxurious Comfort,<br />
                        Timeless Elegance Awaits</h1>
                    <h1 className='text-[#15141480] text-xl max-sm:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                        sed do eiusmod tempor incididunt.</h1>
                    <div className='flex mt-15 max-sm:mt-10'>
                        <div className='pr-5 border-r-2 border-[#00000033]'>
                            <h1 className='title font-bold text-[#9C005D] text-5xl mb-4 max-sm:text-2xl'>50+</h1>
                            <p className='text-sm text-[#000000A8]'>Luxury Rooms</p>
                        </div>
                        <div className='px-5 border-r-2 border-[#00000033]'>
                            <h1 className='title font-bold text-[#9C005D] text-5xl mb-4 max-sm:text-2xl'>60,000+</h1>
                            <p className='text-sm text-[#000000A8]'>happy Guest </p>
                        </div>
                        <div className='px-5'>
                            <h1 className='title font-bold text-[#9C005D] text-5xl mb-4 max-sm:text-2xl'>99%</h1>
                            <p className='text-sm text-[#000000A8]'>Guest Satosfaction</p>
                        </div>
                    </div>
                    <h1 className='text-black text-xl Jenny Anderson mt-10 title max-sm:mt-5'>Jenny Anderson</h1>
                    <p className='text-xs'>Owner Royelle</p>
                </div>
            </div>
            <AdLine/>
        </>
    )
}

export default About