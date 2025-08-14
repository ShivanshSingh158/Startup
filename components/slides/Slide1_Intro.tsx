
import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';
import ChargeBridgeLogo from '../icons/ChargeBridgeLogo';

const Slide1_Intro: React.FC<SlideProps> = ({ isActive }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isActive]);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] animate-pulse-grid" />
      
      <div className="z-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <div
          className={`transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <ChargeBridgeLogo className="w-96 h-auto" />
        </div>

        {/* Tagline */}
        <p
          className={`text-slate-300 text-2xl transition-all duration-1000 ease-out delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Asset-Light EV Charging Management Platform
        </p>
        
        {/* Vision Statement */}
        <h1
          className={`text-4xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-400 transition-all duration-1000 ease-out delay-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ textShadow: '0 0 15px rgba(45, 212, 191, 0.3)' }}
        >
          “Transforming India’s EV Charging Future through Smarter Operations”
        </h1>
      </div>

      <p className={`absolute bottom-8 text-slate-500 text-lg transition-opacity duration-1000 delay-[1500ms] ${visible ? 'opacity-100' : 'opacity-0'}`}>
        Created by Shivansh Singh
      </p>
    </div>
  );
};

export default Slide1_Intro;
