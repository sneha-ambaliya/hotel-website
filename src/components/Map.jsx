import React from 'react'
import abouttitle from "../assets/abouttitle.png"
import mapimg from "../assets/mapimg.png"

const Map = () => {
    return (
        <>
            <div className='pt-20 max-w-[1440px] mx-auto max-sm:p-0' >
                <div className='flex flex-col  gap-0  mt-8  justify-center items-center'>
                    <img src={abouttitle} alt="" className='w-50 h-auto ' />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-2xl p-0 text-center'>MAP’S</h1>
                </div>
                <h1 className='title text-center text-5xl font-bold my-5'>Find Our Place!</h1>
                <div className="h-[550px] w-full bg-cover bg-center max-w-[1440px] mx-auto flex justify-center items-center flex-col text-white pt-10 relative max-sm:px-2 "
                        style={{ backgroundImage: `url(${mapimg})` }}></div>
            </div>
        </>
    )
}

export default Map