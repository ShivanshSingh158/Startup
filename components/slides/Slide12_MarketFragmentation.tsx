import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const AppIcon: React.FC<{ icon: string, position: {top: string, left: string}, delay: number, visible: boolean }> = ({ icon, position, delay, visible }) => (
    <div
        className={`absolute w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center text-2xl font-bold text-teal-300 shadow-lg transition-all duration-700 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{ top: position.top, left: position.left, transitionDelay: `${delay}ms` }}
    >
        {icon}
    </div>
);

const positions = [
    { top: '10%', left: '20%' }, { top: '25%', left: '75%' }, { top: '60%', left: '10%' },
    { top: '70%', left: '85%' }, { top: '40%', left: '45%' }, { top: '80%', left: '50%' },
    { top: '5%', left: '60%' }, { top: '50%', left: '0%' },
];

const Slide12_MarketFragmentation: React.FC<SlideProps> = ({ isActive }) => {
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
            <div className="w-1/2 flex flex-col gap-6">
                <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>The App Chaos Problem</h2>
                <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-3xl font-bold text-slate-100">15+</p>
                    <p className="text-lg text-slate-400">Operators, no unified platform</p>
                </div>
                <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-3xl font-bold text-slate-100">3-5 Apps</p>
                    <p className="text-lg text-slate-400">Juggled by the average EV user</p>
                </div>
                <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-600 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-3xl font-bold text-red-400">0%</p>
                    <p className="text-lg text-slate-400">True network interoperability</p>
                </div>
            </div>
            <div className="w-1/2 h-full relative">
                {['C', 'E', 'Z', 'P', 'V', 'T', 'B', 'S'].map((icon, index) => (
                    <AppIcon key={index} icon={icon} position={positions[index]} delay={200 + index * 100} visible={visible} />
                ))}
            </div>
        </div>
    );
};

export default Slide12_MarketFragmentation;