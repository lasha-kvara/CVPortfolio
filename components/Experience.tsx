
import React, { useRef } from 'react';
import Section from './Section.tsx';
import { EXPERIENCE_DATA } from '../constants.tsx';
import { useOnScreen } from '../hooks/useOnScreen.ts';

const ExperienceCard: React.FC<{ index: number; isLast: boolean }> = ({ index, isLast }) => {
  const item = EXPERIENCE_DATA[index];
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`group relative grid sm:grid-cols-8 gap-8 mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <header className="sm:col-span-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 pt-1.5">
        {item.duration}
      </header>

      <div className="sm:col-span-6">
        <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-teal-300 transition-colors">
          {item.role}
        </h3>
        <div className="text-teal-400 font-bold mb-4 flex items-center gap-2">
          <span>{item.company}</span>
          <span className="h-px w-8 bg-teal-400/20"></span>
        </div>
        <p className="text-slate-400 leading-relaxed text-base mb-6">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, i) => (
            <span key={i} className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-slate-800/50 text-slate-400 border border-slate-800 rounded group-hover:border-teal-400/30 group-hover:text-teal-300 transition-all">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="The Journey">
      <div className="relative mt-12">
        {EXPERIENCE_DATA.map((_, index) => (
          <ExperienceCard 
            key={index} 
            index={index} 
            isLast={index === EXPERIENCE_DATA.length - 1} 
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;