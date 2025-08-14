import React, { useState, useEffect } from 'react';
// @ts-ignore
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = window.Recharts;
import type { SlideProps } from '../../types';

const data = [
  { name: '2023', 'B2B Demand': 400 },
  { name: '2024', 'B2B Demand': 900 },
  { name: '2025', 'B2B Demand': 1800 },
];

const customerProfiles = [
    { name: 'Logistics', icon: '🚚' },
    { name: 'Delivery', icon: '📦' },
    { name: 'Ride-Hailing', icon: '🚕' },
];

const Slide22_CorporateMarket: React.FC<SlideProps> = ({ isActive }) => {
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
            <div className={`w-3/5 h-full pt-16 transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-2xl font-semibold mb-4 text-slate-200 text-center">Sharp Increase in B2B Charging Demand</h3>
                <ResponsiveContainer width="100%" height="80%">
                    <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} cursor={{fill: 'rgba(45, 212, 191, 0.2)'}} />
                        <Bar dataKey="B2B Demand" fill="#2dd4bf" isAnimationActive={visible} animationDuration={1500} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="w-2/5 flex flex-col gap-6 pl-8">
                <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>Corporate EV Charging Demand</h2>
                <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <h4 className="text-xl font-semibold text-slate-200">Key Customer Profiles</h4>
                    <div className="flex justify-around mt-4">
                    {customerProfiles.map((profile, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <span className="text-4xl">{profile.icon}</span>
                            <span className="text-slate-300">{profile.name}</span>
                        </div>
                    ))}
                    </div>
                </div>
                 <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <p className="text-lg text-slate-300">
                       <span className="font-bold text-teal-400">Electrification mandates</span> in key industries are driving rapid B2B adoption and creating urgent demand for reliable charging partners.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide22_CorporateMarket;