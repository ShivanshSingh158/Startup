import React, { useState, useEffect, useCallback } from 'react';
import Slide1 from './components/slides/Slide1_Intro';
import Slide2 from './components/slides/Slide2_ExecutiveSummary';
import Slide3 from './components/slides/Slide3_Agenda';
import Slide4 from './components/slides/Slide4_Team';
import Slide5 from './components/slides/Slide5_Adoption';
import Slide6 from './components/slides/Slide6_Crisis';
import Slide7 from './components/slides/Slide7_BusinessImpact';
import Slide8 from './components/slides/Slide8_Thesis';
import Slide9 from './components/slides/Slide9_CapitalTrap';
import Slide10 from './components/slides/Slide10_GeographicInequality';
import Slide11 from './components/slides/Slide11_OperationalFailures';
import Slide12 from './components/slides/Slide12_MarketFragmentation';
import Slide13 from './components/slides/Slide13_GovernmentTender';
import Slide14 from './components/slides/Slide14_CorporateFleet';
import Slide15 from './components/slides/Slide15_FinancialModel';
import Slide16 from './components/slides/Slide16_OpportunityGap';
import Slide17 from './components/slides/Slide17_TAM';
import Slide18 from './components/slides/Slide18_SAM';
import Slide19 from './components/slides/Slide19_SOM';
import Slide20 from './components/slides/Slide20_GrowthDrivers';
import Slide21 from './components/slides/Slide21_TenderMarket';
import Slide22 from './components/slides/Slide22_CorporateMarket';
import Slide23 from './components/slides/Slide23_ExpansionStrategy';
import Slide24 from './components/slides/Slide24_Timing';
import type { SlideProps } from './types';

const slideComponents: React.FC<SlideProps>[] = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide20,
  Slide21,
  Slide22,
  Slide23,
  Slide24,
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideComponents.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideComponents.length) % slideComponents.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <main className="relative w-screen h-screen flex items-center justify-center p-8 bg-slate-900 font-sans">
      {/* Slide Container */}
      <div className="aspect-video w-full max-w-7xl bg-slate-800/50 rounded-lg shadow-2xl shadow-black/50 overflow-hidden relative border border-slate-700">
        {slideComponents.map((SlideComponent, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <SlideComponent isActive={index === currentSlide} />
          </div>
        ))}
      </div>
      
      {/* Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-slate-700/50 hover:bg-teal-500/80 rounded-full text-white backdrop-blur-sm transition-colors duration-300"
        >
          &larr; Prev
        </button>
        <span className="text-slate-400">{currentSlide + 1} / {slideComponents.length}</span>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-slate-700/50 hover:bg-teal-500/80 rounded-full text-white backdrop-blur-sm transition-colors duration-300"
        >
          Next &rarr;
        </button>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700 z-20">
        <div
          className="h-full bg-teal-500 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slideComponents.length) * 100}%` }}
        />
      </div>
    </main>
  );
};

export default App;