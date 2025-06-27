import React from 'react'
import abouttitle from "../assets/abouttitle.png"
import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import m5 from "../assets/m5.png"
import m6 from "../assets/m6.png"
import m7 from "../assets/m7.png"
import m8 from "../assets/m8.png"
import m9 from "../assets/m9.png"
import m10 from "../assets/m10.png"
import AdLine from './AdLine'

const menuItems = [
    { title: "Burst tomato pasta", price: "11", tag: "New", image: m1 },
    { title: "Tomato margherita", price: "12", tag: "Popular", image: m2 },
    { title: "Cheez Burger", price: "10", tag: "New", image: m3 },
    { title: "Burst delight", price: "07", tag: "Trending", image: m4 },
    { title: "Tango Delight", price: "15", tag: "Chef's sp.", image: m5 },
    { title: "Chocolate cake", price: "11", tag: "Dessert sp.", image: m6 },
    { title: "Paradise pie", price: "13", tag: "Trending", image: m7 },
    { title: "Carnival crust", price: "15", tag: "New", image: m8 },
    { title: "Strawberry cake", price: "06", tag: "Popular", image: m9 },
    { title: "Chocolate cake", price: "12", tag: "Must Try", image:m10 },
];

const Restaurant = () => {
    return (
        <>
            <div className='max-w-[1440px] mx-auto p-20 max-lg:p-5 ' id="restaurant" >
                <div className='flex flex-col  gap-0 w-50 '>
                    <img src={abouttitle} alt="" />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-xl p-0 text-center'>Restaurant Menu</h1>
                </div>
                <h1 className='text-4xl title font-bold'>Discover Our Delightful Menu</h1>
                <div className="  flex items-center justify-center mt-10" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="grid grid-cols-1  md:grid-cols-2   w-full max-w-6xl gap-17 p-4 max-sm:p-0 rounded-xl ">
                        {menuItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <img src={item.image} alt={item.title} className=" rounded-xl object-cover max-sm:h-20 max-sm:w-20" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <h2 className="font-bold text-[15px] ">{item.title}</h2>
                                        <span className="border-b border-black flex-1 mx-2 hidden sm:inline-block"></span>
                                        <span className="font-bold text-sm">${item.price}</span>
                                    </div>
                                    <div className='flex justify-between mt-8 max-sm:mt-2'>
                                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
                                        <span className="text-[10px] border border-yellow-500 text-yellow-600 w-20 max-sm:hidden h-5  text-center py-[2px] rounded-full whitespace-nowrap">
                                            {item.tag}
                                         </span>
                                    </div>
                               
                            </div>
                                
                            </div>
                        ))}
                </div>
            </div>
        </div >
        <AdLine/>

        </>
    )
}

export default Restaurant