"use client"
import React, { use, useEffect } from 'react'
import { FaArrowAltCircleDown, FaArrowUp } from 'react-icons/fa';

const ScrollTopUp = () => {
    const [isVisible, setIsVisible] = React.useState(false);


//Show and hide scroll to top button based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            };

            window.addEventListener('scroll', toggleVisibility);
            return () => window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);



//Scroll to top function
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      isVisible && (
        <button className='bg-blue-950/60 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none' onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )
    </div>
  )
}

export default ScrollTopUp
