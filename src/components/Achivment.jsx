import React from 'react'
import abouttitle from "../assets/abouttitle.png"
import a1 from "../assets/award.png"
import AdLine from './AdLine'

const awards = [
    {
        year: 2024,
        title: 'Luxury Stay Award',
        heading: 'Luxury',
        subheading: 'Stay Awards',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .'
    },
    {
        year: 2024,
        title: 'Top Hospitality Innovator',
        heading: 'Top',
        subheading: 'hospitality Innovator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .'
    },
    {
        year: 2024,
        title: 'Ultimate Comfort Award',
        heading: 'Ultimate',
        subheading: 'Comfort Awards',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .'
    },
    {
        year: 2024,
        title: 'Outstanding Awards',
        heading: 'Outstanding',
        subheading: 'hospitality Awards',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .'
    }
]

const Achivment = () => {
    return (
        <>
            <div className='max-w-[1440px] mx-auto p-20 max-lg:p-5 '>
                <div className='flex flex-col  gap-0 w-60 '>
                    <img src={abouttitle} alt="" />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-xl p-0 text-center'>OUR ACHIEVEMENTS</h1>
                </div>
                <h1 className='text-4xl font-semibold py-3 max-sm:text-2xl'>Proudly Recognized for Excellence </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 " data-aos="zoom-out" data-aos-duration="1000">
                    {awards.map((award, index) => (
                        <div key={index} className="flex items-center gap-4 ">
                           
                            <div className="w-28 h-28 flex-shrink-0">
                                
                                <img src={a1} alt="Award Icon" className="w-full h-full object-contain" />
                            </div>

                            
                            <div>
                                <p className="text-sm font-semibold">{award.year}</p>
                                <h3 className="text-xl font-bold">{award.title}</h3>
                                <p className="text-sm text-gray-700 mt-1">{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
            <AdLine/>
        </>
    )
}

export default Achivment