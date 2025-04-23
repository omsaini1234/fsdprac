// src/App.jsx
import React from 'react';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <TestimonialCard
        name="Emily Watson"
        review="This service was amazing! Highly recommended."
      />
      <TestimonialCard
        name="John Doe"
        review="Fast, friendly, and reliable. Great experience!"
      />
    </div>
  );
}

export default App;