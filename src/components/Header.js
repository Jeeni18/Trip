import React from 'react';
import './Header.css';

const Header = ({ onGetStarted }) => {
  return (
    <div className="header">
      <h1 className="title">TripPal</h1>
      <p className="tagline">Your Ultimate Travel Companion</p>
      <button className="cta-button" onClick={onGetStarted}>Get Started</button>
    </div>
  );
};

export default Header;
