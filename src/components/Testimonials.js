import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Travelers Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"TripPal made planning my vacation a breeze! Highly recommend!"</p>
          <h4>- Sarah J.</h4>
        </div>
        <div className="testimonial-card">
          <p>"I connected with amazing people and explored new destinations!"</p>
          <h4>- Mark L.</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
