import React, { useState, useEffect } from 'react';
import { CLASSES } from '../constants';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-[var(--border)] ${scrolled ? 'backdrop-blur-xl bg-[var(--card-bg)] shadow-lg' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-sky-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
            M
          </div>
          <span className={`font-bold text-xl ${CLASSES.headingFont} tracking-tight uppercase text-[var(--text)]`}>
            MAHIM
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[var(--text)]">
          <a href="#about" className="opacity-60 hover:opacity-100 transition-opacity">Evolution</a>
          <a href="#skills" className="opacity-60 hover:opacity-100 transition-opacity">Systems</a>
          <a href="#projects" className="opacity-60 hover:opacity-100 transition-opacity">Artifacts</a>
          <a href="#contact" className={`${CLASSES.buttonPrimary} px-8 py-3 rounded-2xl font-bold shadow-lg`}>
            Initialize
          </a>
        </div>
      </div>
    </nav>
  );
};