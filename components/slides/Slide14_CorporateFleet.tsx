import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const FleetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M1-1-1-1v10l2 2h8a1 1 0 001-1z" transform="translate(12, 0)"/>
    </svg>
);
const IntegrationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16H5a2 2 0 01-2-2V8a2 2 0 012-2h2v4l4 4h2" />
    </svg>
);
const CostIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v.01M12 18v-1.217A2.003 2.003 0 0013.217 15H15M12 18h-1.217A2.003 2.003 0 019 15.783V15m0 0H6.783A2.003 2.003 0 015 13.217V12m14 0v1.217A2.003 2.003 0 0117.217 15H15" />
    </svg>
);

const Slide14_CorporateFleet: React.FC<SlideProps> = ({ isActive }) => {
    const [visible, setVisible] = useState(false);
    const downtimeCost = useAnimatedCounter(15000, 1500, visible);

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
            <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>Fleet Electrification Roadblocks</h2>
            
            <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
                <div className={`flex flex-col items-center text-center p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                    <FleetIcon />
                    <h3 className="text-xl font-semibold text-slate-100 my-2">Workplace Charging</h3>
                    <p className="text-lg text-slate-300">Complexities in parking, billing, and load management.</p>
                </div>
                <div className={`flex flex-col items-center text-center p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                    <IntegrationIcon />
                    <h3 className="text-xl font-semibold text-slate-100 my-2">System Integration</h3>
                    <p className="text-lg text-slate-300">Flawed integrations with existing fleet management software.</p>
                </div>
                <div className={`flex flex-col items-center text-center p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                    <CostIcon />
                    <h3 className="text-xl font-semibold text-slate-100 my-2">Downtime Cost</h3>
                    <p className="text-lg text-slate-300">
                        <span className="font-bold text-red-400 text-2xl">₹{downtimeCost.toLocaleString()}</span>
                        <br/>per vehicle per month
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide14_CorporateFleet;