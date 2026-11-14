import React from 'react';
import { brandBuildingData } from '@/content/visibility';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface BrandSectionProps {
  useSerifHeadline?: boolean;
}

export function BrandSection({ useSerifHeadline = false }: BrandSectionProps) {
  return (
    <section className="bg-[#0B1530] text-white py-20 sm:py-24 md:py-28 border-b border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <ScrollReveal>
          <div className="max-w-4xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-eyebrow text-blue-200 bg-white/5 border border-white/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              {brandBuildingData.eyebrow}
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.08] ${
                useSerifHeadline
                  ? 'font-serif font-normal'
                  : 'font-heading font-extrabold'
              }`}
            >
              {brandBuildingData.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* Two-Column Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal delayMs={60}>
              {brandBuildingData.leadLine && (
                <p className="text-white text-lg sm:text-xl font-medium leading-relaxed border-l-3 border-accent pl-4">
                  &ldquo;{brandBuildingData.leadLine}&rdquo;
                </p>
              )}

              {brandBuildingData.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-white/80 text-base sm:text-lg leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
            </ScrollReveal>
          </div>

          {/* Right Column: Five Opportunity Points Ruled List */}
          <div className="lg:col-span-6">
            <ScrollReveal delayMs={120}>
              <div className="mb-3">
                <span className="font-mono uppercase text-xs tracking-wider text-blue-200 font-semibold block">
                  The Blueprint for Brand Authority
                </span>
              </div>

              {brandBuildingData.opportunityIntro && (
                <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal mb-5">
                  {brandBuildingData.opportunityIntro}
                </p>
              )}

              <ul className="rounded-xl border border-white/15 divide-y divide-white/15 bg-white/[0.02] overflow-hidden">
                {brandBuildingData.opportunities.map((item, idx) => (
                  <li key={idx} className="p-4 sm:p-5 flex items-start gap-4 transition-colors hover:bg-white/[0.04]">
                    <span className="font-mono text-xs text-accent font-bold mt-0.5 flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-white/95 leading-relaxed font-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Pull Statement */}
        {brandBuildingData.pullStatement && (
          <ScrollReveal delayMs={150}>
            <div className="mt-12 sm:mt-16 p-8 sm:p-10 rounded-2xl border border-white/15 bg-gradient-to-r from-white/[0.05] to-transparent shadow-lg">
              <p className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                &ldquo;{brandBuildingData.pullStatement}&rdquo;
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Qualification Paragraph */}
        <ScrollReveal delayMs={180}>
          <div className="mt-8 rounded-xl border border-white/15 bg-white/[0.03] p-6 sm:p-7 flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <span className="font-mono uppercase text-xs tracking-wider text-white/70 font-semibold block mb-1">
                Commercial Reality &amp; Expectations
              </span>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-normal">
                {brandBuildingData.qualification}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
