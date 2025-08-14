import React, { useState, useEffect } from 'react';
// @ts-ignore
const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } = window.Recharts;
import type { SlideProps } from '../../types';

const data = [
  { year: '2025', revenue: 5, share: 0.1 },
  { year: '2026', revenue: 50, share: 0.8 },
  { year: '2027', revenue: 200, share: 3 },
  { year: '2028', revenue: 500, share: 6 },
  { year: '2029', revenue: 900, share: 9 },
  { year: '2030', revenue: 1500, share: 12 },
];

const Slide19_SOM: React.FC<SlideProps> = ({ isActive }) => {
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
            <div className="w-2/5 flex flex-col gap-6">
                <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>Realistic Market Capture (SOM)</h2>
                <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-5xl font-bold text-teal-400">$1.5B</p>
                    <p className="text-lg text-slate-400">Market Target by 2030 (~12% share)</p>
                </div>
                <div className={`p-4 transition-all duration-500 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-lg text-slate-300">
                       Our growth is driven by key milestones in government tenders, corporate partnerships, and geographic expansion.
                    </p>
                </div>
            </div>
            <div className={`w-3/5 h-full pt-16 transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="year" stroke="#94a3b8" />
                        <YAxis yAxisId="left" stroke="#94a3b8" label={{ value: 'Revenue ($M)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
                        <YAxis yAxisId="right" orientation="right" stroke="#fb923c" label={{ value: 'Share %', angle: 90, position: 'insideRight', fill: '#fb923c' }} />
                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                        <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#2dd4bf" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} isAnimationActive={visible} animationDuration={2000} />
                        <Line yAxisId="right" type="monotone" dataKey="share" stroke="#fb923c" strokeWidth={2} strokeDasharray="5 5" isAnimationActive={visible} animationDuration={2000} animationDelay={500} />
                         {data.map((entry, index) => (
                           <ReferenceDot key={`dot-${index}`} yAxisId="left" x={entry.year} y={entry.revenue} r={8} fill="#2dd4bf" stroke="white" isFront={true} />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Slide19_SOM;