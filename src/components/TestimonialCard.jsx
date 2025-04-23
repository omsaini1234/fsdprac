// src/components/TestimonialCard.jsx
import React from 'react';
import './TestimonialCard.css'; // Optional if you want custom styles

function TestimonialCard({ name, review }) {
  return (
    <div className="testimonial-card">
      <h3>{name}</h3>
      <p>"{review}"</p>
    </div>
  );
}

export default TestimonialCard;