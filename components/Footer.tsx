import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { ideas as ideasPt } from '../data';
import { ideasEn } from '../data-en';
import { ideasEs } from '../data-es';

export const Footer: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Logic to determine if we are on an idea page and can switch languages
  const getLanguageLinks = () => {
    let currentSlug = '';
    let currentLangIdeas = ideasPt;
    let isPt = false, isEn = false, isEs = false;
    
    // 1. Identify current language and slug
    if (path.startsWith('/ideia/')) {
      currentSlug = path.replace('/ideia/', '');
      currentLangIdeas = ideasPt;
      isPt = true;
    } else if (path.startsWith('/en/')) {
      if (path.includes('thank-you')) return null; // No switching on thank you page
      currentSlug = path.replace('/en/', '');
      currentLangIdeas = ideasEn;
      isEn = true;
    } else if (path.startsWith('/es/')) {
      if (path.includes('gracias')) return null; // No switching on thank you page
      currentSlug = path.replace('/es/', '');
      currentLangIdeas = ideasEs;
      isEs = true;
    } else {
      return null; // Not an idea page
    }

    if (!currentSlug) return null;

    // 2. Find the current idea object to get its stable ID
    const currentIdea = currentLangIdeas.find(i => i.slug === currentSlug);
    if (!currentIdea) return null;

    const id = currentIdea.id;

    // 3. Find the slugs for this ID in all languages
    const ptSlug = ideasPt.find(i => i.id === id)?.slug;
    const enSlug = ideasEn.find(i => i.id === id)?.slug;
    const esSlug = ideasEs.find(i => i.id === id)?.slug;

    if (!ptSlug || !enSlug || !esSlug) return null;

    return (
      <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-gray-200">
        <Link 
          to={`/ideia/${ptSlug}`} 
          className={`flex items-center gap-2 text-sm font-medium transition-colors ${isPt ? 'text-brand-600 cursor-default pointer-events-none' : 'text-gray-500 hover:text-gray-900'}`}
        >
          <span>🇧🇷</span> Português
        </Link>
        <div className="w-px h-4 bg-gray-300 self-center"></div>
        <Link 
          to={`/en/${enSlug}`} 
          className={`flex items-center gap-2 text-sm font-medium transition-colors ${isEn ? 'text-brand-600 cursor-default pointer-events-none' : 'text-gray-500 hover:text-gray-900'}`}
        >
          <span>🇺🇸</span> English
        </Link>
        <div className="w-px h-4 bg-gray-300 self-center"></div>
        <Link 
          to={`/es/${esSlug}`} 
          className={`flex items-center gap-2 text-sm font-medium transition-colors ${isEs ? 'text-brand-600 cursor-default pointer-events-none' : 'text-gray-500 hover:text-gray-900'}`}
        >
          <span>🇪🇸</span> Español
        </Link>
      </div>
    );
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-8 mb-8 text-sm font-medium text-gray-500">
          <Link to="/sitemap" className="hover:text-brand-600 transition-colors">Nossas Soluções</Link>
          <span className="cursor-not-allowed opacity-50">Termos de Uso</span>
          <span className="cursor-not-allowed opacity-50">Privacidade</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-2 font-medium">
          &copy; {new Date().getFullYear()} SolutionKit.
        </p>
        <div className="text-xs text-gray-400 mb-4">
          <p>Validação de Micro-SaaS | Feito com foco em ROI</p>
        </div>

        {/* Language Switcher - Only shows on Idea Pages */}
        {getLanguageLinks()}
      </div>
    </footer>
  );
};