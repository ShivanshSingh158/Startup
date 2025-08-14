import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const TargetPin: React.FC<{ top: string; left: string; delay: number; visible: boolean, isCity: boolean }> = ({ top, left, delay, visible, isCity }) => (
    <div className={`absolute transition-all duration-500 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ top, left, transitionDelay: `${delay}ms` }}>
        {isCity ? (
            <div className="w-4 h-4 rounded-full bg-amber-400 border-2 border-white shadow-[0_0_15px_5px_rgba(251,191,36,0.7)]" />
        ) : (
             <div className="w-4 h-4 bg-sky-400 border-2 border-white shadow-[0_0_15px_5px_rgba(56,189,248,0.7)]" />
        )}
    </div>
);


const Slide23_ExpansionStrategy: React.FC<SlideProps> = ({ isActive }) => {
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
        <div className="w-full h-full flex items-center justify-between p-12">
            <div className="w-1/2 flex flex-col gap-6">
                <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>Geographic Growth Focus</h2>
                
                <div className={`flex items-center gap-4 transition-all duration-500 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <div className="w-6 h-6 rounded-full bg-amber-400" />
                    <p className="text-xl text-slate-300">Target Tier-II/III cities for initial adoption</p>
                </div>
                <div className={`flex items-center gap-4 transition-all duration-500 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                     <div className="w-6 h-6 bg-sky-400" />
                    <p className="text-xl text-slate-300">Develop key highway corridors as priority zones</p>
                </div>
                <div className={`flex items-center gap-4 transition-all duration-500 ease-out delay-600 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                     <div className="w-6 h-6 flex items-center justify-center text-black font-bold bg-slate-300">🌏</div>
                    <p className="text-xl text-slate-300">Explore potential Southeast Asia expansion post-2028</p>
                </div>
            </div>
            <div className={`w-1/2 h-full relative flex items-center justify-center transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <svg viewBox="0 0 500 550" className="w-full h-auto max-h-[500px]">
                    <path d="M410.6,275.5...Z" fill="#1e293b" />
                </svg>
                <div className="absolute inset-0">
                    <TargetPin top="40%" left="40%" delay={600} visible={visible} isCity={true} />
                    <TargetPin top="60%" left="60%" delay={700} visible={visible} isCity={true}/>
                    <TargetPin top="25%" left="55%" delay={800} visible={visible} isCity={true}/>
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M 180 150 L 380 250" stroke="#38bdf8" strokeWidth="4" fill="none" className={visible ? 'draw-line-animation' : ''} style={{animationDelay: '1000ms'}} />
                        <path d="M 180 150 Q 250 250 200 350" stroke="#38bdf8" strokeWidth="4" fill="none" className={visible ? 'draw-line-animation' : ''} style={{animationDelay: '1200ms'}} />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Slide23_ExpansionStrategy;