import React, { useState, useEffect } from 'react';
import { Box, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Logic to hide navigation links on landing pages to focus on CTA
  const isLandingPage = location.pathname.includes('/ideia/') || 
                        location.pathname.includes('/en/') || 
                        location.pathname.includes('/es/');

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-nav py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
          <div className="bg-gradient-to-br from-brand-600 to-brand-700 p-2 rounded-xl shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 group-hover:scale-105 transition-all duration-300">
            <Box className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            SolutionKit
          </span>
        </Link>
        
        {/* Desktop Nav */}
        {!isLandingPage && (
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-brand-600 transition-colors">Início</Link>
            <Link to="/sitemap" className="hover:text-brand-600 transition-colors">Soluções</Link>
            <span className="cursor-not-allowed opacity-50 hover:text-slate-900">Sobre</span>
          </nav>
        )}

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-600 hover:text-brand-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}`}>
        <div className="py-6 px-4 flex flex-col gap-2">
          <Link 
            to="/" 
            className="block py-3 px-4 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
            onClick={closeMenu}
          >
            Início
          </Link>
          <Link 
            to="/sitemap" 
            className="block py-3 px-4 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
            onClick={closeMenu}
          >
            Todas as Soluções
          </Link>
        </div>
      </div>
    </header>
  );
};