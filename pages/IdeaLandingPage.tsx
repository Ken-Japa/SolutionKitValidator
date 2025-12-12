import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Zap, Shield, Clock, ArrowRight, AlertCircle, Star, Lock, Check, XCircle } from 'lucide-react';
import { ideas as ideasPt } from '../data';
import { ideasEn } from '../data-en';
import { ideasEs } from '../data-es';
import { trackFakePurchase } from '../utils/tracker';
import { Idea } from '../types';

export const IdeaLandingPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  let lang = 'pt';
  let ideas: Idea[] = ideasPt;

  if (location.pathname.startsWith('/en/')) {
    lang = 'en';
    ideas = ideasEn;
  } else if (location.pathname.startsWith('/es/')) {
    lang = 'es';
    ideas = ideasEs;
  }

  const idea = ideas.find(i => i.slug === slug);

  if (!idea) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-4 animate-fade-in-up">
          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Página não encontrada</h2>
          <button onClick={() => navigate('/')} className="text-brand-600 font-medium hover:underline">
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  const handleConversion = () => {
    trackFakePurchase(idea.slug, navigate, lang);
  };

  const t = (key: string) => {
    const texts: Record<string, Record<string, string>> = {
      tag: { pt: 'Solução Verificada', en: 'Verified Solution', es: 'Solución Verificada' },
      cancel: { pt: 'Garantia de 7 dias. Cancele quando quiser.', en: '7-day guarantee. Cancel anytime.', es: 'Garantía de 7 días. Cancela cuando quieras.' },
      launchOffer: { pt: 'Oferta de Lançamento', en: 'Launch Offer', es: 'Oferta de Lanzamiento' },
      currency: { pt: 'R$', en: '$', es: '$' },
      ctaSub: { pt: 'Pagamento seguro via Stripe', en: 'Secure payment via Stripe', es: 'Pago seguro vía Stripe' }
    };
    return texts[key][lang] || texts[key]['pt'];
  };

  const ptIdea = ideasPt.find(i => i.id === idea.id);
  const enIdea = ideasEn.find(i => i.id === idea.id);
  const esIdea = ideasEs.find(i => i.id === idea.id);
  const baseUrl = 'https://solutionkit.com.br';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 pb-24 md:pb-0 overflow-x-hidden selection:bg-brand-100 selection:text-brand-900">
      <Helmet>
        <title>{idea.seoTitle}</title>
        <meta name="description" content={idea.hero.subtitle} />
        <meta property="og:title" content={idea.hero.title} />
        <meta property="og:description" content={idea.hero.subtitle} />
        <link rel="canonical" href={window.location.href} />
        {ptIdea && <link rel="alternate" hrefLang="pt" href={`${baseUrl}/ideia/${ptIdea.slug}`} />}
        {enIdea && <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/${enIdea.slug}`} />}
        {esIdea && <link rel="alternate" hrefLang="es" href={`${baseUrl}/es/${esIdea.slug}`} />}
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[700px] h-[700px] bg-brand-200/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
          <div className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[100px] mix-blend-multiply animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Text */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-1.5 mb-8 px-4 py-1.5 bg-white/60 backdrop-blur-md border border-brand-200 text-brand-700 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm animate-fade-in-up ring-1 ring-white/50">
                 <Star className="w-3 h-3 fill-brand-700" /> {t('tag')}
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.05] animate-fade-in-up animation-delay-200 text-balance">
                {idea.hero.title.split(' ').map((word, i) => {
                  const isHighlight = word.length > 4 && i > 2;
                  return isHighlight ? <span key={i} className="text-gradient">{word} </span> : word + ' ';
                })}
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed animate-fade-in-up animation-delay-400 text-balance font-medium tracking-wide">
                {idea.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up animation-delay-600">
                <button 
                  onClick={handleConversion}
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white text-lg font-bold rounded-xl transition-all shadow-glow hover:shadow-brand-600/50 hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                  {idea.cta} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="mt-8 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-1.5 animate-fade-in-up animation-delay-600 font-medium">
                <Shield className="w-3 h-3" /> {t('cancel')}
              </p>
            </div>

            {/* Right Column: Premium Fake Interface */}
            <div className="relative hidden lg:block perspective-1000 animate-fade-in-up animation-delay-800 group select-none">
              {/* Main App Container */}
              <div className="relative w-full aspect-[4/3] bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl shadow-brand-900/10 rotate-y-12 transition-all duration-1000 ease-out group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:shadow-brand-900/20 overflow-hidden ring-1 ring-white/50">
                {/* Glossy Header */}
                <div className="h-12 border-b border-slate-100/50 flex items-center px-4 gap-2 bg-gradient-to-r from-slate-50/50 to-white/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  </div>
                </div>
                
                {/* App Body */}
                <div className="flex h-full p-6 relative">
                   {/* Abstract UI Representation */}
                   <div className="w-full h-full flex flex-col gap-6">
                      <div className="flex justify-between items-center">
                        <div className="h-8 w-1/3 bg-slate-100 rounded-lg"></div>
                        <div className="h-8 w-8 bg-brand-100 rounded-full"></div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                         {[1, 2, 3].map(i => (
                           <div key={i} className="h-24 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-100"></div>
                         ))}
                      </div>

                      <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-4 space-y-3">
                         {[1, 2, 3, 4].map(i => (
                           <div key={i} className="h-12 w-full bg-slate-50/50 rounded-lg flex items-center px-4 gap-3 relative overflow-hidden">
                              <div className="w-8 h-8 rounded-full bg-slate-200/50"></div>
                              <div className="h-2 w-1/3 bg-slate-200/50 rounded"></div>
                              <div className="absolute inset-0 bg-shimmer opacity-30"></div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Floating Notification Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-glow border border-white/80 flex items-center gap-4 animate-float ring-1 ring-slate-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Status</div>
                    <div className="text-lg font-bold text-slate-800">Ativado</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pain Section - Redesigned (Less Aggressive Red) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
               <div className="relative aspect-square rounded-3xl bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200"></div>
                  {/* Abstract Error UI */}
                  <div className="absolute inset-10 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center text-center p-8 border border-slate-100">
                     <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                        <XCircle className="w-8 h-8" />
                     </div>
                     <div className="h-3 w-3/4 bg-slate-100 rounded-full mb-2"></div>
                     <div className="h-3 w-1/2 bg-slate-100 rounded-full"></div>
                  </div>
               </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
               <div className="inline-flex items-center gap-2 mb-6 text-red-600 font-bold text-sm uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                  <AlertCircle className="w-4 h-4" /> O Problema
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                 {idea.pain.heading}
               </h2>
               <div className="space-y-6">
                 {idea.pain.description.map((p, idx) => (
                   <div key={idx} className="flex gap-4 items-start group">
                     <div className="mt-1 w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                       <span className="font-bold text-sm">✕</span>
                     </div>
                     <p className="text-slate-600 text-lg leading-relaxed font-medium">{p}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Dark Mode */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600 rounded-full blur-[150px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-300 font-bold text-xs uppercase tracking-widest">
                A Solução
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
                {idea.solution.heading}
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed mb-8">
                {idea.solution.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            
            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
                 {idea.features.map((f, i) => (
                   <div key={i} className="group bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                     <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400 mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors border border-white/5 shadow-inner">
                       <CheckCircle2 className="w-6 h-6" />
                     </div>
                     <h3 className="font-bold text-white text-lg mb-2 tracking-tight">{f.title}</h3>
                     <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
                   </div>
                 ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Premium Card */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">{t('launchOffer')}</h2>
            <p className="text-slate-500 text-lg">Investimento único. Retorno vitalício.</p>
          </div>

          <div className="relative group max-w-lg mx-auto perspective-1000">
             {/* Animated Gradient Border Effect */}
             <div className="absolute -inset-[2px] bg-gradient-to-r from-brand-300 via-indigo-300 to-brand-300 rounded-[2.2rem] blur-md opacity-40 group-hover:opacity-70 transition duration-500 animate-shimmer"></div>
             
             <div className="relative bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-slate-200/60 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500 border border-white">
                <div className="p-1.5 bg-gradient-to-r from-brand-500 to-indigo-600">
                  <div className="py-1 text-center text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                     Acesso Vitalício
                  </div>
                </div>
                
                <div className="p-8 md:p-12 text-center">
                  <div className="flex items-start justify-center mb-6">
                    <span className="text-4xl text-slate-400 font-light mt-2 mr-1 tracking-tight">{t('currency')}</span>
                    <span className="text-7xl font-bold text-slate-900 tracking-tighter">{idea.pricing.value}</span>
                    <div className="flex flex-col items-start ml-2 mt-4">
                       <span className="text-base text-slate-400 font-medium">/{idea.pricing.period}</span>
                    </div>
                  </div>
                  
                  <div className="mb-10 inline-block">
                    <span className="px-4 py-2 rounded-full text-sm font-bold bg-green-50 text-green-700 border border-green-100 flex items-center gap-2 shadow-sm">
                      <Zap className="w-4 h-4 fill-green-700" />
                      {idea.pricing.comparison}
                    </span>
                  </div>
                  
                  <button 
                    onClick={handleConversion}
                    className="w-full block bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold text-xl py-5 rounded-xl hover:shadow-lg hover:shadow-brand-500/30 transition-all active:scale-[0.98] ring-4 ring-transparent hover:ring-brand-100"
                  >
                    {idea.cta}
                  </button>
                  
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-4">
                     <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1.5 uppercase tracking-wide">
                       <Lock className="w-3 h-3" /> {t('ctaSub')}
                     </p>
                     <div className="flex gap-3 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="h-6 w-10 bg-slate-200 rounded"></div>
                        <div className="h-6 w-10 bg-slate-200 rounded"></div>
                        <div className="h-6 w-10 bg-slate-200 rounded"></div>
                        <div className="h-6 w-10 bg-slate-200 rounded"></div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-200 p-4 z-40 safe-area-bottom shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <button 
          onClick={handleConversion}
          className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-transform"
        >
          {idea.cta}
        </button>
      </div>

    </div>
  );
};