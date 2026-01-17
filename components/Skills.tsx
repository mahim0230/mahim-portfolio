import React from 'react';
import { Zap, Smartphone, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CLASSES } from '../constants';

export const Skills: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: c1Ref, isVisible: c1Visible } = useScrollReveal();
  const { ref: c2Ref, isVisible: c2Visible } = useScrollReveal(100);
  const { ref: c3Ref, isVisible: c3Visible } = useScrollReveal(200);

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-24 ${CLASSES.reveal} ${titleVisible ? CLASSES.revealVisible : CLASSES.revealHidden}`}
        >
          <h2 className={`text-5xl font-bold ${CLASSES.headingFont} mb-6 uppercase tracking-tighter text-[var(--text)]`}>
            Core Systems
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div 
            ref={c1Ref}
            className={`md:col-span-2 p-12 rounded-[3rem] hover:-translate-y-2 ${CLASSES.glass} ${CLASSES.reveal} ${c1Visible ? CLASSES.revealVisible : CLASSES.revealHidden}`}
          >
            <Zap className="w-12 h-12 mb-10 text-yellow-400" />
            <h3 className={`text-3xl font-bold mb-4 ${CLASSES.headingFont} text-[var(--text)]`}>Lightning Engine</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Optimization that ensures your applications load in the blink of an eye. No bloat, just speed.
            </p>
          </div>
          
          <div 
            ref={c2Ref}
            className={`p-12 rounded-[3rem] hover:-translate-y-2 ${CLASSES.glass} ${CLASSES.reveal} ${c2Visible ? CLASSES.revealVisible : CLASSES.revealHidden}`}
          >
            <Smartphone className="w-12 h-12 mb-10 text-indigo-400" />
            <h3 className={`text-2xl font-bold mb-4 ${CLASSES.headingFont} text-[var(--text)]`}>Fluidity</h3>
            <p className="text-[var(--text-muted)] text-sm">
              Responsive design that adapts to any screen dimension perfectly.
            </p>
          </div>
          
          <div 
            ref={c3Ref}
            className={`p-12 rounded-[3rem] hover:-translate-y-2 ${CLASSES.glass} ${CLASSES.reveal} ${c3Visible ? CLASSES.revealVisible : CLASSES.revealHidden}`}
          >
            <ShieldCheck className="w-12 h-12 mb-10 text-emerald-400" />
            <h3 className={`text-2xl font-bold mb-4 ${CLASSES.headingFont} text-[var(--text)]`}>Fortress</h3>
            <p className="text-[var(--text-muted)] text-sm">
              Bulletproof security protocols built into every line of code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};