
import React from 'react';

const ChargeBridgeLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 200 50"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="ChargeBridge Logo"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#2dd4bf', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0d9488', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    {/* Icon Part */}
    <path
      d="M 10 15 L 20 25 L 10 35 L 20 25 Z M 30 15 L 20 25 L 30 35 L 20 25 Z"
      fill="url(#logoGradient)"
    />
    <path d="M 20 25 L 40 25" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" />
    
    {/* Text Part */}
    <text
      x="50"
      y="35"
      fontFamily="sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="#e2e8f0"
    >
      ChargeBridge
    </text>
  </svg>
);

export default ChargeBridgeLogo;
