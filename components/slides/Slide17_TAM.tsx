import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';
// @ts-ignore
const { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } = window.Recharts;
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const data = [
  { name: 'Public Charging', value: 45 },
  { name: 'Commercial Fleet', value: 35 },
  { name: 'Residential', value: 20 },
];
const COLORS = ['#2dd4bf', '#0d9488', '#fb923c'];

const Slide17_TAM: React.FC<SlideProps> = ({ isActive }) => {
    const [visible, setVisible] = useState(false);
    const globalMarket = useAnimatedCounter(50, 1500, visible);
    const indiaShare = useAnimatedCounter(15, 1500, visible);

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
            <h2 className={`text-4xl font-bold text-teal-300 mb-8 text-center transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>Total Addressable Market (TAM)</h2>
            <div className="grid grid-cols-2 gap-12 flex-grow items-center">
                <div className="flex flex-col justify-center gap-8">
                    <div className={`p-4 transition-all duration-500 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <p className="text-5xl font-bold text-slate-100">$<span className="text-teal-400">{globalMarket}B</span></p>
                        <p className="text-xl text-slate-400">Global EV charging market by 2030</p>
                    </div>
                    <div className={`p-4 transition-all duration-500 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <p className="text-5xl font-bold text-slate-100">$<span className="text-teal-400">{indiaShare}B</span></p>
                        <p className="text-xl text-slate-400">India's estimated share</p>
                    </div>
                </div>
                <div className={`flex flex-col items-center transition-all duration-700 ease-out delay-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <h3 className="text-2xl font-semibold mb-4 text-slate-200">Market Segments</h3>
                    <div className="w-full h-80">
                        <ResponsiveContainer>
                            <PieChart>
                                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                                <Legend />
                                <Pie data={data} cx="50%" cy="50%" innerRadius={70} outerRadius={100} fill="#8884d8" paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} isAnimationActive={visible} animationDuration={1500}>
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

export default Slide17_TAM;