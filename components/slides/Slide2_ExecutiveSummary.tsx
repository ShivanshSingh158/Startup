
import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const MarketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);
const CapexIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v.01M12 18v-1.217A2.003 2.003 0 0013.217 15H15M12 18h-1.217A2.003 2.003 0 019 15.783V15m0 0H6.783A2.003 2.003 0 015 13.217V12m14 0v1.217A2.003 2.003 0 0117.217 15H15" />
    </svg>
);
const UptimeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const MaintenanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 0v6m0-6L9 13M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
    </svg>
);

const highlights = [
  { icon: <MarketIcon />, text: "$50B TAM by 2030" },
  { icon: <CapexIcon />, text: "Zero CAPEX for partners" },
  { icon: <UptimeIcon />, text: "99% uptime guarantee" },
  { icon: <MaintenanceIcon />, text: "Predictive maintenance AI" },
];

const Slide2_ExecutiveSummary: React.FC<SlideProps> = ({ isActive }) => {
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
        <div className="w-full h-full flex flex-col justify-center items-center p-12 gap-8">
            <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>Executive Summary</h2>
            <p className={`text-xl max-w-4xl text-center text-slate-300 transition-all duration-700 delay-200 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                “ChargeBridge Operations powers EV charging networks via technology and services—no asset ownership required. We win tenders, optimize uptime, and share revenue, capturing a <span className="font-bold text-teal-400">$1.5B</span> serviceable market by 2030.”
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full max-w-5xl">
                {highlights.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-start text-center p-4 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${200 + index * 150}ms` }}
                    >
                        <div className="mb-3">{item.icon}</div>
                        <p className="text-lg font-semibold text-slate-200">{item.text.split(' ').map(word => word.startsWith('$') || word.startsWith('99%') ? <span key={word} className="text-teal-400">{word} </span> : `${word} `)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slide2_ExecutiveSummary;
