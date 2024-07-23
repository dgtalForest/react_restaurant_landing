// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Ensure to include your CSS file
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled more than 300px, otherwise hide it
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
