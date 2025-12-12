import { describe, it, expect } from 'vitest';
import { ideas as ideasPt } from '../data';
import { ideasEn } from '../data-en';
import { ideasEs } from '../data-es';

describe('Data Integrity & Translation Sync', () => {
  
  it('should have exactly 25 ideas in all languages', () => {
    expect(ideasPt.length).toBe(25);
    expect(ideasEn.length).toBe(25);
    expect(ideasEs.length).toBe(25);
  });

  it('should match slugs across all languages', () => {
    // We iterate through the Portuguese list as the "source of truth"
    ideasPt.forEach((ideaPt, index) => {
      const ideaEn = ideasEn[index];
      const ideaEs = ideasEs[index];

      // Ensure the array order is the same (critical for batch processing)
      expect(ideaEn.slug).toBe(ideaPt.slug);
      expect(ideaEs.slug).toBe(ideaPt.slug);
    });
  });

  it('should have critical content fields filled', () => {
    const allIdeas = [...ideasPt, ...ideasEn, ...ideasEs];

    allIdeas.forEach(idea => {
      // SEO
      expect(idea.seoTitle).toBeTruthy();
      expect(idea.seoTitle.length).toBeGreaterThan(10);

      // Pricing
      expect(idea.pricing.value).toBeTruthy();
      expect(idea.pricing.period).toBeTruthy();

      // CTA
      expect(idea.cta).toBeTruthy();

      // Features
      expect(idea.features.length).toBeGreaterThan(0);
    });
  });

  it('should ensure valid icon names in features', () => {
    const validIcons = ['check', 'zap', 'shield', 'clock'];
    const allIdeas = [...ideasPt, ...ideasEn, ...ideasEs];

    allIdeas.forEach(idea => {
      idea.features.forEach(feature => {
        expect(validIcons).toContain(feature.icon);
      });
    });
  });

});