import React from 'react';
import { trustContent } from '@/content/promises';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export function TrustSection() {
  return (
    <section id="trust" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="mb-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-eyebrow text-accent bg-tint/60 dark:bg-card border border-accent/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              {trustContent.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink dark:text-white tracking-tighter leading-tight mb-4">
              {trustContent.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* The Promise Paragraph Block */}
        <ScrollReveal delayMs={50}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 mb-12 shadow-xs">
            <div className="space-y-4 max-w-4xl">
              {trustContent.promiseParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`leading-relaxed text-sm sm:text-base ${
                    idx === 2
                      ? 'font-medium text-ink dark:text-white pt-3 border-t border-border/60'
                      : 'text-muted dark:text-gray-300 font-normal'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Two-Column Ruled Accountability Layout */}
        <ScrollReveal delayMs={100}>
          <div className="rounded-2xl border border-border bg-card grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border shadow-xs overflow-hidden">
            {/* Left Column: Agency Commitments */}
            <div className="p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink dark:text-white tracking-tight">
                    ADrivera Operational Commitments:
                  </h3>
                </div>

                <ul className="space-y-4">
                  {trustContent.agencyResponsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink/90 dark:text-gray-200">
                      <span className="font-mono text-xs font-bold text-accent mt-0.5 flex-shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 text-[11px] font-mono text-muted uppercase">
                ADrivera Agency Standard
              </div>
            </div>

            {/* Right Column: Customer Responsibilities */}
            <div className="p-6 sm:p-10 flex flex-col justify-between bg-bg/40">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <span className="w-2.5 h-2.5 rounded-full bg-ink dark:bg-white flex-shrink-0" />
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink dark:text-white tracking-tight">
                    Client Partnership Expectations:
                  </h3>
                </div>

                <ul className="space-y-4">
                  {trustContent.customerResponsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink/90 dark:text-gray-200">
                      <span className="font-mono text-xs font-bold text-ink dark:text-white mt-0.5 flex-shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 text-[11px] font-mono text-muted uppercase">
                Client Collaboration Standard
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Commitment Summary Note */}
        <ScrollReveal delayMs={140}>
          <div className="mt-8 rounded-xl border border-border p-5 sm:p-6 bg-card flex items-start gap-3.5 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
              {trustContent.commitmentNote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
