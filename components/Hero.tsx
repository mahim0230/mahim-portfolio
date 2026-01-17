import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CLASSES } from '../constants';

export const Hero: React.FC = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal(300);

  return (
    <section className="relative pt-48 pb-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-[0.3em] animate-bounce-slow ${CLASSES.glass}`}>
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></span>
          <span className="text-[var(--text)]">System v4.0 Active</span>
        </div>
        
        <div ref={textRef} className={`${CLASSES.reveal} ${textVisible ? CLASSES.revealVisible : CLASSES.revealHidden}`}>
          <h1 className={`text-7xl md:text-[8rem] lg:text-[10rem] font-black ${CLASSES.headingFont} leading-[0.9] mb-10 text-[var(--text)]`}>
            BUILDING <br /> 
            <span className="gradient-text">THE FUTURE.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto mb-14 font-light leading-relaxed">
            Crafting immersive digital ecosystems with a focus on speed, intelligence, and breathtaking design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
            <a href="#projects" className={`${CLASSES.buttonPrimary} px-14 py-6 rounded-[2rem] font-black tracking-widest text-sm shadow-2xl`}>
              VIEW ARTIFACTS
            </a>
            <a href="#contact" className={`${CLASSES.glass} px-14 py-6 rounded-[2rem] font-black tracking-widest text-sm hover:bg-white/5 transition uppercase text-[var(--text)]`}>
              Connect_
            </a>
          </div>
        </div>

        <div ref={imgRef} className={`w-full max-w-6xl p-4 rounded-[4rem] ${CLASSES.glass} ${CLASSES.reveal} ${imgVisible ? CLASSES.revealVisible : CLASSES.revealHidden}`}>
          <div className="relative overflow-hidden border-radius-inherit rounded-[3.5rem] aspect-[21/9] group">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Digital Universe"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};