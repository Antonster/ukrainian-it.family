import { useEffect, useState } from 'react';

export const useOnScreen = (ref, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observerRefValue = null;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      rootMargin,
    });

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue == null) {
        return;
      }

      observer.unobserve(observerRefValue);
    };
  }, [ref, rootMargin]);

  return isVisible;
};
