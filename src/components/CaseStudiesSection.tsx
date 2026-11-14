import React from 'react';
import { caseStudiesData } from '@/content/caseStudies';
import { ScrollReveal } from './ScrollReveal';
import { FacebookIcon } from './ui/FacebookIcon';
import { InstagramIcon } from './ui/InstagramIcon';
import { AnimatedCounter } from './ui/AnimatedCounter';
import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function CaseStudiesSection() {
  const verifiedEntries = caseStudiesData.entries.filter((e) => e.status === 'verified');
  const displayEntries = verifiedEntries.length > 0 ? verifiedEntries : caseStudiesData.entries;
  const isIllustrative = verifiedEntries.length === 0;

  return (
    <section id="case-studies" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card shadow-2xs mb-4">
              <div className="flex items-center gap-1.5 shrink-0">
                <FacebookIcon size={14} className="w-3.5 h-3.5" />
                <InstagramIcon size={14} className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-semibold uppercase tracking-eyebrow text-ink dark:text-white">
                {caseStudiesData.eyebrow}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink dark:text-white tracking-tighter leading-tight mb-4">
              {caseStudiesData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {caseStudiesData.leadText}
            </p>
          </div>
        </ScrollReveal>

        {/* Notice Banner */}
        {isIllustrative && (
          <ScrollReveal delayMs={50}>
            <div className="mb-8 rounded-xl border border-border border-l-4 border-l-accent p-5 sm:p-6 bg-card shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                  Operational Framework &amp; Verified Audit Standard
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted dark:text-gray-300 leading-relaxed font-normal">
                {caseStudiesData.statusPolicyNote} Below is a structured campaign audit demonstrating how ADrivera measures, evaluates, and presents advertising performance data.
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Case Study Cards */}
        <div className="space-y-10 mb-16">
          {displayEntries.map((study, idx) => (
            <ScrollReveal key={study.id} delayMs={idx * 60}>
              <div className="rounded-2xl border border-border bg-card shadow-xs overflow-hidden">
                {/* Entry Header */}
                <div className="p-6 sm:p-8 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-bg/50">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-muted uppercase tracking-wider">
                        {study.category} &bull; {study.ownership === 'founder-owned' ? 'Founder-Managed Venture' : 'Client Campaign'}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-tint text-accent border border-accent/20">
                        <FacebookIcon size={12} className="w-3 h-3" />
                        <InstagramIcon size={12} className="w-3 h-3" />
                        Meta Ads
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink dark:text-white tracking-tight">
                      {study.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-white">
                      {study.status === 'verified' ? 'Verified Client Data' : 'Performance Audit Model'}
                    </span>
                  </div>
                </div>

                {/* Parameters Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-border divide-y sm:divide-y-0 sm:divide-x divide-border bg-card text-xs sm:text-sm">
                  <div className="p-4 sm:p-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">
                      Campaign Objective
                    </span>
                    <span className="font-medium text-ink dark:text-white">{study.objective}</span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">
                      Campaign Duration
                    </span>
                    <span className="font-medium text-ink dark:text-white">{study.duration}</span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">
                      Platform Ad Spend
                    </span>
                    <span className="font-mono font-bold text-accent text-base">{study.spend}</span>
                  </div>
                </div>

                {/* Performance Metrics Table with Increasing Animated Numbers */}
                <div className="overflow-x-auto">
                  <table className="table-fixed w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-border bg-bg/40 text-[11px] font-mono uppercase text-muted tracking-wider">
                        <th className="w-1/5 p-4 sm:p-5 border-r border-border">Total Views (Impressions)</th>
                        <th className="w-1/5 p-4 sm:p-5 border-r border-border">Unique Reach</th>
                        <th className="w-1/5 p-4 sm:p-5 border-r border-border">Link Clicks</th>
                        <th className="w-1/5 p-4 sm:p-5 border-r border-border">Cost Per Click (CPC)</th>
                        <th className="w-1/5 p-4 sm:p-5">Inquiries Generated</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="divide-x divide-border font-mono text-base sm:text-lg text-ink dark:text-white tabular-nums">
                        <td className="p-4 sm:p-5 font-bold">
                          {study.numericImpressions ? (
                            <AnimatedCounter value={study.numericImpressions} />
                          ) : (
                            study.impressions
                          )}
                        </td>
                        <td className="p-4 sm:p-5 font-bold">
                          {study.numericReach ? (
                            <AnimatedCounter value={study.numericReach} />
                          ) : (
                            study.reach
                          )}
                        </td>
                        <td className="p-4 sm:p-5 font-bold">
                          {study.numericClicks ? (
                            <AnimatedCounter value={study.numericClicks} />
                          ) : (
                            study.clicks
                          )}
                        </td>
                        <td className="p-4 sm:p-5 font-bold text-accent">
                          {study.numericCpc ? (
                            <AnimatedCounter value={study.numericCpc} prefix="₹" decimals={2} />
                          ) : (
                            study.cpc
                          )}
                        </td>
                        <td className="p-4 sm:p-5 font-bold text-positive">
                          {study.numericEnquiries ? (
                            <AnimatedCounter value={study.numericEnquiries} />
                          ) : (
                            study.enquiries
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Context & Notes */}
                <div className="p-6 sm:p-8 border-t border-border bg-bg/30">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted block mb-2">
                    Campaign Context &amp; Observations
                  </span>
                  <p className="text-xs sm:text-sm text-ink/85 dark:text-gray-300 leading-relaxed font-normal">
                    {study.contextNotes}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Evaluation Guide */}
        <ScrollReveal delayMs={120}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="mb-6 pb-3 border-b border-border flex items-center justify-between">
              <span className="font-mono uppercase text-xs tracking-wider text-muted font-bold">
                Performance Evaluation Standards
              </span>
              <span className="text-[11px] font-mono text-muted">Zero Speculative Claims</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {caseStudiesData.definitions.map((def, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent inline-block flex-shrink-0" />
                    <h4 className="font-heading font-bold text-sm text-ink dark:text-white">
                      {def.term}
                    </h4>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-4">
                    {def.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
