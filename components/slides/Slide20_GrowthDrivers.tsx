import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const EVIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V8.618a1 1 0 01.553-.894L9 5l6 3m-6 12v-6m6 6l5.447-2.724A1 1 0 0021 16.382V8.618a1 1 0 00-.553-.894L15 5m0 15v-6m0 0l-6-3m6 3l6-3" />
    </svg>
);
const GovernmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);
const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const drivers = [
    { icon: <EVIcon />, title: "Explosive EV Sales", text: "Projected to hit 15 million by 2030." },
    { icon: <GovernmentIcon />, title: "Policy Tailwinds", text: "Strong subsidies and incentives accelerating adoption." },
    { icon: <LeafIcon />, title: "Sustainability Mandates", text: "Corporates pushing for green fleet solutions." }
];

const Slide20_GrowthDrivers: React.FC<SlideProps> = ({ isActive }) => {
    const [visible, setVisible] = useState(false);
    const evSales = useAnimatedCounter(15, 1500, visible);

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
            <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>Market Growth Drivers</h2>
            
            <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
                {drivers.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center text-center p-8 bg-slate-800/60 rounded-lg border border-slate-700 transition-all duration-500 ease-out animate-bounce-in ${
                            visible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${200 + index * 200}ms`}}
                    >
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold text-slate-100 mb-2">{item.title}</h3>
                        <p className="text-lg text-slate-300">
                            {item.title.includes("Sales") ? `Projected to hit ${evSales} million by 2030.` : item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slide20_GrowthDrivers;