import React from 'react';
import { siteConfig, getRenderableStats } from '@/content/site';
import { proofData } from '@/content/proof';
import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';
import { AnimatedCounter } from './ui/AnimatedCounter';
import { CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export function ProofSection() {
  const verifiedStats = getRenderableStats(siteConfig.verifiedStats);
  const hasVerifiedData = verifiedStats.length > 0;

  return (
    <section id="proof" className="py-16 md:py-24 border-b border-border bg-bg relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-12">
            <Eyebrow number="02" label={proofData.eyebrow} />
            <h2 className="font-heading font-extrabold text-ink dark:text-white text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-snugger mb-4">
              {proofData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {proofData.leadText}
            </p>
          </div>
        </Reveal>

        {/* Dynamic Stat Layout with Animated Counter Numbers */}
        {hasVerifiedData && (
          <Reveal delayMs={80}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {verifiedStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[#3D71FF] to-[#6392FF] opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Meta & Verified Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                        Metric 0{idx + 1}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-positive/10 text-positive border border-positive/20">
                        <ShieldCheck className="w-3 h-3" />
                        Verified Data
                      </span>
                    </div>

                    {/* Large Animated Numeral */}
                    <div className="font-heading font-extrabold text-ink dark:text-white text-4xl sm:text-5xl tracking-tightest tabular-nums mb-3 text-accent dark:text-[#5A8AFF]">
                      {stat.numericValue !== undefined ? (
                        <AnimatedCounter
                          value={stat.numericValue}
                          prefix={stat.prefix || ''}
                          suffix={stat.suffix || ''}
                          decimals={stat.decimals || 0}
                        />
                      ) : (
                        stat.value
                      )}
                    </div>

                    {/* Definition Line */}
                    <div className="text-sm font-semibold text-ink dark:text-white leading-snug mb-3">
                      {stat.definition}
                    </div>
                  </div>

                  {/* Source Line */}
                  <div className="text-xs font-mono text-muted pt-3 border-t border-border/70 flex items-center justify-between">
                    <span>Source: {stat.source}</span>
                    <TrendingUp className="w-3.5 h-3.5 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* Operational Quality Standards Grid */}
        <Reveal delayMs={120}>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 mb-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink dark:text-white block mb-1">
                  Transparent Performance Standards
                </span>
                <p className="text-xs text-muted">
                  We deploy rigorous testing frameworks with complete budget visibility and verified platform reporting.
                </p>
              </div>
              <span className="self-start sm:self-auto text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border border-border text-muted bg-bg shadow-2xs">
                Zero Speculative Claims
              </span>
            </div>

            {/* 3 Pillars of Practical Experience */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-muted leading-relaxed">
              <div className="rounded-lg border border-border p-5 bg-bg/50 transition-all hover:border-accent/30 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-accent text-[11px] font-bold block mb-1">
                    01 / AUDIENCE RESEARCH
                  </span>
                  <h3 className="font-heading font-bold text-ink dark:text-white text-sm mb-2">
                    Hyper-Local Radius Profiling
                  </h3>
                  <p>
                    Precision geo-radius, demographic filtering, and interest targeting tailored directly to Bhopal&apos;s commercial hubs.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-border/60 text-[10px] font-mono text-muted">
                  Continuous Demographic Calibration
                </div>
              </div>

              <div className="rounded-lg border border-border p-5 bg-bg/50 transition-all hover:border-accent/30 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-accent text-[11px] font-bold block mb-1">
                    02 / CREATIVE ENGINEERING
                  </span>
                  <h3 className="font-heading font-bold text-ink dark:text-white text-sm mb-2">
                    Multi-Format Visuals &amp; Reels
                  </h3>
                  <p>
                    Designing native 4:5 Feed posts and engaging 9:16 vertical video Reels crafted to capture high-intent local customer attention.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-border/60 text-[10px] font-mono text-muted">
                  A/B Creative Asset Testing
                </div>
              </div>

              <div className="rounded-lg border border-border p-5 bg-bg/50 transition-all hover:border-accent/30 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-accent text-[11px] font-bold block mb-1">
                    03 / TRANSPARENCY
                  </span>
                  <h3 className="font-heading font-bold text-ink dark:text-white text-sm mb-2">
                    Clear Ad Spend Allocation
                  </h3>
                  <p>
                    Complete clarity on the split between Meta platform ad budget and agency management fee from day one.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-border/60 text-[10px] font-mono text-muted">
                  Zero Hidden Markups
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Claims Policy Note */}
        <Reveal delayMs={140}>
          <div className="rounded-lg border border-border p-4 sm:p-5 bg-bg text-xs text-muted leading-relaxed flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-ink dark:text-white uppercase tracking-wider block mb-0.5 font-mono text-[11px]">
                Commercial Claims Policy
              </span>
              <p>{proofData.claimsNotice}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
