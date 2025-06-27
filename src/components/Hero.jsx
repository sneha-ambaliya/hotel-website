import React from 'react'
import heroback from "../assets/heroback.png"
import stars from "../assets/stars.png"
import playbutton from "../assets/playbutton.png"
import date from "../assets/date.png"
import rooms from "../assets/rooms.png"
import guests from "../assets/guests.png"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {

  const fullText = "The Ultimate Luxury Hotel\nExperience in New Jersey";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-[710px] w-full bg-cover bg-center max-w-[1440px] mx-auto flex justify-center items-center flex-col text-white pt-10 relative max-sm:px-2 " id="home"
        style={{ backgroundImage: `url(${heroback})` }}>
        <img src={stars} alt="" className='w-50' />
        <h1 className='text-white text-2xl my-3 max-sm:text-sm'>WHERE LUXUARY MEETS EXCELLENCE</h1>
        <motion.h1
          className="title text-white font-bold text-6xl text-center max-sm:text-2xl whitespace-pre-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          {displayedText}
        </motion.h1>
        <h1 className='text-[#FFFFFFBA] text-xl text-center mt-10 max-sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
          sed do eiusmod tempor incididunt.</h1>
        <div className='flex justify-center gap-20 items-center mt-10 pb-28 max-sm:gap-5'>
          <button className='py-2 px-5 border-2 border-[#FFFFFFBA] text-white rounded-4xl'>Discover more</button>
          <div className='flex justify-center gap-2 items-center'>
            <img src={playbutton} alt="" />
            <h1 className='text-white border-b-1 border-white'>Watch video</h1>
          </div>
        </div>


        <div className="w-full px-4 py-6 flex justify-center bg-transparent absolute top-155"  data-aos="fade-up" data-aos-duration="800" >
          <div className="w-full max-w-5xl bg-[#D9D9D9] rounded-4xl shadow-[0_10px_8px_rgba(0,0,0,0.4)] p-5 max-sm:flex-col flex items-center flex-wrap gap-4">

            <div className="flex-1 flex flex-col mb-4 md:mb-0">
              <label className="font-semibold text-sm mb-1 text-black">Check in</label>
              <div className="flex items-center gap-2 py-5">
                <img src={date} alt="" />
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="bg-transparent outline-none text-sm text-gray-600"
                />
              </div>
            </div>


            <div className="flex-1 flex flex-col mb-4 md:mb-0 lg:border-l-2 lg:pl-4 border-[#00000036]">
              <label className="font-semibold text-sm mb-1 text-black">Check out</label>
              <div className="flex items-center gap-2 py-5">
                <img src={date} alt="" />
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="bg-transparent outline-none text-sm text-gray-600"
                />
              </div>
            </div>


            <div className="flex-1 flex flex-col  max-sm:-ml-18 mb-4 lg:mb-0 lg:border-l-2 lg:pl-4 border-[#00000036]">
              <label className="font-semibold text-sm mb-1 text-black ">Rooms</label>
              <div className="flex items-center gap-2 py-5 ">
                <img src={rooms} alt="" />
                <select className="bg-transparent text-sm text-gray-600 outline-none">
                  <option>01 rooms</option>
                  <option>02 rooms</option>
                  <option>03 rooms</option>
                </select>
              </div>
            </div>


            <div className="flex-1 flex flex-col mb-4 lg:mb-0 lg:border-l-2 lg:pl-4 border-[#00000036]">
              <label className="font-bold text-sm mb-1 text-black ">Guests</label>
              <div className="flex items-center gap-2 py-5">
                <img src={guests} alt="" />
                <select className="bg-transparent text-sm text-gray-600 outline-none">
                  <option>1 Adult, 0 child</option>
                  <option>2 Adults, 1 child</option>
                  <option>3 Adults, 2 children</option>
                </select>
              </div>
            </div>


            <div className="flex justify-end">
              <button className="bg-[#9C005D] text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-pink-800 transition">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero