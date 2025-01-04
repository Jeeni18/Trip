import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Plan Your Trip</h3>
          <p>Seamlessly organize your travels with personalized itineraries.</p>
        </div>
        <div className="feature-card">
          <h3>Explore Destinations</h3>
          <p>Find the best places to visit with recommendations and reviews.</p>
        </div>
        <div className="feature-card">
          <h3>Connect with Travelers</h3>
          <p>Meet and share experiences with fellow travelers.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
