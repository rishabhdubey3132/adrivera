'use client';

import React, { useState, useEffect } from 'react';
import { X, TrendingUp } from 'lucide-react';

/**
 * Calculates a deterministic daily counter starting from 4 or 5 at midnight IST
 * and increasing realistically throughout the day, staying strictly under 15 (< 15).
 * All visitors see the exact same synchronized count at any given minute.
 */
function calculateISTCounter() {
  const now = new Date();

  // Parse current date & time in Indian Standard Time (Asia/Kolkata)
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const getPart = (type: string) =>
    parseInt(parts.find((p) => p.type === type)?.value || '0', 10);

  const year = getPart('year');
  const month = getPart('month');
  const day = getPart('day');
  const rawHour = getPart('hour');
  const hour = rawHour === 24 ? 0 : rawHour;
  const minute = getPart('minute');
  const second = getPart('second');

  // Seed uniquely per day (e.g. 20261105)
  const dateSeed = year * 10000 + month * 100 + day;

  // Base count starts at 4 or 5 depending on the day
  const baseCount = dateSeed % 2 === 0 ? 4 : 5;
  const maxCount = 14; // Must strictly stay less than 15

  const elapsedSeconds = (hour * 60 + minute) * 60 + second;

  // Compute scheduled increments throughout the day
  // Average interval of ~2.2 - 2.8 hours (7200 - 10200 seconds) so count reaches 11-14 by evening
  let accumulatedSeconds = 0;
  let step = 0;
  let count = baseCount;
  let nextStepSeconds = 86400; // end of day fallback

  while (accumulatedSeconds < 86400 && count < maxCount) {
    const seed = dateSeed + step * 137.5;
    const pseudoRand = Math.abs(Math.sin(seed) * 10000) % 1;
    const intervalSec = 7200 + Math.floor(pseudoRand * 3001);

    accumulatedSeconds += intervalSec;

    if (accumulatedSeconds <= elapsedSeconds) {
      if (count < maxCount) {
        count++;
      }
    } else {
      nextStepSeconds = accumulatedSeconds;
      break;
    }
    step++;
  }

  // Ensure count is strictly bounded under 15
  const finalCount = Math.min(maxCount, Math.max(baseCount, count));
  const secondsUntilNext = Math.max(1, nextStepSeconds - elapsedSeconds);

  return {
    count: finalCount,
    secondsUntilNext,
  };
}

export function LiveCustomerCounter() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState<number>(5);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if user previously closed it manually via 'X' during this browsing session
    try {
      const dismissed = sessionStorage.getItem('adrivera-counter-dismissed');
      if (dismissed === 'true') {
        setIsDismissed(true);
        return;
      }
    } catch {
      // Ignore storage errors in private browsing
    }

    // Trigger smooth fade-in after mounting
    const enterTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Auto-dismiss automatically after 5 seconds
    const autoDismissTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsDismissed(true);
      }, 400); // Wait for transition duration
    }, 5000);

    let timeoutId: NodeJS.Timeout;

    const updateCounter = () => {
      const data = calculateISTCounter();
      setCount((prev) => {
        if (prev !== data.count && mounted) {
          setIsIncrementing(true);
          setTimeout(() => setIsIncrementing(false), 2000);
        }
        return data.count;
      });

      // Schedule exact next increment
      timeoutId = setTimeout(updateCounter, data.secondsUntilNext * 1000);
    };

    updateCounter();

    // Heartbeat check every 45s in case device woke up or tab was inactive
    const intervalId = setInterval(() => {
      const data = calculateISTCounter();
      setCount(data.count);
    }, 45000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(autoDismissTimer);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [mounted]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
      try {
        sessionStorage.setItem('adrivera-counter-dismissed', 'true');
      } catch {
        // Ignore storage errors
      }
    }, 300);
  };

  // Prevent hydration mismatch
  if (!mounted || isDismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Real-time Client Activity"
      className={`fixed bottom-[74px] md:bottom-6 left-3 right-3 md:right-auto md:left-6 z-40 max-w-sm transition-all duration-400 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
      }`}
    >
      <div className="relative overflow-hidden rounded-lg border border-border bg-card/95 backdrop-blur-md p-3.5 shadow-xl transition-shadow duration-200 hover:shadow-2xl">
        {/* Subtle accent border indicator */}
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent" />

        <div className="pl-1.5">
          {/* Top meta row */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-positive opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-positive" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-positive">
                Live Today
              </span>
              <span className="text-[10px] text-muted font-mono">· Real-Time</span>
            </div>

            <button
              type="button"
              onClick={handleDismiss}
              className="text-muted hover:text-ink p-1 -mr-1 -mt-1 rounded hover:bg-tint/50 transition-colors"
              aria-label="Dismiss live counter"
              title="Band karein"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Main content statement in Hinglish */}
          <div className="flex items-start gap-2.5">
            <div className="pt-0.5 text-accent flex-shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>

            <div>
              <p className="text-xs sm:text-sm font-medium text-ink leading-snug">
                <span
                  className={`font-heading font-extrabold text-accent text-sm sm:text-base mr-1 inline-block transition-transform duration-300 ${
                    isIncrementing ? 'scale-125 text-positive' : 'scale-100'
                  }`}
                >
                  {count}
                </span>
                <span>
                  business owners hamare saath real time mein jud chuke hai
                </span>
              </p>

              <div className="mt-1.5 flex items-center justify-between text-[11px]">
                <a
                  href="/#pricing"
                  className="font-mono text-accent hover:underline flex items-center gap-1 font-semibold"
                >
                  Plans dekhein &rarr;
                </a>
                <span className="text-muted font-mono text-[10px]">
                  Bhopal & India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
