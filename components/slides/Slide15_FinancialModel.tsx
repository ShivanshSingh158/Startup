import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';
// @ts-ignore
const { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } = window.Recharts;
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const data = [
  { name: 'Operating Costs', value: 93 },
  { name: 'EBITDA Margin', value: 7 },
];
const COLORS = ['#be123c', '#14b8a6'];

const Seesaw: React.FC<{ visible: boolean }> = ({ visible }) => (
    <svg viewBox="0 0 200 100" className="w-full h-auto max-h-64">
        {/* Base */}
        <polygon points="90,90 110,90 100,70" fill="#475569" />
        
        {/* Beam */}
        <g className={`transition-transform duration-1000 ease-in-out ${visible ? 'rotate-[-8deg]' : ''}`} style={{ transformOrigin: '100px 80px' }}>
            <rect x="10" y="65" width="180" height="10" rx="5" fill="#64748b" />
            
            {/* Revenue Block */}
            <rect x="15" y="35" width="50" height="30" fill="#14b8a6" />
            <text x="40" y="55" textAnchor="middle" fill="white" fontSize="10">Revenue</text>
            <text x="40" y="28" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">₹4.1L</text>
            
            {/* Costs Block */}
            <rect x="135" y="15" width="50" height="50" fill="#be123c" />
            <text x="160" y="45" textAnchor="middle" fill="white" fontSize="10">Costs</text>
             <text x="160" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">₹3.8L</text>
        </g>
    </svg>
);


const Slide15_FinancialModel: React.FC<SlideProps> = ({ isActive }) => {
    const [visible, setVisible] = useState(false);
    const ebitdaMargin = useAnimatedCounter(7, 1500, visible);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => setVisible(true), 100);
            return () => clearTimeout(timer);
        } else {
            setVisible(false);
        }
    }, [isActive]);

    return (
        <div className="w-full h-full flex flex-col justify-center p-12">
            <h2 className={`text-4xl font-bold text-teal-300 mb-8 text-center transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>Why Current Models Fail</h2>
            <div className="grid grid-cols-2 gap-12 flex-grow items-center">
                <div className={`transition-all duration-700 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <h3 className="text-2xl font-semibold text-center mb-4 text-slate-200">High OpEx, Low Margins</h3>
                    <Seesaw visible={visible} />
                </div>
                <div className={`flex flex-col items-center transition-all duration-700 ease-out delay-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
                        EBITDA Margin ~<span className="text-red-400 text-5xl font-bold">{ebitdaMargin}%</span>
                    </h3>
                    <div className="w-full h-64">
                        <ResponsiveContainer>
                            <PieChart>
                                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                                <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value" isAnimationActive={visible} animationDuration={1500}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide15_FinancialModel;