import React, { useEffect, useState } from 'react';
import './Flower.css'; // Import the styles for the flower animation

const Flower = ({ balance }) => {
  const [size, setSize] = useState(1);

  // Update flower size based on balance
  useEffect(() => {
    if (balance > 80000000) {
      setSize(2); // Grow flower if balance is high
      console.log('grow');
    } else if (balance > 40000000) {
      setSize(1.5); // Slight growth
      console.log('slight g');
    } else if (balance > 0) {
      setSize(1); // Normal size
      console.log('normal');
    } else if (balance === 0) {
      setSize(0.8); // Slightly wilted
      console.log('slight w');
    } else {
      setSize(0.5); // Completely wilted if balance is negative
      console.log('wilted');
    }
  }, [balance]);

  return (
    <div className="flower-container">
      <svg
        className="flower"
        style={{ transform: `scale(${size})`, transition: 'transform 0.5s ease' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="150"
        height="150"
      >
        <circle cx="50" cy="50" r="40" fill="#ffcc00" />
        <path
          d="M50 10 Q60 30 50 50 Q40 30 50 10 Z" // Petal shapes
          fill="#ff6666"
        />
        <path
          d="M50 10 Q40 30 50 50 Q60 30 50 10 Z"
          fill="#ff6666"
        />
        <path
          d="M50 10 Q30 30 50 50 Q70 30 50 10 Z"
          fill="#ff6666"
        />
        <path
          d="M50 10 Q70 30 50 50 Q30 30 50 10 Z"
          fill="#ff6666"
        />
        <circle cx="50" cy="50" r="8" fill="#663300" /> {/* Flower center */}
      </svg>
    </div>
  );
};

export default Flower;
