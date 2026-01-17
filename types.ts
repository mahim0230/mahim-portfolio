import React from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  CYBER = 'cyber'
}

export interface ThemeConfig {
  '--primary': string;
  '--accent': string;
  '--bg': string;
  '--card-bg': string;
  '--border': string;
  '--text': string;
  '--text-muted': string;
  '--glow': string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tag: string;
  link: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: React.ElementType;
  colorClass: string;
}