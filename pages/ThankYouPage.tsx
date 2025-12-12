import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const translations: Record<string, {
  title: string;
  desc1: string;
  highlight: string;
  desc2: string;
  backBtn: string;
}> = {
  pt: {
    title: "Obrigado pelo interesse!",
    desc1: "Devido à alta demanda, estamos liberando os acessos em lotes controlados para garantir a melhor experiência.",
    highlight: "Você está no topo da lista e garantimos um super desconto vitalício no lançamento oficial.",
    desc2: "Fique atento ao seu e-mail, entraremos em contato em breve.",
    backBtn: "Voltar para Home"
  },
  en: {
    title: "Thank you for your interest!",
    desc1: "Due to high demand, we are releasing access in controlled batches to ensure the best experience.",
    highlight: "You are at the top of the list and we guarantee a huge lifetime discount at the official launch.",
    desc2: "Keep an eye on your email, we will be in touch shortly.",
    backBtn: "Back to Home"
  },
  es: {
    title: "¡Gracias por tu interés!",
    desc1: "Debido a la alta demanda, estamos liberando accesos en lotes controlados para garantizar la mejor experiencia.",
    highlight: "Estás en el tope de la lista y garantizamos un súper descuento vitalicio en el lanzamiento oficial.",
    desc2: "Mantente atento a tu correo, nos pondremos en contacto pronto.",
    backBtn: "Volver al inicio"
  }
};

export const ThankYouPage: React.FC = () => {
  const location = useLocation();
  
  let lang = 'pt';
  if (location.pathname.includes('/en/')) lang = 'en';
  else if (location.pathname.includes('/es/')) lang = 'es';

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {t.title}
        </h1>
        
        <div className="space-y-4 text-gray-600 mb-8">
          <p>
            {t.desc1}
          </p>
          <p className="font-medium text-brand-600 bg-brand-50 p-4 rounded-lg">
            {t.highlight}
          </p>
          <p className="text-sm">
            {t.desc2}
          </p>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center text-gray-500 hover:text-gray-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backBtn}
        </Link>
      </div>
    </div>
  );
};