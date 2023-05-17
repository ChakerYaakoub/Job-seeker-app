import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldBeVisible = scrollTop > 200;
    setIsVisible(shouldBeVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`ScrollToTopButton ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-circle-chevron-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
