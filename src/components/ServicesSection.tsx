import React from 'react';
import { servicesData } from '@/content/services';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function ServicesSection() {
  return (
    <section id="what-we-do" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="mb-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-eyebrow text-accent bg-tint/60 dark:bg-card border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              {servicesData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink dark:text-white tracking-tighter leading-tight mb-4">
              {servicesData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {servicesData.leadText}
            </p>
          </div>
        </ScrollReveal>

        {/* Seven-Row Service Grid */}
        <div className="rounded-2xl border border-border divide-y divide-border bg-card overflow-hidden shadow-xs">
          {servicesData.items.map((item, idx) => (
            <ScrollReveal key={item.number} delayMs={idx * 30}>
              <div className="group py-6 sm:py-7 px-5 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline transition-all duration-200 hover:bg-tint/40 dark:hover:bg-card/70">
                {/* Left: Number & Service Name */}
                <div className="md:col-span-5 lg:col-span-4 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs sm:text-sm font-bold text-accent tracking-wider flex-shrink-0">
                    {item.number}
                  </span>
                  <h3 className="font-heading font-bold text-ink dark:text-white text-lg sm:text-xl tracking-tight group-hover:text-accent transition-colors flex items-center gap-2">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-accent hidden sm:inline-block" />
                  </h3>
                </div>

                {/* Right: Plain-Language Description */}
                <div className="md:col-span-7 lg:col-span-8 pl-8 md:pl-0">
                  <p className="text-sm sm:text-base text-muted dark:text-gray-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
