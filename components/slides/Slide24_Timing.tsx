import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const Slide24_Timing: React.FC<SlideProps> = ({ isActive }) => {
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
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(45,212,191,0.2),rgba(255,255,255,0))]" />
            <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{
                background: 'radial-gradient(circle at 50% 30%, transparent 40%, #0f172a 70%)'
            }}/>
            
            <div className="z-20 flex flex-col items-center gap-12">
                <h1 
                    className={`text-6xl font-extrabold text-slate-100 transition-all duration-1000 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ textShadow: '0 4px 20px rgba(45, 212, 191, 0.5)' }}
                >
                    Why Now Is The Time
                </h1>

                <div className="flex justify-center gap-12 mt-8">
                    <div className={`flex items-center gap-4 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
                        <CheckIcon />
                        <span className="text-xl text-slate-300 font-medium">Policy tailwinds + infrastructure gaps align</span>
                    </div>
                    <div className={`flex items-center gap-4 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
                        <CheckIcon />
                        <span className="text-xl text-slate-300 font-medium">White space for asset-light ops is unfilled</span>
                    </div>
                    <div className={`flex items-center gap-4 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '900ms' }}>
                        <CheckIcon />
                        <span className="text-xl text-slate-300 font-medium">Crucial first-mover advantage</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide24_Timing;