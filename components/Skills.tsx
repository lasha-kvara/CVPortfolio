import React, { useRef } from 'react';
import Section from './Section.tsx';
import { SKILLS_DATA } from '../constants.tsx';
import { useOnScreen } from '../hooks/useOnScreen.ts';
import { Skill } from '../types.ts';

const SkillBadge: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '0px', 0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="flex items-center gap-3 p-3.5 bg-slate-800/20 border border-slate-800 rounded-xl group hover:border-teal-400/40 hover:bg-slate-800/50 transition-colors duration-200">
        <div className="w-5 h-5 text-slate-500 group-hover:text-teal-400 transition-colors duration-300">
          {skill.icon}
        </div>
        <span className="text-xs font-bold uppercase tracking-wide text-slate-400 group-hover:text-slate-100 transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  // Categorize skills based on the updated counts:
  // Languages: 4 items (0 to 3)
  // Frameworks: 8 items (4 to 11)
  // Tools & Infrastructure: 7 items (12 to 18)
  const categories = [
    { name: "Languages", items: SKILLS_DATA.slice(0, 4) },
    { name: "Frameworks", items: SKILLS_DATA.slice(4, 12) },
    { name: "Tools & Infrastructure", items: SKILLS_DATA.slice(12) }
  ];

  return (
    <Section id="skills" title="Technical Arsenal">
      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat.name} className="space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 border-l-2 border-teal-500/30">
              {cat.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cat.items.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;