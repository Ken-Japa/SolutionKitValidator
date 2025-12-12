/**
 * Tracks the "Fake Purchase" event in GA4 and handles redirection.
 * Based on the SolutionKit briefing.
 */
export const trackFakePurchase = (ideaName: string, navigate: (path: string) => void, lang: string = 'pt') => {
  const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

  // Log visual para o desenvolvedor confirmar que funcionou
  console.group('📊 Analytics Event Triggered');
  console.info('Event Name:', 'fake_purchase_attempt');
  console.info('Idea (Label):', ideaName);
  console.info('Language:', lang);
  console.info('Mode:', isProduction ? 'Production (Sending to GA)' : 'Development (Console Only)');
  console.groupEnd();

  if (isProduction && typeof window.gtag === 'function') {
    window.gtag('event', 'fake_purchase_attempt', {
      'event_category': 'Validation',
      'event_label': ideaName,
      'value': 1,
      'language': lang // Custom parameter for segmentation
    });
  } else if (!isProduction) {
    // Dev only feedback
    console.log('[Dev Mode] GA Event suppressed');
  } else {
    console.warn('⚠️ Google Analytics (gtag) not found. This is expected if adblocker is active.');
  }

  // Redireciona para a página de obrigado localizada
  let targetPath = '/obrigado';
  if (lang === 'en') targetPath = '/en/thank-you';
  else if (lang === 'es') targetPath = '/es/gracias';

  // Small delay to ensure GA request has time to fire (even though it's async)
  setTimeout(() => {
    navigate(targetPath);
  }, 300);
};