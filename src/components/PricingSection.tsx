"use client";

import React, { useState } from "react";
import { pricingPlans } from "@/content/plans";
import { siteConfig } from "@/content/site";
import { ScrollReveal } from "./ScrollReveal";
import { Sparkles, Check, ArrowRight, ChevronDown, ChevronUp, Zap, Clock } from "lucide-react";

export function PricingSection() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const trialPlan = pricingPlans.find((p) => p.id === "trial");
  const mainPlans = pricingPlans.filter((p) => p.id !== "trial");

  const handleContactPlan = (planId: string) => {
    const plan = pricingPlans.find((item) => item.id === planId);
    if (!plan || typeof window === "undefined") return;

    const isTrial = plan.id === "trial";
    const message = isTrial
      ? `Hello ADrivera team, I want to start the 7-Day Trial (₹1,500) for my business. Please help me get started quickly.`
      : `Hello ADrivera team, I am interested in exploring the ${plan.name} Plan for ${plan.priceDisplay}/month. Please advise on the next steps to get started.`;

    if (
      siteConfig.contact.isWhatsappVerified &&
      siteConfig.contact.whatsappNumberPlaceholder
    ) {
      const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumberPlaceholder}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      return;
    }

    window.dispatchEvent(
      new CustomEvent("adrivera-select-plan", { detail: { plan: plan.id } }),
    );
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-b border-border bg-bg py-20 sm:py-24 md:py-28 relative overflow-hidden"
    >
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl sm:mb-16">
            <span className="mb-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-eyebrow text-accent bg-tint/60 dark:bg-card border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              03 / Pricing &amp; Packages
            </span>
            <h2 className="mb-4 font-heading text-3xl font-extrabold leading-tight tracking-tighter text-ink dark:text-white sm:text-4xl md:text-5xl">
              Predictable Pricing. All-Inclusive Ad Spend. Zero Surprises.
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Start with a 7-day trial for just ₹1,500 — or choose a full monthly plan. Every package includes Meta ad spend, creative, and management with zero hidden fees.
            </p>
          </div>
        </ScrollReveal>

        {/* Trial Plan Banner */}
        {trialPlan && (
          <ScrollReveal>
            <div className="mb-8 relative overflow-hidden rounded-2xl border-2 border-amber-400/60 bg-gradient-to-r from-amber-50 via-white to-amber-50 dark:from-amber-950/30 dark:via-card dark:to-amber-950/30 shadow-lg">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  {/* Left: Identity */}
                  <div className="flex items-start gap-4 lg:min-w-[220px]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 border border-amber-400/40">
                      <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Trial Plan</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-700 dark:text-amber-400 text-[10px] font-mono font-bold border border-amber-400/30">
                          <Clock className="w-3 h-3" />
                          7 Days
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-heading text-4xl font-extrabold tracking-tight text-ink dark:text-white tabular-nums">₹1,500</span>
                        <span className="text-sm font-medium text-muted">/ 7 days</span>
                      </div>
                      <p className="mt-1 text-xs text-muted">No monthly commitment required</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block w-px h-20 bg-border/60 shrink-0" />

                  {/* Centre: Features */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink dark:text-white mb-3">
                      {trialPlan.subtitle}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                      {trialPlan.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-ink/85 dark:text-gray-200">
                          <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: CTA */}
                  <div className="flex flex-col items-stretch lg:items-end gap-2 lg:min-w-[200px]">
                    <button
                      type="button"
                      onClick={() => handleContactPlan("trial")}
                      className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 px-6 font-semibold text-white shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Start Trial · ₹1,500</span>
                    </button>
                    <p className="text-[11px] text-center lg:text-right text-muted font-mono">
                      Try it for 1 week and see the results!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Monthly Plans Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {mainPlans.map((plan, index) => {
            const isExpanded = expandedPlan === plan.id;
            const isGrowth = plan.id === "growth";

            return (
              <article
                key={plan.id}
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ${
                  isGrowth
                    ? "border-accent bg-card dark:bg-card/95 shadow-xl ring-2 ring-accent/30 lg:-translate-y-2"
                    : "border-border bg-card dark:bg-card/80 shadow-sm hover:shadow-lg hover:border-accent/40"
                }`}
              >
                {isGrowth && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col">
                  {/* Plan Header */}
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                        Tier 0{index + 1}
                      </span>
                      <h3 className="font-heading text-2xl font-extrabold tracking-tight text-ink dark:text-white">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="mb-4 rounded-xl border border-border/80 bg-bg/50 p-4">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-ink dark:text-white tabular-nums">
                        {plan.priceDisplay}
                      </span>
                      <span className="text-xs font-medium text-muted">
                        {plan.billingPeriod}
                      </span>
                    </div>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-muted">
                      Complete all-inclusive package
                    </span>
                  </div>

                  <p className="mb-5 min-h-[58px] text-xs sm:text-sm leading-relaxed text-muted dark:text-gray-300">
                    {plan.subtitle}
                  </p>

                  {/* Ideal Fit Box */}
                  <div className="mb-5 rounded-xl border-l-3 border-accent bg-tint/40 dark:bg-card/90 p-4 border border-border/60">
                    <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                      Ideal Target Profile
                    </span>
                    <h4 className="mb-2 font-heading text-sm font-bold text-ink dark:text-white">
                      {plan.bestForLabel}
                    </h4>
                    <p className="mb-3 text-xs leading-relaxed text-muted dark:text-gray-300">
                      {plan.bestForDescription}
                    </p>
                    <ul className="space-y-1.5 text-xs text-ink/90 dark:text-gray-200">
                      {plan.bestForExamples.map((example) => (
                        <li key={example} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Plan Highlights */}
                  <div className="mb-6 space-y-2.5">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                      Key Capabilities
                    </span>
                    <ul className="space-y-2 text-xs text-ink/90 dark:text-gray-200">
                      {plan.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-positive mt-0.5 shrink-0" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Details Drawer */}
                  <div
                    id={`${plan.id}-details`}
                    aria-hidden={!isExpanded}
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                      isExpanded
                        ? "mb-6 grid-rows-[1fr] opacity-100"
                        : "mb-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-border pt-4">
                        <span className="mb-2.5 block font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                          Detailed Deliverables
                        </span>
                        <ul className="space-y-2 text-xs leading-relaxed text-ink/90 dark:text-gray-300">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {plan.limits.map((limit) => (
                            <li key={limit} className="flex items-start gap-2 text-muted">
                              <span className="w-1.5 h-1.5 rounded-full bg-muted/60 mt-1.5 shrink-0" />
                              <span>{limit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-auto space-y-2.5 border-t border-border pt-5">
                  <button
                    type="button"
                    onClick={() => handleContactPlan(plan.id)}
                    className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#1E4BD9] to-[#285BFF] hover:from-[#1A42C5] hover:to-[#2250EA] font-semibold text-white shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`${plan.id}-details`}
                    onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
                    className="flex h-10 w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-bg/50 hover:bg-tint/40 text-xs font-semibold text-ink dark:text-white transition-colors"
                  >
                    <span>{isExpanded ? "Hide Full Scope" : "View Full Scope"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Trial reminder below monthly plans */}
        <ScrollReveal delayMs={100}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-amber-400/30 bg-amber-50/50 dark:bg-amber-950/20 px-6 py-4">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <p className="text-sm font-medium text-ink dark:text-white">
                Not ready for a monthly plan yet?{" "}
                <span className="font-bold text-amber-700 dark:text-amber-400">Try it for just ₹1,500 for 7 days</span> — no commitment needed.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleContactPlan("trial")}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Start 7-Day Trial
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
