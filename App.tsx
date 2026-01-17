import React, { useState, useEffect } from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Theme } from './types';
import { THEMES } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('mahim-theme') as Theme) || Theme.DARK;
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Apply theme variables to root
    const root = document.documentElement;
    const themeConfig = THEMES[theme];
    
    Object.entries(themeConfig).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });

    localStorage.setItem('mahim-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(at ${mousePos.x * 100}% ${mousePos.y * 100}%, var(--glow) 0, transparent 40%),
          radial-gradient(at 0% 0%, var(--glow) 0, transparent 50%), 
          radial-gradient(at 100% 100%, rgba(14, 165, 233, 0.15) 0, transparent 50%)
        `
      }}
    >
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;