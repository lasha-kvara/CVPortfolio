
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px w-full bg-slate-700/50"></div>
      </div>
      <div className="relative">
        {children}
      </div>
    </section>
  );
};

export default Section;
