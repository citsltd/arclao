import { useState, useEffect } from 'react';

interface UseCounterAnimationOptions {
  target: number;
  duration?: number;
  triggered?: boolean;
}

export function useCounterAnimation({ 
  target, 
  duration = 2000, 
  triggered = false 
}: UseCounterAnimationOptions) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(target * easeOutQuart));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [target, duration, triggered]);

  return count;
}
