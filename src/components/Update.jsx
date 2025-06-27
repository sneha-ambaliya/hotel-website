import React from 'react'
import abouttitle from "../assets/abouttitle.png"
import pinkmail from "../assets/pinkmail.png"
import AdLine from './AdLine'
const Update = () => {
    return (
        <>

            <div className='p-20 max-w-[1440px] mx-auto max-sm:p-2' >
                <div className='flex flex-col  gap-0  mt-8  justify-center items-center'>
                    <img src={abouttitle} alt="" className='w-50 h-auto ' />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-2xl p-0 text-center'>NEWSLETTER</h1>
                </div>
                <h1 className='title text-center text-5xl font-bold my-5 max-sm:text-2xl'>Subscribe To Get Update</h1>

                <div className="py-5 flex flex-wrap justify-center">
                    <div className="flex items-center px-4 py-2 max-sm:py-1 rounded-full border border-[#9C005D] bg-white max-w-xl w-full">

                        
                        <div className=" rounded-md flex items-center justify-center">
                            <img src={pinkmail} alt="email" className="w-10 h-10" />
                        </div>

                        
                        <input
                            type="email"
                            placeholder="Enter your e mail hear"
                            className="flex-1 px-4 py-2 outline-none text-black placeholder:text-gray-700"
                        />

                        
                        <button className="bg-[#9C005D] text-white text-sm font-semibold max-sm:py-1  px-5 py-2 rounded-full hover:bg-pink-800 transition">
                            subscribe now
                        </button>
                    </div>
                </div>
            </div>
            <AdLine />
        </>
    )
}

export default Update