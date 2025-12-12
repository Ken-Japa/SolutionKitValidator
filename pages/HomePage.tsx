import React, { useState } from 'react';
import { Search, Sparkles, TrendingUp, ShieldCheck, ArrowRight, Zap, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ideas } from '../data';
import { IdeaCard } from '../components/IdeaCard';

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate('/sitemap');
    }
  };

  const featuredIdeas = ideas.slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        {/* Background Effects - More Subtle & Premium */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none overflow-visible">
            <div className="absolute top-0 left-[10%] w-[600px] h-[600px] bg-brand-200/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
            <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px] mix-blend-multiply animate-float"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/50 backdrop-blur-md border border-slate-200/50 text-brand-700 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm animate-fade-in-up hover:bg-white/80 transition-all cursor-default ring-1 ring-white/50">
             <Sparkles className="w-3 h-3 fill-brand-700" /> Laboratório de Inovação
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.05] animate-fade-in-up animation-delay-200 text-balance">
            Soluções digitais para <br className="hidden md:block"/>
            <span className="text-gradient">problemas reais</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400 text-balance font-medium tracking-wide">
            Ferramentas simples, focadas e sem burocracia. 
            Desenvolvemos tecnologia acessível para destravar o potencial do seu negócio hoje.
          </p>

          {/* Search Bar - Enhanced */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto relative group animate-fade-in-up animation-delay-600 z-20">
            <div className="absolute inset-0 bg-brand-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-white rounded-full shadow-2xl shadow-brand-900/5 border border-slate-200 flex items-center p-2 transition-transform transform group-hover:-translate-y-0.5 ring-4 ring-transparent group-hover:ring-brand-50/50">
              <div className="pl-4 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 text-slate-900 placeholder-slate-400 text-base outline-none"
                placeholder="O que você precisa resolver hoje?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white p-3 rounded-full transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 active:scale-95">
                 <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Quick Tags */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 animate-fade-in-up animation-delay-600">
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider self-center mr-2">Em alta:</span>
            {[
              { label: 'Pix', path: '/ideia/confirmador-pix' },
              { label: 'Contratos', path: '/ideia/gerador-contrato-freelance' },
              { label: 'RH', path: '/ideia/ponto-domestica' }
            ].map((tag) => (
              <button 
                key={tag.path}
                onClick={() => navigate(tag.path)} 
                className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-brand-300 hover:text-brand-600 hover:shadow-sm transition-all active:scale-95"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - Cleaner */}
      <section className="border-y border-slate-200/60 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-wrap justify-center md:justify-around gap-x-12 gap-y-6 text-slate-500">
           <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-brand-600 transition-colors cursor-default">
             <div className="p-2 bg-brand-50 rounded-lg text-brand-600"><ShieldCheck className="w-5 h-5" /></div>
             Compra Segura
           </div>
           <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-brand-600 transition-colors cursor-default">
             <div className="p-2 bg-brand-50 rounded-lg text-brand-600"><TrendingUp className="w-5 h-5" /></div>
             Foco em ROI
           </div>
           <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-brand-600 transition-colors cursor-default">
             <div className="p-2 bg-brand-50 rounded-lg text-brand-600"><Zap className="w-5 h-5" /></div>
             Tecnologia Moderna
           </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Soluções em Destaque</h2>
              <p className="text-slate-500 text-lg leading-relaxed">Ferramentas validadas e prontas para otimizar sua operação agora mesmo.</p>
            </div>
            <button 
              onClick={() => navigate('/sitemap')}
              className="hidden md:flex group text-slate-900 font-bold hover:text-brand-600 items-center gap-2 transition-all px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Ver catálogo completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIdeas.map((idea) => (
              <IdeaCard key={idea.slug} idea={idea} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <button 
              onClick={() => navigate('/sitemap')}
              className="px-6 py-4 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 shadow-sm hover:bg-slate-50 w-full active:scale-95 transition-transform"
            >
              Ver catálogo completo
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter / Final CTA - Better Gradient */}
      <section className="py-32 relative overflow-hidden bg-slate-900">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600 rounded-full blur-[180px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600 rounded-full blur-[180px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 brightness-100 contrast-150 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-3 bg-white/5 rounded-2xl mb-8 backdrop-blur-sm border border-white/10">
            <Box className="w-8 h-8 text-brand-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Não achou o que procurava?</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Estamos constantemente desenvolvendo novas ferramentas. Se você tem uma dor específica na sua operação, queremos saber.
          </p>
          <a 
            href="mailto:contato@solutionkit.com.br" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-brand-50 transition-all shadow-glow hover:scale-105 active:scale-95"
          >
            Sugerir uma ferramenta <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
};