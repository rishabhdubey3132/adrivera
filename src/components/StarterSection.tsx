'use client';

import React from 'react';
import { starterSectionData } from '@/content/plans';
import { siteConfig } from '@/content/site';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export function StarterSection() {
  const trialWhatsAppUrl = `https://wa.me/${
    siteConfig.contact.whatsappNumberPlaceholder
  }?text=${encodeURIComponent(
    'Hello ADrivera team, I want to start the 7-Day Trial (₹1,500) for my business. Please help me get started quickly.'
  )}`;

  const starterWhatsAppUrl = `https://wa.me/${
    siteConfig.contact.whatsappNumberPlaceholder
  }?text=${encodeURIComponent(
    'Hello ADrivera team, I am interested in testing the Starter plan (₹5,000/month) for my business in Bhopal. Please guide me on getting started.'
  )}`;

  return (
    <section className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="mb-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-eyebrow text-accent bg-tint/60 dark:bg-card border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              {starterSectionData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink dark:text-white tracking-tighter leading-tight mb-4">
              {starterSectionData.headline}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal delayMs={50}>
              {starterSectionData.leadLine && (
                <p className="text-ink dark:text-white text-lg sm:text-xl font-medium leading-relaxed border-l-3 border-accent pl-4 mb-6">
                  &ldquo;{starterSectionData.leadLine}&rdquo;
                </p>
              )}

              {starterSectionData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-muted text-base sm:text-lg leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={trialWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 min-h-[48px] px-6 text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Zap className="w-4 h-4" />
                  <span>Start 7-Day Trial · ₹1,500</span>
                </a>
                <a
                  href="#enquiry"
                  onClick={(e) => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(
                        new CustomEvent('adrivera-select-plan', { detail: { plan: 'starter' } })
                      );
                      const el = document.getElementById('enquiry');
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-2 min-h-[48px] px-6 text-sm font-semibold text-ink dark:text-white border border-border bg-card hover:border-accent/40 hover:bg-tint/40 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Starter Plan · ₹5,000/mo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Plan Comparison Card */}
          <div className="lg:col-span-6">
            <ScrollReveal delayMs={100}>
              <div className="rounded-2xl border border-border bg-card shadow-xs overflow-hidden">
                {/* Trial row */}
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6 bg-amber-50/60 dark:bg-amber-950/20 border-b border-amber-400/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">Trial Plan</span>
                      <span className="font-heading text-lg font-extrabold text-ink dark:text-white tabular-nums">₹1,500 <span className="text-xs font-normal text-muted">/ 7 days</span></span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold">No monthly lock-in</span>
                </div>

                {/* Starter row */}
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6 border-b border-border">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted block">Starter Plan</span>
                    <span className="font-heading text-lg font-extrabold text-ink dark:text-white tabular-nums">₹5,000 <span className="text-xs font-normal text-muted">/ month</span></span>
                  </div>
                  <span className="text-xs font-mono text-muted">First-time advertisers</span>
                </div>

                {/* Quote / Philosophy */}
                <div className="p-5 sm:p-6 border-b border-border">
                  <blockquote className="text-sm sm:text-base text-ink dark:text-white font-medium leading-relaxed">
                    &ldquo;{starterSectionData.hindiQuote}&rdquo;
                  </blockquote>
                  <div className="mt-3 font-mono text-[10px] text-muted uppercase tracking-wider">
                    {starterSectionData.hindiNote}
                  </div>
                </div>

                <div className="px-5 sm:px-6 py-4 flex items-center justify-between text-xs text-muted font-mono">
                  <span>Evaluation &amp; Testing</span>
                  <span>Scope Confirmed Prior to Launch</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Qualification Clarification */}
        <ScrollReveal delayMs={150}>
          <div className="mt-10 rounded-xl border border-border p-5 sm:p-6 bg-card flex items-start gap-3.5 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
              {starterSectionData.qualification}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

