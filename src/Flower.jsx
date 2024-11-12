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
  {/* Flower center */}
  <circle cx="50" cy="50" r="10" fill="#ffcc00" />

  {/* Petals - placed symmetrically around the flower center */}
  <g transform="translate(50,50)">
    <g transform="rotate(0)">
      <path
        d="M0,-30 Q10,-40 20,-30 Q10,-20 0,-30 Z"
        fill="#ff6666"
      />
    </g>
    <g transform="rotate(45)">
      <path
        d="M0,-30 Q10,-40 20,-30 Q10,-20 0,-30 Z"
        fill="#ff6666"
      />
    </g>
    <g transform="rotate(90)">
      <path
        d="M0,-30 Q10,-40 20,-30 Q10,-20 0,-30 Z"
        fill="#ff6666"
      />
    </g>
    <g transform="rotate(135)">
      <path
        d="M0,-30 Q10,-40 20,-30 Q10,-20 0,-30 Z"
        fill="#ff6666"
      />
    </g>
    <g transform="rotate(180)">
      <path
        d="M0,-30 Q10,-40 20,-30 Q10,-20 0,-30 Z"
        fill="#ff6666"
      />
    </g>
    <g transform="rotate(225)">
      <path
        d="M0,-30 Q10,-40 20,-30 Q10,-20 0,-30 Z"
        fill="#ff6666"
      />
    </g>
    <g transform="rotate(270)">
      <path
        d="M0,-30 Q10,-40 20,-30 Q10,-20 0,-30 Z"
        fill="#ff6666"
      />
    </g>
    <g transform="rotate(315)">
      <path
        d="M0,-30 Q10,-40 20,-30 Q10,-20 0,-30 Z"
        fill="#ff6666"
      />
    </g>
  </g>
</svg>



  </div>

  );
};

export default Flower;
