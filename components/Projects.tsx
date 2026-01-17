import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CLASSES } from '../constants';
import { Project } from '../types';

const PROJECT_DATA: Project[] = [
  {
    title: "Nexus Protocol",
    description: "Decentralized asset management for the modern era.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000",
    tag: "Blockchain v2",
    link: "#"
  },
  {
    title: "Aura Interface",
    description: "A minimalist design system for high-end creative agencies.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
    tag: "UI / Design",
    link: "#"
  }
];

export const Projects: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`${CLASSES.reveal} ${titleVisible ? CLASSES.revealVisible : CLASSES.revealHidden}`}>
          <h2 className={`text-4xl font-black ${CLASSES.headingFont} mb-16 uppercase tracking-[0.2em] text-[var(--text)]`}>
            Selected_Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECT_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { ref, isVisible } = useScrollReveal(index * 200);

  return (
    <div 
      ref={ref} 
      className={`group ${CLASSES.reveal} ${isVisible ? CLASSES.revealVisible : CLASSES.revealHidden}`}
    >
      <div className={`p-3 mb-8 rounded-[2.8rem] ${CLASSES.glass} relative overflow-hidden`}>
        <div className="aspect-video rounded-[2.5rem] overflow-hidden">
          <img 
            src={project.image} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
            alt={project.title} 
          />
        </div>
        <div className="absolute top-8 right-8">
          <div className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase backdrop-blur-3xl bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text)]`}>
            {project.tag}
          </div>
        </div>
      </div>
      <div className="px-4 flex justify-between items-start">
        <div>
          <h3 className={`text-3xl font-bold ${CLASSES.headingFont} mb-2 text-[var(--text)]`}>
            {project.title}
          </h3>
          <p className="text-[var(--text-muted)] font-light">
            {project.description}
          </p>
        </div>
        <a 
          href={project.link} 
          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${CLASSES.glass} hover:bg-[var(--text)] hover:text-[var(--bg)]`}
        >
          <ArrowUpRight className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};