
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-mono">
        <div>
          <p>© {new Date().getFullYear()} Lasha Kvaratskhelia</p>
        </div>
        <div className="flex gap-8 uppercase tracking-widest text-[10px] font-bold">
          <span className="hover:text-teal-400 cursor-default transition-colors">Integrity</span>
          <span className="hover:text-teal-400 cursor-default transition-colors">Quality</span>
          <span className="hover:text-teal-400 cursor-default transition-colors">Performance</span>
        </div>
        <p className="text-xs">Built with React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
