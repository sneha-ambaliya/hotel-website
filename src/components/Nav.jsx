import React, { useState } from 'react';
import call from "../assets/call.png"
import mail from "../assets/mail.png"
import location from "../assets/location.png"
import facebook from "../assets/facebook.png"
import pinterest from "../assets/pinterest.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"
import insta from "../assets/insta.png"
import mainlogo from "../assets/mainlogo.png"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav>
                <div className='bg-[#9C005D] py-2 px-15 flex justify-between text-white max-lg:hidden  '>
                    <div className='flex justify-center gap-2'>
                        <img src={call} alt="" />
                        <h1>(000)000-000</h1>
                    </div>
                    <div className='flex justify-center gap-2'>
                        <img src={mail} alt="" />
                        <h1>example@gmail.com</h1>
                    </div>
                    <div className='flex justify-center gap-2'>
                        <img src={location} alt="" />
                        <h1>2464 Royal.Ln.Mesa,New jersey 45463 </h1>
                    </div>
                    <div className='flex justify-center gap-2'>
                        <img src={facebook} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                        <img src={insta} alt="" />
                    </div>

                </div>
                <nav className="bg-[#D9D9D9] px-4 md:px-16 py-3">
                    <div className="flex justify-between items-center">
                        <img src={mainlogo} alt="Logo" className="w-28" />


                        <div className=" lg:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>


                        <ul className="hidden lg:flex gap-8 font-bold cursor-pointer">
                            <a href="#home"><li className="hover:text-[#9C005D]">Home</li></a>
                            <a href="#room"><li className="hover:text-[#9C005D]">Rooms & Suites</li></a>
                            <a href="#restaurant"><li className="hover:text-[#9C005D]">Restaurant</li></a>
                            <a href="#gallery"><li className="hover:text-[#9C005D]">Gallery</li></a>
                            <a href="#blog"><li className="hover:text-[#9C005D]">Blogs</li></a>
                            <a href="#about"><li className="hover:text-[#9C005D]">About us</li></a>
                        </ul>

                        <button className="hidden lg:block text-white bg-[#9C005D] font-bold rounded-3xl px-5 py-2">
                            Book Now
                        </button>
                    </div>


                    {isOpen && (
                        <div className="lg:hidden mt-4 space-y-4 font-bold">
                            <ul className="flex flex-col gap-3">
                                <a href="#home"><li className="hover:text-[#9C005D]">Home</li></a>
                                <a href="#room"><li className="hover:text-[#9C005D]">Rooms & Suites</li></a>
                                <a href="#restaurant"><li className="hover:text-[#9C005D]">Restaurant</li></a>
                                <a href="#gallery"><li className="hover:text-[#9C005D]">Gallery</li></a>
                                <a href="#blog"><li className="hover:text-[#9C005D]">Blogs</li></a>
                                <a href="#about"><li className="hover:text-[#9C005D]">About us</li></a>
                            </ul>
                            <button className="w-full text-white bg-[#9C005D] font-bold rounded-3xl px-5 py-2">
                                Book Now
                            </button>
                        </div>
                    )}
                </nav>
            </nav>
        </>
    )
}

export default Nav