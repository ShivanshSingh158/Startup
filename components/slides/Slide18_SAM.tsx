import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const OAndMIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 0v6m0-6L9 13M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
    </svg>
);
const TenderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const FleetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M1-1-1-1v10l2 2h8a1 1 0 001-1z" transform="translate(12, 0)"/>
    </svg>
);

const segments = [
    { icon: <OAndMIcon />, title: "Operations & Management", value: "$5B", description: "Indian O&M services market" },
    { icon: <TenderIcon />, title: "Government Tenders", value: "₹20,000+ Cr", description: "Annual tender value" },
    { icon: <FleetIcon />, title: "Corporate Fleets", value: "~$2B", description: "B2B charging demand" }
];

const Slide18_SAM: React.FC<SlideProps> = ({ isActive }) => {
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
            <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>Serviceable Available Market (SAM)</h2>
            
            <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
                {segments.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-start text-left p-6 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out ${
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${200 + index * 200}ms`, background: `linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(13, 148, 136, ${0.1 + index*0.05}))` }}
                    >
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold text-slate-100 mb-2">{item.title}</h3>
                        <p className="text-4xl font-bold text-teal-400 mb-2">{item.value}</p>
                        <p className="text-lg text-slate-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slide18_SAM;