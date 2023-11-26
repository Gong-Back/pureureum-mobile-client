import { useEffect, useRef } from 'react';

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  // eslint-disable-next-line no-undef
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  root,
  rootMargin = '0px',
  threshold = 0,
  onIntersect,
}: useIntersectionObserverProps) => {
  const targetRef = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;
    observerRef.current = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });
    observerRef.current.observe(targetRef.current);

    // eslint-disable-next-line consistent-return
    return () => {
      if (observerRef.current && targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observerRef.current.unobserve(targetRef.current);
      }
    };
  }, [onIntersect, root, rootMargin, targetRef, threshold]);

  return { targetRef };
};

export default useIntersectionObserver;
