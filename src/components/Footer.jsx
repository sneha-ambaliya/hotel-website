import React from 'react'
import logo from "../assets/mainlogo.png"
import facebook from "../assets/ffacebook.png"
import twitter from "../assets/ftwitter.png"
import youtube from "../assets/fyoutube.png"
import insta from "../assets/finsta.png"
import location from "../assets/flocation.png"
import call from "../assets/fcall.png"
import mail from "../assets/fmail.png"
import { ChevronRight } from 'lucide-react';


const menuItems = [

    'Room & suits',
    'Restaurant',

    'Blog',

    'Gallery',

    'About us',
   
];

const Footer = () => {
    return (
        <>
            <div className='rounded-4xl p-10 flex flex-wrap max-sm:p-5 cursor-pointer max-lg:gap-20  max-lg:flex-col  mx-auto justify-between'>

                <div>
                    <img src={logo} alt="" className='h-20' />
                    <h1 className='my-10 text-xl'>We provide best hotel management services and<br />
                        cool solution with grated food taste and for<br /> leaving great rooms.</h1>
                    <div className='flex gap-12 max-sm:gap-5'>
                        <img src={facebook} alt="" className='max-sm:h-8' />
                        <img src={twitter} alt="" className='max-sm:h-8' />
                        <img src={youtube} alt="" className='max-sm:h-8' />
                        <img src={insta} alt="" className='max-sm:h-8' />



                    </div>
                </div>

                <div>
                    <h1 className='font-extrabold text-2xl lg:text-center'>Get In Touch</h1>
                    <div className='flex gap-5 py-5'>
                        <img src={location} alt="" className='h-10' />
                        <p>789 Inner Lane, Holy park,<br />
                            California, USA</p>
                    </div>
                    <div className='flex gap-5 py-5'>
                        <img src={call} alt="" className='h-8' />
                        <p>+00 123 456 7890,<br />
                            +00 987 654 3210</p>
                    </div>
                    <div className='flex gap-5 py-5'>
                        <img src={mail} alt="" className='h-8' />
                        <p>infomailrealar@gmail.com<br />
                            supportmail01@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-extrabold text-2xl lg:text-center'>Explore</h1>
                    <div className=" p-6 w-64">

                        <ul className="space-y-6">
                            {menuItems.map((item, index) => (
                                <li key={index} className="flex items-center text-gray-800 cursor-pointer hover:text-black transition-colors">
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>




            </div>
        </>
    )
}

export default Footer