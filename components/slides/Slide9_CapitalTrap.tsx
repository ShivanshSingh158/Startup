import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const CoinsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v.01M12 18v-1.217A2.003 2.003 0 0013.217 15H15M12 18h-1.217A2.003 2.003 0 019 15.783V15m0 0H6.783A2.003 2.003 0 015 13.217V12m14 0v1.217A2.003 2.003 0 0117.217 15H15" />
    </svg>
);
const TimelineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const WarningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);


const Slide9_CapitalTrap: React.FC<SlideProps> = ({ isActive }) => {
    const [visible, setVisible] = useState(false);
    const failureRate = useAnimatedCounter(70, 1500, visible);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => setVisible(true), 100);
            return () => clearTimeout(timer);
        } else {
            setVisible(false);
        }
    }, [isActive]);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-12 relative overflow-hidden">
            <div className={`absolute inset-0 z-0 bg-radial-gradient-t from-red-900/40 via-transparent to-transparent transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full animate-soft-glow transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`} />

            <h2 className={`text-4xl font-bold text-red-300 mb-12 z-10 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>The Capital Trap Problem</h2>
            
            <div className="grid grid-cols-3 gap-8 w-full max-w-6xl z-10">
                <div className={`flex flex-col items-center text-center p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                    <CoinsIcon />
                    <p className="text-3xl font-bold text-slate-100 mt-4">₹8–12L</p>
                    <p className="text-lg text-slate-300">Traditional setup cost</p>
                </div>
                <div className={`flex flex-col items-center text-center p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                    <TimelineIcon />
                    <p className="text-3xl font-bold text-slate-100 mt-4">3–4 years</p>
                    <p className="text-lg text-slate-300">ROI timeline</p>
                </div>
                <div className={`flex flex-col items-center text-center p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                    <WarningIcon />
                    <p className="text-3xl font-bold text-slate-100 mt-4"><span className="text-red-400">{failureRate}%</span></p>
                    <p className="text-lg text-slate-300">Failure rate in Tier-II</p>
                </div>
            </div>
        </div>
    );
};

export default Slide9_CapitalTrap;