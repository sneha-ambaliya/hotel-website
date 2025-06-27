import React from 'react'
import videoback from "../assets/videoback.png"
import stars from "../assets/stars.png"
import playbutton from "../assets/playbuttonbig.png"

const Video = () => {
  return (
    <div className='bg-cover bg-no-repeat max-w-[1440px] h-[500px] flex flex-col justify-center mx-auto items-center' style={{ backgroundImage: `url(${videoback})` }}>
       <img src={stars} alt="" className='w-40'/>
       <h1 className='text-white text-center uppercase text-2xl py-3'>WHATCH THE VIDEO</h1>
       <h1 className='title text-center text-white text-5xl font-bold mt-5 max-sm:text-3xl' >Take a Virtual Tour of Our Hotel  </h1>
       <img src={playbutton} alt="" className='mt-10'/>
        
    </div>
  )
}

export default Video