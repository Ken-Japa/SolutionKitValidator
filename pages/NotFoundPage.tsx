import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-orange-500" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">404</h1>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Página não encontrada</h2>
        <p className="text-gray-500 mb-8">
          O link que você tentou acessar não existe ou foi movido.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl"
        >
          <Home className="w-4 h-4 mr-2" />
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
};