import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const GlitchChargerIcon = ({isActive}: {isActive: boolean}) => (
    <div className="relative h-12 w-12 text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" className={`absolute inset-0 ${isActive ? 'animate-glitch' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{animationDelay: '0.1s'}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4zM5 18L19 6" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className={`absolute inset-0 text-cyan-400 ${isActive ? 'animate-glitch' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{animationDelay: '0.2s', mixBlendMode: 'screen'}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4zM5 18L19 6" />
        </svg>
    </div>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PaymentFailureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9l-5 5-5-5" />
    </svg>
);


const Slide11_OperationalFailures: React.FC<SlideProps> = ({ isActive }) => {
    const [visible, setVisible] = useState(false);
    const downtime = useAnimatedCounter(40, 1500, visible);
    const paymentFailure = useAnimatedCounter(25, 1500, visible);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => setVisible(true), 100);
            return () => clearTimeout(timer);
        } else {
            setVisible(false);
        }
    }, [isActive]);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-12 gap-10">
            <h2 className={`text-4xl font-bold text-red-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>System Breakdown Reality</h2>
            
            <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
                <div className={`flex flex-col items-center text-center p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                    <GlitchChargerIcon isActive={visible} />
                    <p className="text-3xl font-bold text-slate-100 mt-4"><span className="text-red-400">30-{downtime}%</span></p>
                    <p className="text-lg text-slate-300">Average station downtime</p>
                </div>
                <div className={`flex flex-col items-center text-center p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                    <ClockIcon />
                    <p className="text-3xl font-bold text-slate-100 mt-4">48-72 hrs</p>
                    <p className="text-lg text-slate-300">Typical maintenance delays</p>
                </div>
                <div className={`flex flex-col items-center text-center p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                    <PaymentFailureIcon />
                    <p className="text-3xl font-bold text-slate-100 mt-4"><span className="text-red-400">{paymentFailure}%</span></p>
                    <p className="text-lg text-slate-300">Payment transaction failure rate</p>
                </div>
            </div>
        </div>
    );
};

export default Slide11_OperationalFailures;