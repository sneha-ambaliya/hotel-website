import React from 'react'
import abouttitle from "../assets/abouttitle.png"
import staff1 from "../assets/staff1.png"
import staff2 from "../assets/staff2.png"
import staff3 from "../assets/staff3.png"
import sfacebook from "../assets/sfacebook.png"
import stwitter from "../assets/stwitter.png"
import sinstagram from "../assets/sinstagram.png"
import slinkedin from "../assets/slinkedin.png"

const team = [
    {
        name: 'Jenny Alexander',
        role: 'Co-owner',
        image: staff1,
        socials: [
            sfacebook,
            stwitter,
            sinstagram,
            slinkedin,
        ],
    },
    {
        name: 'Olivia Hughes',
        role: 'Receptionist',
        image: staff2,
        socials: [sfacebook,
            stwitter,
            sinstagram,
            slinkedin,],
    },
    {
        name: 'Sophia Lewis',
        role: 'Room Attendant',
        image: staff3,
        socials: [sfacebook,
            stwitter,
            sinstagram,
            slinkedin,],
    },
];

const Staff = () => {
    return (
        <>
            <div className='max-w-[1440px] mx-auto p-20 max-lg:p-5 '>
                <div className='flex flex-col  gap-0 w-40 '>
                    <img src={abouttitle} alt="" />
                    <h1 className=' font-bold text-[#DD9521] tracking-widest text-xl p-0 text-center'>OUR STAFF</h1>
                </div>
                <h1 className='text-4xl font-semibold py-3 title max-sm:text-2xl'> Professional Dedication to Your Comfort</h1>

                <div className='flex justify-center'data-aos="zoom-in" data-aos-duration="1000">
                    <div className=" grid max-lg:grid-cols-1  lg:grid-cols-3 gap-12 mt-10 ">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-4xl overflow-hidden shadow-md shadow-[#9C005D] hover:shadow-lg group relative"
                            >
                                <div className="relative h-72 w-full overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="object-cover w-full h-full"
                                    />


                                    {member.socials.length > 0 && (
                                        <div className="absolute inset-0  bg-opacity-10 flex justify-center items-end pb-2 gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                                            {member.socials.map((icon, idx) => (
                                                <img
                                                    key={idx}
                                                    src={icon}
                                                    alt="icon"
                                                    className="w-10 h-10 p-1  rounded-full hover:scale-110 transition"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>


                                <div className="p-4">
                                    <h3 className="font-bold text-lg">{member.name}</h3>
                                    <p className="text-sm text-gray-700 font-semibold py-4">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Staff