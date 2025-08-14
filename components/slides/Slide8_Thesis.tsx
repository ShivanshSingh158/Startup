
import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const ScaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);
const TechIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);
const PartnershipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const points = [
    { icon: <ScaleIcon />, text: "Asset-light = Rapid scale" },
    { icon: <TechIcon />, text: "Tech-driven = Higher uptime" },
    { icon: <PartnershipIcon />, text: "Partnership-first = Lower risk" }
];

const Slide8_Thesis: React.FC<SlideProps> = ({ isActive }) => {
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
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
            
            <div className="z-10 flex flex-col items-center gap-12">
                <h1 
                    className={`text-6xl font-extrabold text-slate-100 transition-all duration-1000 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
                >
                    “The future belongs to operations, not assets.”
                </h1>

                <div className="flex justify-center gap-12 mt-8">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${500 + index * 200}ms` }}
                        >
                            {point.icon}
                            <span className="text-xl text-slate-300 font-medium">{point.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slide8_Thesis;
