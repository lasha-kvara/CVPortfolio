
import React, { useRef } from 'react';
import Section from './Section.tsx';
import { LinkedInIcon } from '../constants.tsx';
import { useOnScreen } from '../hooks/useOnScreen.ts';

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <Section id="contact" title="Get In Touch">
      <div 
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <h3 className="text-3xl sm:text-5xl font-black text-slate-100 mb-6">Let's build something robust.</h3>
        <p className="text-lg text-slate-400 mb-12">
          I'm always open to discussing quality architecture, performance optimizations, or new leadership opportunities. My inbox is always open.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:Lkvara25@gmail.com" 
            className="w-full sm:w-auto px-10 py-5 bg-teal-400 text-slate-900 font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-transform"
          >
            Send Message
          </a>
          <a 
            href="https://www.linkedin.com/in/lasha-kvaratskhelia-28a652200/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 px-10 py-5 border border-slate-700 text-slate-100 font-bold rounded-xl hover:bg-slate-800 transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;