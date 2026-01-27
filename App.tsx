import React, { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const winScroll = window.scrollY || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        if (height > 0) {
          const scrolled = (winScroll / height) * 100;
          scrollProgress.style.width = scrolled + "%";
          scrollProgress.style.opacity = winScroll > 50 ? "1" : "0";
        } else {
          scrollProgress.style.width = "0%";
          scrollProgress.style.opacity = "0";
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 antialiased overflow-hidden">
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-all duration-150 ease-out spotlight"
        style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any}
      />

      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <Header />
      
      <main className="relative z-10 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col gap-32 md:gap-48">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;