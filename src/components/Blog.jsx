import React from 'react'
import abouttitle from "../assets/abouttitle.png"
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import AdLine from './AdLine'


const blogs = [
    {
        title: 'How to Book a Hotel : Tips For a Hassle Free Experience',
        tag: 'Booking Tips',
        date: 'Jan 08 , 2025',
        image: blog1,
    },
    {
        title: 'A Guide choosing The Perfect Room Type For Your.....',
        tag: 'Luxury Rooms',
        date: 'Jan 09 , 2025',
        image: blog2,
    },
    {
        title: 'How Hotel Amenities Can Transform Your stay',
        tag: 'Hotel Amenities',
        date: 'Jan 10 , 2025',
        image: blog3,
    },
];

const Blog = () => {
    return (
        <>
            <div className='p-20 max-w-[1440px] mx-auto max-sm:p-5' id="blog" >
                <div className='flex flex-col  gap-0  mt-8  justify-center items-center'>
                    <img src={abouttitle} alt="" className='w-50 h-auto ' />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-2xl p-0 text-center'>NEWS & BLOG</h1>
                </div>
                <h1 className='title text-center text-5xl font-bold my-5 max-sm:text-2xl'>Our Latest News & Blog </h1>
                <div className='flex justify-center'>
                    <div className="grid max-lg:grid-cols-1  lg:grid-cols-3 gap-6  p-6 max-sm:p-0 " data-aos="zoom-out" data-aos-duration="1000">
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className=" rounded-3xl overflow-hidden shadow-md shadow-[#9C005D] hover:shadow-lg"
                            >

                                <div className="relative h-60">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />

                                    <span className="absolute top-57 left-0 bg-[#9C005D] text-white text-xs px-3 py-1 rounded-r-full">
                                        {blog.tag}
                                    </span>
                                </div>


                                <div className="p-4">
                                    <div className="flex items-center text-gray-600 text-sm gap-2 mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {blog.date}
                                    </div>

                                    <h3 className="font-bold text-lg mb-3">{blog.title}</h3>

                                    <button className="text-[#9C005D] font-semibold text-sm flex items-center gap-1 hover:underline">
                                        Read More
                                        <span className="text-lg">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AdLine />

        </>
    )
}

export default Blog