import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Search, Frown } from 'lucide-react';
import { ideas } from '../data';

export const SitemapPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIdeas = useMemo(() => {
    const lowerTerm = searchTerm.toLowerCase();
    return ideas.filter(idea => 
      idea.hero.title.toLowerCase().includes(lowerTerm) ||
      idea.slug.replace(/-/g, ' ').toLowerCase().includes(lowerTerm) ||
      idea.seoTitle.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Nossas Soluções</h1>
          <p className="text-lg text-gray-500 mb-8">
            Conheça o portfólio completo de ferramentas da SolutionKit focadas em eficiência operacional.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-brand-500 focus:border-brand-500 sm:text-sm shadow-sm transition-all"
              placeholder="Buscar ferramenta (ex: Pix, Contrato, Estoque)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-6">
          {filteredIdeas.length > 0 ? (
            filteredIdeas.map((idea) => (
              <Link 
                key={idea.slug} 
                to={`/ideia/${idea.slug}`}
                className="group block bg-white rounded-xl border border-gray-200 p-6 hover:border-brand-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 rounded-lg text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Box className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                        {idea.seoTitle.split('|')[0].trim()}
                      </h3>
                      <p className="text-gray-500 mt-1 line-clamp-2">
                        {idea.hero.subtitle}
                      </p>
                      <span className="inline-block mt-3 text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        /ideia/{idea.slug}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Frown className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Nenhuma solução encontrada</h3>
              <p className="text-gray-500">Tente buscar por outro termo.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};