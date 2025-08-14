import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const Hotspot: React.FC<{ top: string; left: string; delay: number; visible: boolean }> = ({ top, left, delay, visible }) => (
    <div className={`absolute w-5 h-5 transition-all duration-500 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ top, left, transitionDelay: `${delay}ms` }}>
        <div className="w-full h-full rounded-full bg-amber-400 animate-ping" />
        <div className="absolute inset-0 w-full h-full rounded-full bg-amber-400 border-2 border-white" />
    </div>
);

const Slide16_OpportunityGap: React.FC<SlideProps> = ({ isActive }) => {
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
        <div className="w-full h-full flex items-center justify-between p-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 to-transparent">
            <div className="w-1/2 flex flex-col gap-6">
                <h2 className={`text-4xl font-bold text-amber-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>White Space Market Opportunities</h2>
                
                <div className={`p-4 transition-all duration-500 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-3xl font-bold text-slate-100">600+</p>
                    <p className="text-lg text-slate-400">Underserved Tier-II/III cities</p>
                </div>
                <div className={`p-4 transition-all duration-500 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-3xl font-bold text-slate-100">7,500+ km</p>
                    <p className="text-lg text-slate-400">of highway with no charging infrastructure</p>
                </div>
                <div className={`p-4 transition-all duration-500 ease-out delay-600 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-3xl font-bold text-amber-400">ZERO</p>
                    <p className="text-lg text-slate-400">Pure-play asset-light operations specialists in market</p>
                </div>
            </div>
            <div className={`w-1/2 h-full relative flex items-center justify-center transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <svg viewBox="0 0 500 550" className="w-full h-auto max-h-[500px]">
                    <path d="M410.6,275.5...Z" fill="#1e293b" />
                </svg>
                <div className="absolute inset-0">
                    {/* Tier II/III Cities */}
                    <Hotspot top="40%" left="40%" delay={600} visible={visible} />
                    <Hotspot top="60%" left="60%" delay={700} visible={visible} />
                    <Hotspot top="25%" left="55%" delay={800} visible={visible} />
                    <Hotspot top="70%" left="25%" delay={900} visible={visible} />
                    <Hotspot top="50%" left="75%" delay={1000} visible={visible} />
                    {/* Highways */}
                     <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M 180 150 Q 250 250 200 350" stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="10 5" className={visible ? 'draw-line-animation' : ''} style={{animationDelay: '1200ms'}} />
                        <path d="M 380 250 Q 300 350 300 450" stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="10 5" className={visible ? 'draw-line-animation' : ''} style={{animationDelay: '1400ms'}} />
                     </svg>
                </div>
            </div>
        </div>
    );
};

export default Slide16_OpportunityGap;