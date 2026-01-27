
import React, { useRef } from 'react';
import Section from './Section.tsx';
import { PROJECTS_DATA, GithubIcon, ExternalLinkIcon } from '../constants.tsx';
import { useOnScreen } from '../hooks/useOnScreen.ts';
import { Project } from '../types.ts';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Using a lower threshold for faster trigger on scroll
  const isVisible = useOnScreen(ref, '0px', 0.05);

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col bg-slate-800/20 hover:bg-slate-800/40 border border-slate-700/40 hover:border-teal-400/40 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:shadow-teal-500/10 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ 
        // Synchronized delay: first few cards stagger slightly, 
        // while subsequent cards trigger immediately upon entering viewport
        transitionDelay: `${Math.min(index * 75, 150)}ms` 
      }}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors duration-300">
          {project.name}
        </h3>
        <div className="flex gap-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              className="text-slate-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-125"
              aria-label="GitHub Repository"
            >
              <GithubIcon />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              className="text-slate-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-125"
              aria-label="Live Project"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Technologies List with Refined Hover Animation - Now showing all tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-transparent group-hover:border-slate-700/50 transition-colors duration-500">
        {project.technologies.map((tech, i) => (
          <span 
            key={i} 
            className={`text-[11px] font-mono text-slate-500 px-2 py-1 border border-slate-800 rounded-md transition-all duration-300 ease-out transform group-hover:text-teal-300 group-hover:border-teal-400/20 group-hover:bg-teal-400/5 group-hover:translate-y-0 translate-y-2 opacity-60 group-hover:opacity-100`}
            style={{ transitionDelay: `${i * 20}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Work">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;