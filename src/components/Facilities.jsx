import React, { useState } from 'react';
import abouttitle from "../assets/abouttitle.png"
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"
import f4 from "../assets/f4.png"
import f5 from "../assets/f5.png"
import f6 from "../assets/f6.png"
import f11 from "../assets/f11.png"
import f22 from "../assets/f22.png"
import f33 from "../assets/f33.png"
import f44 from "../assets/f44.png"
import f55 from "../assets/f55.png"
import f66 from "../assets/f66.png"

const services = [
    {
        title: 'Breakfast Included',
        description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.',
        icon: f1,
        bgColor: 'bg-[#9C005D]',
        iconColor: 'text-white',
        backicon: f11,
    },
    {
        title: 'Swimming Pool',
        description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.',
        icon: f2,
        bgColor: 'bg-white',
        iconColor: 'text-yellow-500',
        backicon: f22,
    },
    {
        title: 'High Speed Wifi',
        description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.',
        icon: f3,
        bgColor: 'bg-white',
        iconColor: 'text-yellow-500',
        backicon: f33,
    },
    {
        title: 'Spa & Wellness',
        description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.',
        icon: f4,
        bgColor: 'bg-white',
        iconColor: 'text-yellow-500',
        backicon: f44,
    },
    {
        title: 'Pick up & Drop',
        description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.',
        icon: f5,
        bgColor: 'bg-white',
        iconColor: 'text-yellow-500',
        backicon: f55,
    },
    {
        title: 'Gym and Fitness',
        description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.',
        icon: f6,
        bgColor: 'bg-white',
        iconColor: 'text-yellow-500',
        backicon: f66,
    },
];

function Facilities() {
    return (
        <>
            <div className='lg:p-20 max-w-[1440px] mx-auto   '>
                <div className='flex flex-col gap-0 max-sm:p-5 max-lg:pl-10 max-lg:mt-10'>
                    <img src={abouttitle} alt="" className='w-50' />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-xl p-0  '>HOTEL FACILITIES</h1>
                </div>
                <h1 className='title text-4xl font-bold py-2 max-sm:text-2xl max-sm:pl-5 max-lg:pl-10'>Relax with Premium Facilities</h1>
                <div className=" py-10  ">
                    <div className='flex justify-center '>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6" data-aos="zoom-out" data-aos-duration="1000">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`relative group p-6 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${index === 10 ? 'bg-[#9C005D] text-white' : ' hover:bg-[#9C005D] hover:text-white'
                                        }`}
                                >

                                    <div className="absolute right-4 bottom-4 text-7xl opacity-0  group-hover:opacity-100 transition-all duration-300">
                                        <img src={service.backicon} alt="" />
                                    </div>


                                    <div className={`text-4xl mb-4 z-10 relative ${index === 0 ? 'text-white' : 'text-yellow-500 group-hover:text-white'}`}>
                                        <img src={service.icon} alt="" />
                                    </div>


                                    <h3 className="text-xl font-bold mb-2 z-10 relative">{service.title}</h3>


                                    <p className="text-sm z-10 relative">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Facilities