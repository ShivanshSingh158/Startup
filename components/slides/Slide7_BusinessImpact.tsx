
import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const FleetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M1-1-1-1v10l2 2h8a1 1 0 001-1z" transform="translate(12, 0)"/>
    </svg>
);
const GovernmentBuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);
const InvestorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const impacts = [
    { icon: <FleetIcon />, title: "Corporate Fleets", text: "Downtime → increased costs" },
    { icon: <GovernmentBuildingIcon />, title: "Government Agencies", text: "Tender failures due to poor ops" },
    { icon: <InvestorIcon />, title: "Investors", text: "High capex → low ROI" }
];

const Slide7_BusinessImpact: React.FC<SlideProps> = ({ isActive }) => {
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
        <div className="w-full h-full flex flex-col justify-center items-center p-12 gap-10">
            <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>What This Means for Businesses</h2>
            
            <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
                {impacts.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center text-center p-8 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${200 + index * 200}ms` }}
                    >
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold text-slate-100 mb-2">{item.title}</h3>
                        <p className="text-lg text-slate-300">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className={`mt-8 text-3xl font-semibold text-slate-200 relative transition-opacity duration-700 ease-out delay-[1000ms] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <p>“Operations, not assets, decides success.”</p>
                <span className={`absolute bottom-0 left-0 h-1 bg-teal-400 mt-2 ${visible ? 'animate-underline' : ''}`} style={{animationDelay: '1200ms'}} />
            </div>
        </div>
    );
};

export default Slide7_BusinessImpact;
