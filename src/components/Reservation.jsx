import React from 'react'
import abouttitle from "../assets/abouttitle.png"
import r1 from "../assets/reservationimg.png"
import AdLine from './AdLine'

const Reservation = () => {
    return (
        <>
            <div className='p-20 max-w-[1440px] mx-auto max-sm:p-5' >
                <div className='flex flex-col  gap-0  mt-8  justify-center items-center'>
                    <img src={abouttitle} alt="" className='w-50 h-auto ' />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-2xl p-0 text-center max-sm:text-xl'>MAKE A RESERVATION</h1>
                </div>
                <h1 className='title text-center text-5xl font-bold my-5 max-sm:text-2xl'>Book Your Stay and Enjoy Comfort </h1>

                <div className="  flex items-center justify-center p-4">
                    <div className=" w-full max-w-6xl rounded-lg  p-6 flex gap-20  flex-wrap justify-center">
                       
                        <div className=" gap-10 max-sm:gap-5 grid grid-cols-1 md:grid-cols-2" data-aos="fade-right" data-aos-duration="1000">
                            
                            <div>
                                <label className="block font-semibold mb-1">Your Name*</label>
                                <input
                                    type="text"
                                    placeholder="Ex. jhone doe"
                                    className=" px-4 py-2 rounded-xl focus:outline-none bg-white"
                                />
                            </div>

                            
                            <div>
                                <label className="block font-semibold mb-1">Phone Number*</label>
                                <input
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    className="w-55 px-4 py-2 rounded-xl focus:outline-none bg-white"
                                />
                            </div>

                            
                            <div>
                                <label className="block font-semibold mb-1">Check - In - Date*</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        defaultValue="2025-01-23"
                                        className="w-55 px-4 py-2 rounded-xl focus:outline-none bg-white"
                                    />
                                </div>
                            </div>

                            
                            <div>
                                <label className="block font-semibold mb-1">Check - Out - Date*</label>
                                <input
                                    type="date"
                                    defaultValue="2025-01-26"
                                    className="w-55 px-4 py-2 rounded-xl focus:outline-none bg-white"
                                />
                            </div>

                           
                            <div>
                                <label className="block font-semibold mb-1">Adults*</label>
                                <select className="w-55 px-4 py-2 rounded-xl focus:outline-none bg-white">
                                    <option>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3+</option>
                                </select>
                            </div>

                            
                            <div>
                                <label className="block font-semibold mb-1">Children*</label>
                                <select className="w-55 px-4 py-2 rounded-xl focus:outline-none bg-white">
                                    <option>Select</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2+</option>
                                </select>
                            </div>

                            
                            <div>
                                <label className="block font-semibold mb-1">Room Type*</label>
                                <select className="w-55 px-4 py-2 rounded-xl focus:outline-none bg-white">
                                    <option>Select</option>
                                    <option>Single</option>
                                    <option>Double</option>
                                    <option>Deluxe</option>
                                </select>
                            </div>

                            
                            <div>
                                <label className="block font-semibold mb-1">Number Of Rooms*</label>
                                <select className="w-55 px-4 py-2 rounded-xl focus:outline-none bg-white">
                                    <option>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3+</option>
                                </select>
                            </div>

                            
                            <div className="col-span-1 md:col-span-2 mt-4">
                                <button className="bg-[#9C005D] text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-pink-800 transition">
                                    Check Availability
                                </button>
                            </div>
                        </div>

                        
                        <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center" data-aos="fade-left" data-aos-duration="1000">
                            <img
                                src={r1}
                                alt="Receptionist"
                                className="rounded-2xl object-cover w-full h-full "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AdLine />
        </>
    )
}

export default Reservation