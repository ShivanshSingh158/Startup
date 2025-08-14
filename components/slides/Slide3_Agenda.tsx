
import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../../types';

const agendaItems = [
  "Foundation & Problem", "Market & Competition", "Solution & Moats", "Roadmap & Financials", "Future Vision & Q&A"
];

const Slide3_Agenda: React.FC<SlideProps> = ({ isActive }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <div className="w-full h-full flex flex-col justify-center p-12">
      <h2 className={`text-4xl font-bold text-teal-300 mb-12 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>Agenda & Journey Map</h2>
      <div className="flex flex-col h-full">
        {/* Journey Map */}
        <div className="flex-1 flex items-center justify-between relative mb-4 px-10">
          {/* Path */}
          <svg className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#334155" strokeWidth="2" strokeDasharray="5, 5" />
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#2dd4bf" strokeWidth="2" className={visible ? 'draw-line-animation' : ''} style={{ animationDelay: '500ms' }} />
          </svg>

          {agendaItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="z-10 flex flex-col items-center transition-transform duration-300 hover:scale-110"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  hoveredIndex === index || (visible && hoveredIndex === null)
                    ? 'bg-teal-500 border-teal-300'
                    : 'bg-slate-700 border-slate-600'
                }`}
              >
                <span className="text-sm font-bold">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Labels */}
        <div className="flex-1 flex justify-between text-center px-2">
            {agendaItems.map((item, index) => (
                <div key={index} className="w-1/5 transition-all duration-500" style={{ transitionDelay: `${700 + index * 150}ms`, opacity: visible ? 1 : 0 }}>
                    <p className={`font-semibold transition-colors duration-300 ${hoveredIndex === index ? 'text-teal-300' : 'text-slate-200'}`}>
                        {item}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Slide3_Agenda;
