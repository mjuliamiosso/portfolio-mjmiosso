// hooks/useScrollAwareness.ts
import { useState, useEffect, useCallback } from 'react';

interface UseScrollAwarenessOptions {
  threshold?: number;
}

const useScrollAwareness = ({ threshold = 50 }: UseScrollAwarenessOptions = {}) => {
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > threshold && !scrolledPastThreshold) {
      setScrolledPastThreshold(true);
    } else if (scrollY <= threshold && scrolledPastThreshold) {
      setScrolledPastThreshold(false);
    }
  }, [threshold, scrolledPastThreshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrolledPastThreshold;
};

export default useScrollAwareness;