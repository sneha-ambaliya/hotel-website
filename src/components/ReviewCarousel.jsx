import React, { useEffect, useRef } from 'react';

const reviews = [
    {
        name: 'Jenny Willson',
        role: 'Happy guest',
        title: 'Professional and Friendly!',
        rating: 5.0,
        review:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo at elit fermentum tincidunt. Sed non sapien eget lorem rhoncus euismod.',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Sophie Cruise',
        role: 'Happy guest',
        title: 'Excellent Hospitality!',
        rating: 5.0,
        review:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo at elit fermentum tincidunt. Sed non sapien eget lorem rhoncus euismod.',
        img: 'https://randomuser.me/api/portraits/women/47.jpg',
    },
    {
        name: 'Emily Carter',
        role: 'Happy guest',
        title: 'Loved Every Moment!',
        rating: 5.0,
        review:
            'Curabitur vitae justo euismod, faucibus libero id, consequat nunc. Integer nec magna quis orci tincidunt gravida heebbh fhefnb hgenb uhjbew hbenf hj.',
        img: 'https://randomuser.me/api/portraits/women/49.jpg',
    },
    {
        name: 'Sara Thompson',
        role: 'Happy guest',
        title: 'Unforgettable Experience!',
        rating: 5.0,
        review:
            'Ut faucibus orci vitae orci sagittis, vel mattis lectus vestibulum. Pellentesque ac est et nulla placerat dapibus hghgehrg hevry grue vhfdv hsb avgvd.',
        img: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
];

const ReviewCard = ({ review }) => {
    return (
        <div className="  max-w-[400px] rounded-3xl border-2 border-[#9C005D] p-5 py-10 mx-2 flex-shrink-0 ">
            <div className="flex items-center gap-2 mb-2">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="font-bold text-lg">{review.rating}</span>
            </div>
            <h2 className="text-2xl title font-bold mb-2">{review.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{review.review}</p>
            <div className="flex items-center gap-3">
                <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full" />
                <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
            </div>
        </div>
    );
};

const ReviewCarousel = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                const scrollAmount = container.clientWidth;
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

                
                if (
                    container.scrollLeft + container.clientWidth >=
                    container.scrollWidth - 10
                ) {
                    setTimeout(() => {
                        container.scrollTo({ left: 0, behavior: 'smooth' });
                    }, 2000);
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);
 
    return (
        <div className=" py-10  px-53">
            <div
                className="flex overflow-x-auto no-scrollbar transition-all scroll-smooth"
                ref={scrollRef}
            >
                {reviews.map((item, index) => (
                    <ReviewCard key={index} review={item} />
                ))}
            </div>
        </div>
    );
};

export default ReviewCarousel;
