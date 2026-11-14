'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1400,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Respect reduced motion accessibility setting
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayValue(value);
      return;
    }

    let isCancelled = false;
    let animFrame: number;
    let hasStarted = false;

    const startAnimation = () => {
      if (hasStarted || isCancelled) return;
      hasStarted = true;

      const startTime = performance.now();

      const step = (now: number) => {
        if (isCancelled) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic ease-out: 1 - (1 - t)^3
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = easeOut * value;

        setDisplayValue(current);

        if (progress < 1) {
          animFrame = requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };

      animFrame = requestAnimationFrame(step);
    };

    // Check if element is already in or near viewport (e.g. Hero stats)
    let initialTimer: NodeJS.Timeout | null = null;
    const rect = el.getBoundingClientRect();
    const isVisibleNow =
      rect.top < (window.innerHeight || document.documentElement.clientHeight) + 100 &&
      rect.bottom > -50;

    if (isVisibleNow) {
      initialTimer = setTimeout(startAnimation, 100);
    }

    // IntersectionObserver triggers when element scrolls into view
    let observer: IntersectionObserver | null = null;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            startAnimation();
            observer?.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '80px 0px' }
      );
      observer.observe(el);
    } else {
      startAnimation();
    }

    // Safety timeout: ensure value is ALWAYS displayed even if observer is bypassed
    const safetyTimeout = setTimeout(() => {
      if (!isCancelled) {
        startAnimation();
      }
    }, 700);

    return () => {
      isCancelled = true;
      if (initialTimer) clearTimeout(initialTimer);
      clearTimeout(safetyTimeout);
      if (observer) observer.disconnect();
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, [value, duration]);

  const formattedNumber =
    decimals > 0
      ? displayValue.toLocaleString('en-IN', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : Math.round(displayValue).toLocaleString('en-IN');

  return (
    <span ref={elementRef} className={`tabular-nums inline-block ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
