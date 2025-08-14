import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const GovernmentBuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const FunnelIcon: React.FC<{ visible: boolean }> = ({ visible }) => (
    <svg className="w-64 h-64" viewBox="0 0 100 100">
        <path d="M 10 10 L 90 10 L 60 70 L 40 70 Z" fill="rgba(45, 212, 191, 0.2)" stroke="#2dd4bf" strokeWidth="2" />
        <path d="M 40 70 L 45 90 L 55 90 L 60 70 Z" fill="rgba(45, 212, 191, 0.2)" stroke="#2dd4bf" strokeWidth="2" />
        
        {/* Falling dots */}
        <circle cx="50" cy="20" r="3" fill="#f59e0b" className={`transition-transform duration-[1500ms] ease-in ${visible ? 'translate-y-[70px]' : ''}`} style={{ transitionDelay: '300ms' }} />
        <circle cx="30" cy="20" r="3" fill="#f59e0b" className={`transition-transform duration-[1500ms] ease-in ${visible ? 'translate-y-[30px] opacity-0' : ''}`} style={{ transitionDelay: '500ms' }} />
        <circle cx="70" cy="20" r="3" fill="#f59e0b" className={`transition-transform duration-[1500ms] ease-in ${visible ? 'translate-y-[25px] opacity-0' : ''}`} style={{ transitionDelay: '700ms' }} />
        <circle cx="40" cy="20" r="3" fill="#f59e0b" className={`transition-transform duration-[1500ms] ease-in ${visible ? 'translate-y-[70px]' : ''}`} style={{ transitionDelay: '900ms' }} />
    </svg>
);


const Slide13_GovernmentTender: React.FC<SlideProps> = ({ isActive }) => {
    const [visible, setVisible] = useState(false);
    const complianceReqs = useAnimatedCounter(200, 1500, visible);
    const failureRate = useAnimatedCounter(60, 1500, visible);

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
                <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>Tender Execution Challenges</h2>
                
                <div className={`flex items-center gap-4 transition-all duration-500 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <GovernmentBuildingIcon />
                    <div>
                        <p className="text-3xl font-bold text-slate-100">{complianceReqs}+</p>
                        <p className="text-lg text-slate-400">RFP compliance requirements</p>
                    </div>
                </div>

                <div className={`flex items-center gap-4 transition-all duration-500 ease-out delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <div className="w-16 h-16 flex items-center justify-center">
                        <p className="text-5xl font-bold text-red-400"> {failureRate}% </p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-slate-100">Failure Rate</p>
                        <p className="text-lg text-slate-400">Tender winners miss deadlines</p>
                    </div>
                </div>

                <div className={`p-4 bg-slate-800/70 rounded-lg transition-all duration-500 ease-out delay-600 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <p className="text-lg text-slate-300">
                        <span className="font-bold text-teal-400">Asset-heavy</span> bidders struggle with the <span className="font-bold text-teal-400">operational demands</span> post-award.
                    </p>
                </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
                <FunnelIcon visible={visible} />
            </div>
        </div>
    );
};

export default Slide13_GovernmentTender;