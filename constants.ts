import { Theme, ThemeConfig } from './types';

export const THEMES: Record<Theme, ThemeConfig> = {
  [Theme.DARK]: {
    '--primary': '#6366f1',
    '--accent': '#0ea5e9',
    '--bg': '#050505',
    '--card-bg': 'rgba(255, 255, 255, 0.03)',
    '--border': 'rgba(255, 255, 255, 0.08)',
    '--text': '#ffffff',
    '--text-muted': '#94a3b8',
    '--glow': 'rgba(99, 102, 241, 0.2)',
  },
  [Theme.LIGHT]: {
    '--primary': '#4f46e5',
    '--accent': '#0284c7',
    '--bg': '#f8fafc',
    '--card-bg': 'rgba(255, 255, 255, 0.7)',
    '--border': 'rgba(0, 0, 0, 0.05)',
    '--text': '#0f172a',
    '--text-muted': '#64748b',
    '--glow': 'rgba(79, 70, 229, 0.1)',
  },
  [Theme.CYBER]: {
    '--primary': '#f0abfc',
    '--accent': '#22d3ee',
    '--bg': '#020617',
    '--card-bg': 'rgba(30, 41, 59, 0.4)',
    '--border': 'rgba(34, 211, 238, 0.2)',
    '--text': '#f8fafc',
    '--text-muted': '#94a3b8',
    '--glow': 'rgba(240, 171, 252, 0.3)',
  },
};

// Common tailwind classes mapped to the custom CSS classes from original design
export const CLASSES = {
  glass: "backdrop-blur-xl bg-[var(--card-bg)] border border-[var(--border)] shadow-2xl transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_12px_40px_var(--glow)]",
  input: "bg-[var(--card-bg)] border border-[var(--border)] rounded-[1.25rem] px-6 py-5 text-[var(--text)] w-full transition-all duration-300 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_20px_var(--glow)] placeholder-opacity-50 placeholder-[var(--text-muted)]",
  buttonPrimary: "bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white relative overflow-hidden z-10 hover:-translate-y-1 hover:shadow-[0_10px_30px_var(--glow)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--accent)] before:to-[var(--primary)] before:opacity-0 before:z-[-1] before:transition-opacity before:duration-500 hover:before:opacity-100",
  headingFont: "font-heading",
  reveal: "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
  revealHidden: "opacity-0 translate-y-10",
  revealVisible: "opacity-100 translate-y-0",
};