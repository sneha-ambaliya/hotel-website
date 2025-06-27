import React from 'react'
import abouttitle from "../assets/abouttitle.png"
import room1 from "../assets/room1.png"
import room2 from "../assets/room2.png"
import room3 from "../assets/room3.png"
import roomstar from "../assets/roomstar.png"
import bad from "../assets/bad.png"
import bath from "../assets/bath.png"
import sqft from "../assets/sqft.png"
import AdLine from './AdLine'


const rooms = [
    {
        image: room1,
        price: 150,
        title: 'Standard Rooms',
        rating: 4.9,
        beds: 1,
        baths: 1,
        sqft: 300,
    },
    {
        image: room2,
        price: 250,
        title: 'Deluxe Rooms',
        rating: 4.9,
        beds: 1,
        baths: 1,
        sqft: 400,
    },
    {
        image: room3,
        price: 450,
        title: 'The pearl suite',
        rating: 4.9,
        beds: 1,
        baths: 1,
        sqft: 700,
    },
];
const Room = () => {
    return (
        <>
            <div className='lg:py-20 ' id="room">
                <div className='flex flex-col  gap-0  mt-8  justify-center items-center'>
                    <img src={abouttitle} alt="" className='w-50 h-auto ' />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-xl p-0 text-center'>ROOMS & SUITES</h1>
                </div>
                <h1 className='title text-[45px] text-center font-bold py-0 max-sm:text-3xl'>luxury Rooms & suites </h1>

                <div className="p-4 md:p-10  max-w-[1440px] mx-auto " data-aos="zoom-in" data-aos-duration="1000">
                    <div className='flex justify-center'>
                        <div className="grid gap-6 max-lg:grid-cols-1  lg:grid-cols-3 justify-center lg:px-20">
                            {rooms.map((room, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-4xl shadow-md shadow-[#9C005D] border border-gray-200 w-full max-w-sm transition-all hover:shadow-xl overflow-hidden"
                                >
                                    
                                    <div className="h-60 w-full">
                                        <img
                                            src={room.image}
                                            alt={room.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                   
                                    <div className="p-4 space-y-2 relative">
                                        
                                        <span className="inline-block text-sm font-semibold text-white absolute -top-4 left-0 bg-[#9C005D] px-5 py-1 rounded-r-full">
                                            Luxury Rooms
                                        </span>

                                        
                                        <div className="flex justify-between items-center">
                                            <p className="text-pink-700 font-bold text-2xl">
                                                ${room.price}{' '}
                                                <span className="text-gray-400 text-base font-normal">/night</span>
                                            </p>
                                            <div className="flex items-center gap-1">
                                                <img src={roomstar} alt="" className='h-4 ' />
                                                <span className="font-semibold">{room.rating}</span>
                                            </div>
                                        </div>

                                        
                                        <p className="font-semibold text-gray-800">{room.title}</p>

                                        
                                        <div className="flex justify-between items-center text-sm text-gray-600 pt-2 border-t border-gray-300 mt-2">
                                            <div className="flex items-center gap-1">
                                                <img src={bad} alt="" className='h-4' />
                                                <span>{room.beds} Bed</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <img src={bath} alt="" className='h-4' />
                                                <span>{room.baths} Bath</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <img src={sqft} alt="" className='h-4' />
                                                <span>{room.sqft} sqft</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <AdLine />
        </>
    )
}

export default Room