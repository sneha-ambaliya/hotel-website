import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import star1 from '../assets/star1.png'; 

const AdLine = () => {
  const items = [
    { text: 'Breakfast include', icon: star1 },
    { text: 'Swimming Pool', icon: star1 },
    { text: 'High speed wifi', icon: star1 },
    { text: 'Spa & Wellness', icon: null },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className='flex justify-center w-full'>
      <div className='flex items-center justify-between w-full px-4 max-w-[1440px] bg-[#9C005D] text-white font-bold text-xl h-12 overflow-hidden'>

        
        <div className='hidden lg:flex w-full justify-between items-center px-20'>
          {items.map((item, index) => (
            <div key={index} className='flex items-center gap-6'>
              <h1>{item.text}</h1>
              {item.icon && <img src={item.icon} alt="" className='w-5 h-5' />}
            </div>
          ))}
        </div>

        
        <div className='flex lg:hidden w-full justify-center items-center relative h-12 overflow-hidden'>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className='absolute flex items-center gap-2'
            >
              <h1 className='text-center'>{items[currentIndex].text}</h1>
              {items[currentIndex].icon && (
                <img src={items[currentIndex].icon} alt="" className='w-5 h-5' />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default AdLine;
