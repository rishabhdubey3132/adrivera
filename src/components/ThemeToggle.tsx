'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  variant?: 'icon' | 'pill' | 'segmented' | 'switch';
  size?: 'sm' | 'md' | 'lg';
}

export function ThemeToggle({
  className = '',
  variant = 'icon',
  size = 'md',
}: ThemeToggleProps) {
  let themeContext: ReturnType<typeof useTheme> | null = null;
  try {
    themeContext = useTheme();
  } catch {
    // If used outside ThemeProvider
  }

  const { theme, setTheme, toggleTheme } = themeContext ?? {
    theme: 'system',
    setTheme: () => {},
    toggleTheme: () => {}
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-md border border-border bg-bg/80 backdrop-blur-sm gap-1 ${className}`}
        role="group"
        aria-label="Theme selection"
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded transition-all duration-200 ${
            mounted && theme === 'light'
              ? 'bg-card text-ink shadow-sm border border-border font-semibold'
              : 'text-muted hover:text-ink hover:bg-tint/40'
          }`}
          aria-pressed={mounted && theme === 'light'}
          title="Force light theme"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Light</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded transition-all duration-200 ${
            mounted && theme === 'dark'
              ? 'bg-card text-ink shadow-sm border border-border font-semibold'
              : 'text-muted hover:text-ink hover:bg-tint/40'
          }`}
          aria-pressed={mounted && theme === 'dark'}
          title="Force dark theme"
        >
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
          <span>Dark</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('system')}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded transition-all duration-200 ${
            mounted && theme === 'system'
              ? 'bg-card text-ink shadow-sm border border-border font-semibold'
              : 'text-muted hover:text-ink hover:bg-tint/40'
          }`}
          aria-pressed={mounted && theme === 'system'}
          title="Follow operating system preference"
        >
          <Monitor className="w-3.5 h-3.5 text-muted" />
          <span>Auto</span>
        </button>
      </div>
    );
  }

  if (variant === 'switch') {
    return (
      <button
        type="button"
        role="switch"
        onClick={toggleTheme}
        suppressHydrationWarning
        className={`group relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-border/80 bg-slate-100 dark:bg-slate-900 dark:border-indigo-500/40 border-amber-300/60 p-0.5 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-sm ${className}`}
        aria-label="Toggle dark and light theme"
        title="Toggle dark and light theme"
      >
        <span
          className="pointer-events-none flex h-6 w-6 items-center justify-center rounded-full shadow-sm ring-0 transition-transform duration-200 ease-in-out translate-x-0 dark:translate-x-6 bg-white dark:bg-slate-800"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500 block dark:hidden" />
          <Moon className="w-3.5 h-3.5 text-sky-400 hidden dark:block" />
        </span>
      </button>
    );
  }

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        suppressHydrationWarning
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-tint/50 text-ink text-xs font-mono font-medium transition-all duration-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${className}`}
        aria-label="Toggle dark and light theme"
        title="Toggle dark and light theme"
      >
        <span className="relative flex items-center justify-center w-4 h-4">
          <Sun className="w-3.5 h-3.5 text-amber-500 block dark:hidden" />
          <Moon className="w-3.5 h-3.5 text-sky-400 hidden dark:block" />
        </span>
        <span className="capitalize block dark:hidden">Light mode</span>
        <span className="capitalize hidden dark:block">Dark mode</span>
      </button>
    );
  }

  // Default 'icon' button variant
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9 rounded-md',
    md: 'w-9 h-9 sm:w-10 sm:h-10 rounded-lg',
    lg: 'w-11 h-11 rounded-lg',
  }[size];

  const iconSizes = {
    sm: 'w-4 h-4 sm:w-[17px] sm:h-[17px]',
    md: 'w-4 h-4 sm:w-[18px] sm:h-[18px]',
    lg: 'w-5 h-5',
  }[size];

  return (
    <button
      type="button"
      onClick={toggleTheme}
      suppressHydrationWarning
      className={`group relative inline-flex items-center justify-center cursor-pointer border border-border/80 bg-card/80 hover:bg-tint/60 text-ink transition-all duration-200 shadow-sm hover:shadow active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent backdrop-blur-md select-none shrink-0 ${sizeClasses} ${className}`}
      aria-label="Toggle dark and light theme"
      title="Toggle theme (Dark / Light)"
    >
      <span className="relative flex items-center justify-center w-full h-full pointer-events-none">
        <Sun
          className={`${iconSizes} text-amber-500 transition-transform duration-300 group-hover:rotate-45 block dark:hidden`}
          aria-hidden="true"
        />
        <Moon
          className={`${iconSizes} text-sky-400 transition-transform duration-300 group-hover:-rotate-12 hidden dark:block`}
          aria-hidden="true"
        />
      </span>
      <span className="sr-only">Toggle dark and light theme</span>
    </button>
  );
}

export default ThemeToggle;
