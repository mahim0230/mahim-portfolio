import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CLASSES } from '../constants';

export const About: React.FC = () => {
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal(200);

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={gridRef} 
            className={`order-2 lg:order-1 grid grid-cols-2 gap-4 ${CLASSES.reveal} ${gridVisible ? CLASSES.revealVisible : CLASSES.revealHidden}`}
          >
            <div className={`aspect-[3/4] p-2 rounded-[2rem] ${CLASSES.glass}`}>
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000" 
                className="w-full h-full object-cover rounded-3xl" 
                alt="Dev Culture"
              />
            </div>
            <div className={`aspect-[3/4] mt-12 p-2 rounded-[2rem] ${CLASSES.glass}`}>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000" 
                className="w-full h-full object-cover rounded-3xl" 
                alt="Code Art"
              />
            </div>
          </div>
          
          <div 
            ref={textRef}
            className={`order-1 lg:order-2 ${CLASSES.reveal} ${textVisible ? CLASSES.revealVisible : CLASSES.revealHidden}`}
          >
            <span className="text-[var(--primary)] font-bold tracking-[0.5em] text-xs uppercase block mb-6">
              // IDENTITY_MANIFEST
            </span>
            <h2 className={`text-5xl md:text-6xl font-bold ${CLASSES.headingFont} mb-10 leading-tight text-[var(--text)]`}>
              Think code. <br />
              Speak <span className="gradient-text">Design.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-xl mb-12 font-light leading-relaxed">
              I bridge the gap between imagination and execution. My workflow integrates the latest in AI-assisted development and UX psychology to create products that feel alive.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <div className={`text-4xl font-bold ${CLASSES.headingFont} mb-1 text-[var(--text)]`}>99%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50 font-black text-[var(--text)]">Performance</div>
              </div>
              <div>
                <div className={`text-4xl font-bold ${CLASSES.headingFont} mb-1 text-[var(--text)]`}>24/7</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50 font-black text-[var(--text)]">Uptime Logic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};