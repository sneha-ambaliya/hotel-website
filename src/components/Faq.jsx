import React, { useState } from 'react'
import abouttitle from "../assets/abouttitle.png"
import massage from "../assets/massage.png"
import qcall from "../assets/qcall.png"
import AdLine from './AdLine';

const faqs = [
    { question: "What Time is check-in and check-out ?", answer: "Check-in is at 2 PM, and check-out is by 11 AM." },
    { question: "What is Hotel cancelation policy ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Does the hotel have on-site restaurants ?", answer: "Yes, our restaurant is open 7AM - 11PM daily." },
    { question: "What types of rooms are available ?", answer: "Standard, Deluxe, Suite, and Family rooms available." },
    { question: "Is parking available in hotel ?", answer: "Yes, free parking is available for all guests." },
    { question: "Does the hotel have events and meting spaces ?", answer: "Yes, we offer multiple meeting and event halls." },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState();

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <div className='p-20 max-w-[1440px] mx-auto max-sm:p-5' >
                <div className='flex flex-col  gap-0  mt-8  justify-center items-center'>
                    <img src={abouttitle} alt="" className='w-50 h-auto ' />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-2xl p-0 text-center'>FAQ’S</h1>
                </div>
                <h1 className='title text-center text-5xl font-bold my-5 max-sm:text-2xl'>Question ? Look here.</h1>


                <div className=" p-6 max-sm:p-0 flex flex-col lg:flex-row gap-6 justify-between">
                    
                    <div className="flex-1 space-y-8">
                        {faqs.map((faq, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div
                                    key={index}
                                    className={`rounded-xl px-5 py-2 cursor-pointer transition duration-300 ${isActive ? 'bg-[#9C005D] text-white' : 'bg-white text-black'
                                        }`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold text-md">{faq.question}</h3>
                                        <span className="text-xl font-bold">
                                            {isActive ? '−' : '+'}
                                        </span>
                                    </div>
                                    {isActive && (
                                        <p className="mt-2 text-sm text-white">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    
                    <div className="flex flex-col gap-4 w-full lg:w-[300px]">
                        
                        <div className="bg-[#9C005D] text-white p-5 items-center rounded-2xl flex flex-col gap-2">
                            <img src={massage} alt="" />
                            <h3 className="font-semibold text-lg">You have different questions ?</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <button className="bg-[#DD9521] hover:bg-yellow-500 text-black mt-2 px-4 py-1 rounded-full font-semibold w-fit">
                                Contact us
                            </button>
                        </div>

                        
                        <div className="bg-white p-5 rounded-xl shadow">
                            <div className='flex items-center gap-2'>
                                <img src={qcall} alt="" />
                                <p className="text-sm text-gray-500">Your comfort , our priority</p>
                            </div>
                            <h3 className="font-bold text-lg mt-1">24/7 Service</h3>
                            <p className="text-sm mt-1">(000) 000 - 0000</p>
                        </div>
                    </div>
                </div>
            </div>
            <AdLine/>
        </>
    )
}

export default Faq