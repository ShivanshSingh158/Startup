import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const MetroPin: React.FC<{ top: string; left: string; delay: number, visible: boolean }> = ({ top, left, delay, visible }) => (
  <div className={`absolute transition-all duration-500 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ top, left, transitionDelay: `${delay}ms` }}>
    <div className="w-4 h-4 rounded-full bg-teal-400 border-2 border-white shadow-[0_0_15px_5px_rgba(45,212,191,0.7)]" />
  </div>
);


const Slide10_GeographicInequality: React.FC<SlideProps> = ({ isActive }) => {
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
        <div className="w-full h-full flex flex-col justify-center p-12">
            <h2 className={`text-4xl font-bold text-teal-300 mb-8 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>Geographic Inequality Crisis</h2>
            <div className="grid grid-cols-2 gap-12 flex-grow items-center">
                <div className={`relative flex items-center justify-center transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                    <svg viewBox="0 0 500 550" className="w-full h-auto max-h-[500px]">
                        <defs>
                            <radialGradient id="heatmap" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" style={{stopColor: "rgba(45, 212, 191, 0.6)"}} />
                                <stop offset="40%" style={{stopColor: "rgba(251, 191, 36, 0.4)"}} />
                                <stop offset="100%" style={{stopColor: "rgba(239, 68, 68, 0.3)"}} />
                            </radialGradient>
                        </defs>
                        <path d="M410.6,275.5c-2.3-3.9-3.9-8.1-4.8-12.7c-0.9-4.5-1-9.2-0.2-13.7c0.8-4.5,2.4-8.8,4.8-12.7c1.3-2,2.8-3.9,4.4-5.7l0,0 c1.5-1.9,3.2-3.8,5-5.6l0.2-0.2c2.4-2.4,5.8-3.4,9.2-2.5c3.3,0.9,5.8,3.4,6.7,6.7c0.9,3.3-0.1,6.8-2.5,9.2l-0.2,0.2 c-1.8,1.8-3.5,3.7-5,5.6l0,0c-1.6,1.8-3.1,3.7-4.4,5.7c-2.4,3.9-4,8.2-4.8,12.7c-0.8,4.5-0.7,9.2,0.2,13.7 c0.9,4.5,2.5,8.8,4.8,12.7c1.3,2,2.8,3.9,4.4,5.7l0,0c1.5,1.9,3.2,3.8,5,5.6l0.2,0.2c2.4,2.4,3.4,5.8,2.5,9.2 c-0.9,3.3-3.4,5.8-6.7,6.7c-3.3,0.9-6.8-0.1-9.2-2.5l-0.2-0.2c-1.8-1.8-3.5-3.7-5-5.6l0,0c-1.6-1.8-3.1-3.7-4.4-5.7 C412.9,284.3,411.5,279.9,410.6,275.5z M323.5,431.5c1.3-1,2.8-1.9,4.3-2.6l0,0c1.5-0.7,3.1-1.3,4.7-1.9c4.9-1.8,9.4-4.8,13-8.8 c1.8-2,3.4-4.3,4.7-6.7c1.3-2.4,2.4-5,3.1-7.7c0.7-2.7,1.1-5.5,1.1-8.3c0-2.8-0.4-5.6-1.1-8.3c-0.7-2.7-1.8-5.3-3.1-7.7 c-1.3-2.4-2.9-4.7-4.7-6.7c-3.6-4-8.1-7-13-8.8c-1.6-0.6-3.2-1.2-4.7-1.9l0,0c-1.5-0.7-3-1.5-4.3-2.6c-2.7-2.1-6.1-2.8-9.4-1.7 c-3.3,1.1-5.7,3.8-6.3,7.2c-0.6,3.4,0.6,6.9,3.3,9.1l0.2,0.1c1.1,0.8,2.2,1.6,3.3,2.4l0,0c1,0.8,2.1,1.5,3.1,2.3 c2,1.5,3.8,3.6,4.9,5.9c0.6,1.2,1.1,2.4,1.4,3.7c0.3,1.3,0.4,2.7,0.4,4c0,1.3-0.1,2.7-0.4,4c-0.3,1.3-0.8,2.5-1.4,3.7 c-1.2,2.3-2.9,4.4-4.9,5.9c-1,0.8-2,1.5-3.1,2.3l0,0c-1.1,0.8-2.2,1.6-3.3,2.4l-0.2,0.1c-2.7,2.2-3.9,5.7-3.3,9.1 c0.6,3.4,3,6.1,6.3,7.2C317.4,434.3,320.8,433.6,323.5,431.5z M316.3,513.5l-2.6-2c-1.1-0.9-2.3-1.6-3.5-2.3l0,0 c-1.2-0.7-2.4-1.4-3.6-2.1c-3.8-2.2-7-5.4-9.2-9.2c-1.1-1.9-2-4-2.7-6.1c-0.7-2.1-1.1-4.4-1.2-6.6c-0.1-2.3,0.1-4.5,0.6-6.7 c0.5-2.2,1.2-4.3,2.2-6.3c1-2,2.2-3.9,3.6-5.6c2.8-3.4,6.6-6,11-7.4c1.5-0.5,3-0.8,4.6-1.1l0,0c1.6-0.3,3.1-0.5,4.7-0.5 c1.6,0,3.1,0.2,4.7,0.5l0,0c1.6,0.3,3.1,0.6,4.6,1.1c4.3,1.4,8.1,4,11,7.4c1.4,1.7,2.6,3.6,3.6,5.6c1,2,1.8,4.1,2.2,6.3 c0.5,2.2,0.7,4.4,0.6,6.7c-0.1,2.3-0.5,4.5-1.2,6.6c-0.7,2.1-1.6,4.2-2.7,6.1c-2.2,3.8-5.4,7-9.2,9.2c-1.2,0.7-2.4,1.4-3.6,2.1 l0,0c-1.2,0.7-2.4,1.5-3.5,2.3l-2.6,2c-2.4,1.9-5.6,2.4-8.6,1.3c-3-1.1-5.3-3.6-6.1-6.7C310.2,519,311.2,515.7,313.7,513.5z M224,197.8c-2.3-0.3-4.6-0.4-6.9-0.4c-2.3,0-4.6,0.1-6.9,0.4c-4.6,0.5-9,1.6-13,3.3c-2,0.8-3.9,1.9-5.7,3.1c-1.8,1.2-3.5,2.7-5.1,4.3 c-3.2,3.3-5.6,7.5-6.8,12.2c-0.6,2.4-1,4.8-1,7.3c0,2.5,0.3,5,1,7.3c1.2,4.7,3.6,8.9,6.8,12.2c1.6,1.6,3.3,3.1,5.1,4.3 c1.8,1.2,3.7,2.3,5.7,3.1c4,1.7,8.4,2.7,13,3.3c2.3,0.3,4.6,0.4,6.9,0.4c2.3,0,4.6-0.1,6.9-0.4c4.6-0.5,9-1.6,13-3.3 c2-0.8,3.9-1.9,5.7-3.1c1.8-1.2,3.5-2.7,5.1-4.3c3.2-3.3,5.6-7.5,6.8-12.2c0.6-2.4,1-4.8,1-7.3c0-2.5-0.3-5-1-7.3 c-1.2-4.7-3.6-8.9-6.8-12.2c-1.6-1.6-3.3-3.1-5.1-4.3c-1.8-1.2-3.7-2.3-5.7-3.1C233,199.4,228.6,198.3,224,197.8z M193.2,126.3 c-2.1-1.3-4.4-2.3-6.8-3.1c-2.4-0.8-4.9-1.2-7.4-1.3c-2.5-0.1-5.1,0.1-7.5,0.6c-2.4,0.5-4.8,1.3-7,2.4c-2.2,1.1-4.3,2.5-6.2,4.1 c-1.9,1.6-3.6,3.5-5.1,5.5c-3,4.1-4.7,9-4.8,14.2c0,2.6,0.3,5.2,1,7.7c0.7,2.5,1.7,4.9,3,7.1c1.3,2.2,2.9,4.3,4.7,6.1 c3.7,3.6,8.3,6.1,13.5,7.1c2.6,0.5,5.2,0.8,7.9,0.8c2.6,0,5.3-0.3,7.9-0.8c5.2-1,9.8-3.5,13.5-7.1c1.8-1.8,3.4-3.8,4.7-6.1 c1.3-2.2,2.3-4.6,3-7.1c0.7-2.5,1-5.1,1-7.7c-0.1-5.2-1.8-10.1-4.8-14.2c-1.5-2-3.2-3.9-5.1-5.5C197.5,128.8,195.4,127.4,193.2,126.3z M299,22.7c-0.2-1.2-0.5-2.3-0.8-3.4c-0.8-2.6-2-5-3.8-7.1c-1.7-2.1-3.8-3.8-6.1-5.1c-2.3-1.3-4.8-2.2-7.4-2.7 c-2.6-0.5-5.3-0.6-7.9-0.3c-2.6,0.3-5.2,1-7.6,2.1c-2.4,1.1-4.6,2.6-6.6,4.4c-2,1.8-3.7,4-5,6.4c-1.3,2.4-2.2,5-2.7,7.7 c-0.5,2.7-0.5,5.4-0.1,8.1c0.4,2.7,1.2,5.3,2.5,7.7c1.3,2.4,2.9,4.6,4.9,6.5c3.9,3.8,8.8,6.2,14.1,6.9c2.7,0.4,5.3,0.5,8,0.4 c2.6-0.1,5.2-0.6,7.7-1.4c2.5-0.8,4.8-2,7-3.6c2.2-1.6,4.1-3.5,5.7-5.7c3.2-4.4,4.9-9.8,4.8-15.3c-0.1-2.7-0.6-5.4-1.4-8 C300.9,26.4,300.1,24.5,299,22.7z M125.7,301.2c0.2-2.1,0.3-4.1,0.3-6.2c0-2.1-0.1-4.1-0.3-6.2c-0.4-4-1.3-7.9-2.8-11.6 c-0.7-1.8-1.7-3.6-2.8-5.2c-1.1-1.6-2.4-3.1-3.8-4.5c-2.9-2.8-6.4-4.9-10.4-6c-2-0.6-4-1-6.1-1.2c-2.1-0.2-4.2-0.2-6.3,0 c-2.1,0.2-4.1,0.6-6.1,1.2c-4,1.2-7.5,3.2-10.4,6c-1.4,1.3-2.7,2.8-3.8,4.5c-1.1,1.6-2,3.4-2.8,5.2c-1.5,3.7-2.4,7.6-2.8,11.6 c-0.2,2.1-0.3,4.1-0.3,6.2c0,2.1,0.1,4.1,0.3,6.2c0.4,4,1.3,7.9,2.8,11.6c0.7,1.8,1.7,3.6,2.8,5.2c1.1,1.6,2.4,3.1,3.8,4.5 c2.9,2.8,6.4,4.9,10.4,6c2,0.6,4,1,6.1,1.2c2.1,0.2,4.2,0.2,6.3,0c2.1-0.2,4.1-0.6,6.1-1.2c4-1.2,7.5-3.2,10.4-6 c1.4-1.3,2.7-2.8,3.8-4.5c1.1-1.6,2-3.4,2.8-5.2C124.4,309.1,125.3,305.2,125.7,301.2z" fill="url(#heatmap)" />
                    </svg>
                    <div className="absolute inset-0">
                        <MetroPin top="30%" left="35%" delay={600} visible={visible} />
                        <MetroPin top="55%" left="30%" delay={700} visible={visible} />
                        <MetroPin top="75%" left="40%" delay={800} visible={visible} />
                        <MetroPin top="73%" left="45%" delay={900} visible={visible} />
                        <MetroPin top="55%" left="80%" delay={1000} visible={visible} />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-6">
                    <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <p className="text-4xl font-bold text-slate-100">10:<span className="text-red-400">1</span></p>
                        <p className="text-lg text-slate-400">Metro to non-metro charger density ratio</p>
                    </div>
                    <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <p className="text-4xl font-bold text-slate-100">150-200<span className="text-2xl">km</span></p>
                        <p className="text-lg text-slate-400">Highway corridor gaps (vs. ideal 60-80km)</p>
                    </div>
                    <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-600 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <p className="text-4xl font-bold text-slate-100">5 Cities, <span className="text-teal-400">60%</span> Chargers</p>
                        <p className="text-lg text-slate-400">Extreme concentration of infrastructure</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide10_GeographicInequality;