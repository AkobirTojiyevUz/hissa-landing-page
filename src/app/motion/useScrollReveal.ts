import { useEffect } from 'react';
import AOS from 'aos';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Initialises AOS scroll-reveal once and re-scans the DOM whenever `routeKey`
 * changes (the app swaps pages by hash, so new `data-aos` nodes appear without
 * a full reload).
 */
export function useScrollReveal(routeKey: string) {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      offset: 40,
      once: true,
      disable: prefersReducedMotion,
    });
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => AOS.refreshHard());
    return () => window.cancelAnimationFrame(id);
  }, [routeKey]);
}

type RevealEffect = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'zoom-in';

/**
 * Spreadable AOS attributes, e.g. `<div {...reveal('fade-up', 100)}>`.
 * Keeps effect names and delays typed instead of free-form strings.
 */
export function reveal(effect: RevealEffect = 'fade-up', delay = 0) {
  return delay > 0
    ? { 'data-aos': effect, 'data-aos-delay': String(delay) }
    : { 'data-aos': effect };
}
