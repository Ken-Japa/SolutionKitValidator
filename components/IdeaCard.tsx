import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Shield, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { Idea } from '../types';

interface IdeaCardProps {
  idea: Idea;
}

const iconMap: any = {
  check: CheckCircle2,
  zap: Zap,
  shield: Shield,
  clock: Clock,
};

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
  const MainIcon = idea.features[0] ? iconMap[idea.features[0].icon] : Box;

  return (
    <Link 
      to={`/ideia/${idea.slug}`} 
      className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-card-hover hover:border-brand-200/60 overflow-hidden hover:-translate-y-1"
    >
      {/* Subtle Background Glow on Hover */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-glow-sm transition-all duration-300">
            <MainIcon className="w-6 h-6" />
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-100 transition-colors">
            Beta
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug tracking-tight group-hover:text-brand-600 transition-colors">
          {idea.seoTitle.split('|')[0].trim()}
        </h3>
        
        <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">
          {idea.hero.subtitle}
        </p>

        <div className="mt-auto pt-5 border-t border-slate-100/60 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">A partir de</span>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-medium text-slate-400">R$</span>
              <span className="text-xl font-bold text-slate-900 tracking-tight">{idea.pricing.value}</span>
            </div>
          </div>
          
          <div className="flex items-center text-sm font-semibold text-brand-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Ver detalhes <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};