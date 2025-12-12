import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { IdeaLandingPage } from './pages/IdeaLandingPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/sitemap" element={<Layout><SitemapPage /></Layout>} />
          
          {/* Portuguese (Default) */}
          <Route path="/ideia/:slug" element={<Layout><IdeaLandingPage /></Layout>} />
          
          {/* English */}
          <Route path="/en/:slug" element={<Layout><IdeaLandingPage /></Layout>} />
          
          {/* Spanish */}
          <Route path="/es/:slug" element={<Layout><IdeaLandingPage /></Layout>} />
          
          {/* Thank You Pages */}
          <Route path="/obrigado" element={<Layout><ThankYouPage /></Layout>} />
          <Route path="/en/thank-you" element={<Layout><ThankYouPage /></Layout>} />
          <Route path="/es/gracias" element={<Layout><ThankYouPage /></Layout>} />

          {/* 404 Catch-all */}
          <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;