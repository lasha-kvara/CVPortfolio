import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Arsenal' },
  { href: '#experience', label: 'Journey' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'py-4 bg-slate-900/80 backdrop-blur-md border-slate-800/50 shadow-2xl' 
        : 'py-8 bg-transparent border-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-teal-400 flex items-center justify-center rounded-lg font-bold text-slate-900 group-hover:rotate-6 transition-transform">
            LK
          </div>
          <span className="hidden sm:inline font-bold text-slate-100 tracking-tight">Kvaratskhelia</span>
        </a>
        <ul className="flex items-center gap-4 sm:gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a 
                href={href} 
                onClick={(e) => handleNavClick(e, href)}
                className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-teal-300 transition-colors cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;