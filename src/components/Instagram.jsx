import React, { useState } from 'react';
import abouttitle from "../assets/abouttitle.png";
import sinstagram from "../assets/sinstagram.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i6 from "../assets/i6.png";
import i7 from "../assets/i7.png";
import i8 from "../assets/i8.png";
import instalogo from "../assets/instalogo.png";
import AdLine from './AdLine';

const images = [i1, i2, i8, i4, i6, i7, i8, i3]; // 8 side images
const centerImage = i1; // default center image

const Instagram = () => {
    const [activeImg, setActiveImg] = useState(centerImage);

    return (
        <>

            <div className='max-w-[1440px] mx-auto p-20 max-md:p-4' id="gallery">
                
                <div className='flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-5'>
                    <div>
                        <div className='flex flex-col gap-0 w-40'>
                            <img src={abouttitle} alt="" />
                            <h1 className='font-bold text-[#DD9521] tracking-widest text-xl text-center'>FOLLOW US</h1>
                        </div>
                        <h1 className='text-4xl font-semibold py-3 title max-sm:text-2xl'>Follow Us On Instagram</h1>
                    </div>
                    <button className='bg-[#9C005D] py-2 px-10 text-white font-bold rounded-3xl'>Follow us</button>
                </div>

                
                <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-4 mt-10'>
                    
                    <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                        {images.slice(0, 4).map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveImg(img)}
                                className='relative group overflow-hidden rounded-xl cursor-pointer aspect-square'
                            >
                                <img src={img} alt={`img-${idx}`} className='w-full h-full object-cover group-hover:brightness-50 transition' />
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition'>
                                    <img src={instalogo} alt="insta" className="w-10 h-10" />
                                </div>
                            </div>
                        ))}
                    </div>

                    
                    <div className='relative col-span-1 row-span-2  w-full'>
                        <div className=' rounded-xl overflow-hidden'>
                            <img src={activeImg} alt="center" className='w-full   object-cover' />
                            
                        </div>
                    </div>

                    
                    <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                        {images.slice(4, 8).map((img, idx) => (
                            <div
                                key={idx + 4}
                                onClick={() => setActiveImg(img)}
                                className='relative group overflow-hidden rounded-xl cursor-pointer aspect-square'
                            >
                                <img src={img} alt={`img-${idx + 4}`} className='w-full h-full object-cover group-hover:brightness-50 transition' />
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition'>
                                    <img src={instalogo} alt="insta" className="w-10 h-10" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AdLine />
        </>
    );
};

export default Instagram;
