
import { useState, useEffect } from 'react';

const useAnimatedCounter = (endValue: number, duration: number = 1500, isActive: boolean): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * endValue);
      setCount(currentCount);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration, isActive]);

  return count;
};

export default useAnimatedCounter;
