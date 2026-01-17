import React from 'react';
import { Palette, Sun, Moon, Zap } from 'lucide-react';
import { Theme } from '../types';
import { CLASSES } from '../constants';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onThemeChange }) => {
  const getThemeLabel = (theme: Theme) => {
    switch (theme) {
      case Theme.DARK: return 'Modern';
      case Theme.LIGHT: return 'Classic';
      case Theme.CYBER: return 'Cyber';
      default: return 'Custom';
    }
  };

  return (
    <div className={`fixed top-6 right-6 z-[60] flex items-center gap-3 p-2 rounded-2xl ${CLASSES.glass} !border-[var(--border)]`}>
      <div className="px-3 border-r border-[var(--border)] hidden sm:flex items-center gap-2">
        <Palette className="w-3 h-3 opacity-50 text-[var(--text)]" />
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 text-[var(--text)]">
          Theme: <span className="text-[var(--primary)] ml-1">{getThemeLabel(currentTheme)}</span>
        </span>
      </div>
      <div className="flex gap-1">
        <button 
          onClick={() => onThemeChange(Theme.LIGHT)} 
          className="p-2 rounded-xl hover:bg-white/10 text-[var(--text)] transition-all duration-300 group" 
          title="Light Mode"
        >
          <Sun className="w-4 h-4 group-hover:rotate-90 transition-transform" />
        </button>
        <button 
          onClick={() => onThemeChange(Theme.DARK)} 
          className="p-2 rounded-xl hover:bg-white/10 text-[var(--text)] transition-all duration-300 group" 
          title="Dark Mode"
        >
          <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform" />
        </button>
        <button 
          onClick={() => onThemeChange(Theme.CYBER)} 
          className="p-2 rounded-xl hover:bg-white/10 text-[var(--text)] transition-all duration-300 group" 
          title="Cyber Mode"
        >
          <Zap className="w-4 h-4 group-hover:scale-125 transition-transform" />
        </button>
      </div>
    </div>
  );
};