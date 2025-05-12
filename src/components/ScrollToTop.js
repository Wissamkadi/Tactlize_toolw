import React, { useState, useEffect } from 'react';
import scroll from '../styles/icons/scroll.png';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        title="Go to top"
      >
       <img src={scroll} alt="Scroll to top" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </button>
    )
  );
};

export default ScrollToTop;
