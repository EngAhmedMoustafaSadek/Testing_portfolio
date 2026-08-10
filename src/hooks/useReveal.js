// src/hooks/useReveal.js
// One IntersectionObserver replaces the four unthrottled scroll listeners the
// previous build used. Reveals once, then stops observing.

import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function useReveal() {
  const ref = useRef(null);
  // Reduced motion and browsers without IntersectionObserver start visible.
  const [isVisible, setIsVisible] = useState(
    () =>
      prefersReducedMotion() ||
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window)
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible };
}
