import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo">TripPal</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`header ${isVisible ? 'visible' : ''}`}>
        <h1 className="title">TripPal</h1>
        <p className="tagline">Your Ultimate Travel Companion</p>
        <button className="cta-button" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </>
  );
};

export default Header;