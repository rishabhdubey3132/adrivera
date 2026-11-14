import React from 'react';
import { processData } from '@/content/process';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ProcessSection() {
  return (
    <section id="our-approach" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="mb-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-eyebrow text-accent bg-tint/60 dark:bg-card border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              {processData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink dark:text-white tracking-tighter leading-tight mb-4">
              {processData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {processData.leadText}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps in Connected Grid */}
        <div className="rounded-2xl border border-border bg-card divide-y md:divide-y-0 md:divide-x divide-border grid grid-cols-1 md:grid-cols-4 overflow-hidden shadow-xs">
          {processData.steps.map((step, idx) => (
            <ScrollReveal key={step.step} delayMs={idx * 50}>
              <div className="group p-6 sm:p-8 flex flex-col justify-between h-full relative transition-all duration-200 hover:bg-tint/30 dark:hover:bg-card/70">
                <div>
                  {/* Top Indicator & Large Numeral */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      aria-hidden="true"
                      className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink/20 dark:text-white/20 tabular-nums tracking-tighter select-none group-hover:text-accent/60 transition-colors"
                    >
                      {step.step}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block flex-shrink-0" />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading font-bold text-ink dark:text-white text-lg sm:text-xl tracking-tight mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted dark:text-gray-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Order Label */}
                <div className="mt-8 pt-4 border-t border-border/70 text-[11px] font-mono text-muted uppercase tracking-wider flex items-center justify-between">
                  <span>Phase 0{idx + 1} of 04</span>
                  {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-accent opacity-50 hidden md:inline-block" />}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footnote */}
        <ScrollReveal delayMs={150}>
          <div className="mt-8 rounded-xl border border-border p-5 sm:p-6 bg-card flex items-start gap-3.5 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-ink/90 dark:text-gray-200 font-medium leading-relaxed">
              {processData.footnote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
