
import React, { useState, useEffect } from 'react';
import { DownloadIcon, LinkedInIcon, GithubIcon } from '../constants.tsx';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const items = [
    <div className="flex items-center gap-3 mb-6">
      <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
      <span className="text-teal-300 font-mono text-xs tracking-[0.2em] uppercase">Status: Testing</span>
    </div>,
    <h1 className="text-5xl sm:text-8xl font-black text-slate-100 tracking-tight leading-none mb-4">
      Lasha Kvaratskhelia
    </h1>,
    <h2 className="text-2xl sm:text-4xl font-bold text-slate-400 mb-8 max-w-2xl leading-tight">
        Senior SDET 
      <div>
      <span className="text-slate-200">Software Development Engineer in Test </span> 
      </div>
    </h2>,
    <p className="max-w-xl text-lg text-slate-400 leading-relaxed mb-12">
      I bridge the gap between development and reliability. Specializing in high-concurrency frontend/backend testing, performance, mobile/web automation, and CI/CD integration.
    </p>,
    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
      <a 
        href="https://drive.google.com/file/d/1Yku8pYhVu6SLznviEeZ4h9ej_jypVh7s/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-8 py-4 overflow-hidden rounded-xl bg-slate-800 border border-slate-700 font-bold text-slate-100 transition-all hover:scale-105 hover:border-teal-400/50 active:scale-95 shadow-xl shadow-black/20"
      >
        <DownloadIcon />
        <span className="relative z-10">Resume</span>
        <div className="absolute inset-0 bg-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>

      <a 
        href="https://www.linkedin.com/in/lasha-kvaratskhelia-28a652200/" 
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-8 py-4 overflow-hidden rounded-xl bg-teal-400 font-bold text-slate-900 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-500/10"
      >
        <LinkedInIcon className="w-5 h-5" />
        <span className="relative z-10">LinkedIn</span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </a>
      
      <a 
        href="http://github.com/lasha-kvara" 
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-8 py-4 overflow-hidden rounded-xl bg-slate-800 border border-slate-700 font-bold text-slate-100 transition-all hover:scale-105 hover:border-teal-400/50 active:scale-95 shadow-xl shadow-black/20"
      >
        <GithubIcon />
        <span className="relative z-10">GitHub</span>
        <div className="absolute inset-0 bg-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  ];

  return (
    <section id="hero" className="min-h-[70vh] flex flex-col justify-center">
      {items.map((item, i) => (
        <div
          key={i}
          className={`transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {item}
        </div>
      ))}
    </section>
  );
};

export default Hero;
