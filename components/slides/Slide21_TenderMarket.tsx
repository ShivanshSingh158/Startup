import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const ActiveStatePin: React.FC<{ top: string; left: string; delay: number, visible: boolean }> = ({ top, left, delay, visible }) => (
  <div className={`absolute transition-all duration-500 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ top, left, transitionDelay: `${delay}ms` }}>
    <div className="w-4 h-4 rounded-full bg-teal-400 border-2 border-white shadow-[0_0_15px_5px_rgba(45,212,191,0.7)] animate-pulse" />
  </div>
);


const Slide21_TenderMarket: React.FC<SlideProps> = ({ isActive }) => {
    const [visible, setVisible] = useState(false);
    const funding = useAnimatedCounter(10900, 1500, visible);

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
                <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>Government Tender Landscape</h2>
                <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-4xl font-bold text-slate-100">₹<span className="text-teal-400">{funding.toLocaleString()}</span> Cr+</p>
                    <p className="text-lg text-slate-400">Allocated under PM E-DRIVE</p>
                </div>
                <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-4xl font-bold text-slate-100">15+ States</p>
                    <p className="text-lg text-slate-400">With active policies accelerating rollout</p>
                </div>
                <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-600 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-4xl font-bold text-slate-100">Growing Pipeline</p>
                    <p className="text-lg text-slate-400">Increasing tender size and frequency</p>
                </div>
            </div>
            <div className={`w-1/2 h-full relative flex items-center justify-center transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <svg viewBox="0 0 500 550" className="w-full h-auto max-h-[500px]">
                    <path d="M410.6,275.5...Z" fill="#1e293b" />
                </svg>
                <div className="absolute inset-0">
                    <ActiveStatePin top="30%" left="35%" delay={600} visible={visible} />
                    <ActiveStatePin top="55%" left="30%" delay={700} visible={visible} />
                    <ActiveStatePin top="75%" left="40%" delay={800} visible={visible} />
                    <ActiveStatePin top="45%" left="25%" delay={900} visible={visible} />
                    <ActiveStatePin top="65%" left="75%" delay={1000} visible={visible} />
                    <ActiveStatePin top="20%" left="45%" delay={1100} visible={visible} />
                    <ActiveStatePin top="80%" left="55%" delay={1200} visible={visible} />
                </div>
            </div>
        </div>
    );
};

export default Slide21_TenderMarket;