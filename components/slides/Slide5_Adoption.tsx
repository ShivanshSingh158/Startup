
import React, { useState, useEffect } from 'react';
// Recharts is loaded from a CDN and available on the window object
// @ts-ignore
const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = window.Recharts;
import type { SlideProps } from '../../types';

const data = [
  { year: '2020', sales: 120 },
  { year: '2021', sales: 250 },
  { year: '2022', sales: 480 },
  { year: '2023', sales: 850 },
  { year: '2024', sales: 1300 },
  { year: '2025', sales: 2000 },
];

const GovernmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);
const TrendsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);


const Slide5_Adoption: React.FC<SlideProps> = ({ isActive }) => {
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
        <div className="w-full h-full flex flex-col justify-center p-12 relative">
             <div className="absolute inset-0 z-0 bg-contain bg-no-repeat bg-center opacity-5" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"white\"%3E%3Cpath d=\"M5.52,6.24,4.2,12.5H2.93L5.78,4.34H7.92l2.7,8.16H9.37L8.06,6.24,6.7,12.5H5.52ZM14,4.34h3.63v1.31H15.31v2.4h2.09V9.36h-2.09v1.85h2.32v1.29H14Zm5.2,8.16h-1.4l-2-8.16h2.15l.63,3.06.63-3.06H21.5Z\"/%3E%3C/svg%3E')"}} />
            <h2 className={`text-4xl font-bold text-teal-300 mb-8 z-10 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>Current State of EV Adoption</h2>
            <div className="grid grid-cols-2 gap-12 z-10 h-3/4">
                <div className={`flex flex-col transition-all duration-700 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
                        <span className="text-teal-400 text-5xl font-bold">49%</span> CAGR EV Sales
                    </h3>
                    <div className="flex-grow">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                <XAxis dataKey="year" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" label={{ value: 'Sales (k)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}/>
                                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                                <Line type="monotone" dataKey="sales" stroke="#2dd4bf" strokeWidth={3} dot={{ r: 5, fill: '#2dd4bf' }} activeDot={{ r: 8 }} isAnimationActive={visible} animationDuration={1500} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-8">
                    <div className={`flex items-start gap-4 transition-all duration-700 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <GovernmentIcon />
                        <div>
                            <h4 className="text-xl font-semibold text-slate-200">Policy Highlights</h4>
                            <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                                <li>FAME-II allocated <span className="font-bold text-teal-400">₹10,000 Cr</span></li>
                                <li>PM E-DRIVE adding <span className="font-bold text-teal-400">₹10,900 Cr</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`flex items-start gap-4 transition-all duration-700 ease-out delay-600 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <TrendsIcon />
                        <div>
                            <h4 className="text-xl font-semibold text-slate-200">Consumer Trends</h4>
                            <p className="text-slate-300 mt-2">
                                <span className="font-bold text-teal-400">35% increase</span> in urban EV registrations YoY
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide5_Adoption;
