import React from 'react';
import { platformsData } from '@/content/platforms';
import { ScrollReveal } from './ScrollReveal';
import { FacebookIcon } from './ui/FacebookIcon';
import { InstagramIcon } from './ui/InstagramIcon';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function PlatformsSection() {
  return (
    <section id="our-approach" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg relative overflow-hidden">
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
                {platformsData.eyebrow}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink dark:text-white tracking-tighter leading-tight mb-4">
              {platformsData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {platformsData.leadText}
            </p>
          </div>
        </ScrollReveal>

        {/* Line-Art SVG Wireframes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {/* Wireframe 1: Feed */}
          <ScrollReveal delayMs={40}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 flex flex-col h-full shadow-xs transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
                  <FacebookIcon size={14} className="w-3.5 h-3.5" />
                  <InstagramIcon size={14} className="w-3.5 h-3.5" />
                  4:5 Feed Post
                </span>
                <span className="text-[11px] font-mono text-muted uppercase">
                  Feed Environment
                </span>
              </div>

              {/* SVG Wireframe */}
              <div className="py-2 flex justify-center items-center flex-grow">
                <svg
                  viewBox="0 0 240 330"
                  className="w-full max-w-[240px] h-auto text-ink"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    y="5"
                    width="230"
                    height="320"
                    rx="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-border dark:stroke-border-dark fill-card"
                  />
                  <circle
                    cx="26"
                    cy="26"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-border dark:stroke-border-dark fill-tint"
                  />
                  <line
                    x1="44"
                    y1="22"
                    x2="110"
                    y2="22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-ink dark:stroke-white"
                  />
                  <line
                    x1="44"
                    y1="30"
                    x2="85"
                    y2="30"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                    className="stroke-muted"
                  />
                  <circle cx="212" cy="26" r="1.5" className="fill-muted" />
                  <circle cx="218" cy="26" r="1.5" className="fill-muted" />
                  <circle cx="224" cy="26" r="1.5" className="fill-muted" />

                  <rect
                    x="20"
                    y="46"
                    width="200"
                    height="165"
                    rx="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-border dark:stroke-border-dark fill-bg"
                  />
                  <line
                    x1="20"
                    y1="46"
                    x2="220"
                    y2="211"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.15"
                    className="stroke-accent"
                  />
                  <rect
                    x="75"
                    y="118"
                    width="90"
                    height="22"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-accent fill-card"
                  />
                  <text
                    x="120"
                    y="133"
                    className="fill-accent font-mono font-bold text-[10px]"
                    textAnchor="middle"
                  >
                    4:5 RATIO
                  </text>

                  {/* Actions */}
                  <path
                    d="M 23 227 C 20 223 25 220 29 224 L 30 225 L 31 224 C 35 220 40 223 37 227 L 30 234 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-muted"
                  />
                  <rect
                    x="48"
                    y="222"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-muted"
                  />
                  <path
                    d="M 72 222 L 84 227 L 72 232 L 75 227 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-muted"
                  />
                  <path
                    d="M 210 222 L 222 222 L 222 234 L 216 230 L 210 234 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-muted"
                  />

                  {/* CTA Bar */}
                  <rect
                    x="20"
                    y="244"
                    width="200"
                    height="24"
                    rx="4"
                    className="fill-accent/15 stroke-accent/40"
                    strokeWidth="1"
                  />
                  <text
                    x="120"
                    y="260"
                    className="fill-accent font-mono font-bold text-[9px]"
                    textAnchor="middle"
                  >
                    SEND WHATSAPP MESSAGE
                  </text>

                  <line x1="20" y1="284" x2="160" y2="284" stroke="currentColor" strokeWidth="1.5" className="stroke-ink/80 dark:stroke-white/80" />
                  <line x1="20" y1="295" x2="210" y2="295" stroke="currentColor" strokeWidth="1.5" className="stroke-ink/60 dark:stroke-white/60" />
                  <line x1="20" y1="306" x2="120" y2="306" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" className="stroke-muted" />
                </svg>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <h3 className="font-heading font-bold text-ink dark:text-white text-base mb-1">
                  {platformsData.wireframes[0]?.label}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {platformsData.wireframes[0]?.description}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Wireframe 2: Stories */}
          <ScrollReveal delayMs={80}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 flex flex-col h-full shadow-xs transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
                  <InstagramIcon size={14} className="w-3.5 h-3.5" />
                  <FacebookIcon size={14} className="w-3.5 h-3.5" />
                  9:16 Stories
                </span>
                <span className="text-[11px] font-mono text-muted uppercase">
                  Immersive Vertical
                </span>
              </div>

              <div className="py-2 flex justify-center items-center flex-grow">
                <svg
                  viewBox="0 0 240 330"
                  className="w-full max-w-[240px] h-auto text-ink"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="25"
                    y="5"
                    width="190"
                    height="320"
                    rx="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-border dark:stroke-border-dark fill-card"
                  />
                  <line x1="35" y1="16" x2="85" y2="16" stroke="currentColor" strokeWidth="1.5" className="stroke-accent" />
                  <line x1="92" y1="16" x2="142" y2="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" className="stroke-muted" />
                  <line x1="149" y1="16" x2="205" y2="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" className="stroke-muted" />

                  <circle cx="47" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" className="stroke-border fill-tint" />
                  <line x1="62" y1="30" x2="115" y2="30" stroke="currentColor" strokeWidth="1.5" className="stroke-ink dark:stroke-white" />
                  <line x1="62" y1="36" x2="95" y2="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" className="stroke-muted" />

                  <line x1="195" y1="28" x2="203" y2="36" stroke="currentColor" strokeWidth="1.5" className="stroke-muted" />
                  <line x1="203" y1="28" x2="195" y2="36" stroke="currentColor" strokeWidth="1.5" className="stroke-muted" />

                  <rect
                    x="45"
                    y="80"
                    width="150"
                    height="140"
                    rx="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-border fill-bg"
                  />
                  <line x1="60" y1="105" x2="175" y2="105" stroke="currentColor" strokeWidth="1.5" className="stroke-ink dark:stroke-white" />
                  <line x1="60" y1="117" x2="160" y2="117" stroke="currentColor" strokeWidth="1.5" className="stroke-muted" />

                  <rect
                    x="75"
                    y="145"
                    width="90"
                    height="22"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-accent fill-card"
                  />
                  <text
                    x="120"
                    y="160"
                    className="fill-accent font-mono font-bold text-[10px]"
                    textAnchor="middle"
                  >
                    9:16 STORIES
                  </text>

                  <path d="M 115 258 L 120 252 L 125 258" stroke="currentColor" strokeWidth="1.5" className="stroke-accent" fill="none" />
                  <rect
                    x="37"
                    y="278"
                    width="135"
                    height="28"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-border fill-card"
                  />
                  <text x="47" y="295" className="fill-muted font-mono text-[9px] opacity-70">
                    Send message...
                  </text>
                  <path d="M 188 284 L 202 291 L 188 298 L 192 291 Z" stroke="currentColor" strokeWidth="1.5" className="stroke-accent" fill="none" />
                </svg>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <h3 className="font-heading font-bold text-ink dark:text-white text-base mb-1">
                  {platformsData.wireframes[1]?.label}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {platformsData.wireframes[1]?.description}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Wireframe 3: Reels */}
          <ScrollReveal delayMs={120}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 flex flex-col h-full shadow-xs transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
                  <InstagramIcon size={14} className="w-3.5 h-3.5" />
                  <FacebookIcon size={14} className="w-3.5 h-3.5" />
                  9:16 Reels
                </span>
                <span className="text-[11px] font-mono text-muted uppercase">
                  Action Column
                </span>
              </div>

              <div className="py-2 flex justify-center items-center flex-grow">
                <svg
                  viewBox="0 0 240 330"
                  className="w-full max-w-[240px] h-auto text-ink"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="25"
                    y="5"
                    width="190"
                    height="320"
                    rx="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-border dark:stroke-border-dark fill-card"
                  />
                  <text x="42" y="28" className="fill-ink dark:fill-white font-mono font-bold text-[11px]">
                    Reels
                  </text>
                  <rect x="184" y="18" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" className="stroke-muted" />

                  <rect
                    x="40"
                    y="45"
                    width="125"
                    height="160"
                    rx="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-border fill-bg"
                  />
                  <rect
                    x="55"
                    y="112"
                    width="95"
                    height="22"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="stroke-accent fill-card"
                  />
                  <text
                    x="102"
                    y="127"
                    className="fill-accent font-mono font-bold text-[10px]"
                    textAnchor="middle"
                  >
                    9:16 VIDEO REEL
                  </text>

                  {/* Right Action Icons */}
                  <path d="M 183 115 C 180 110 186 107 190 112 L 191 113 L 192 112 C 196 107 202 110 199 115 L 191 123 Z" stroke="currentColor" strokeWidth="1.5" className="stroke-muted" />
                  <rect x="183" y="142" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" className="stroke-muted" />
                  <path d="M 184 174 L 199 181 L 184 188 L 188 181 Z" stroke="currentColor" strokeWidth="1.5" className="stroke-muted" fill="none" />
                  <circle cx="191" cy="210" r="1.5" className="fill-muted" />
                  <circle cx="191" cy="216" r="1.5" className="fill-muted" />
                  <circle cx="191" cy="222" r="1.5" className="fill-muted" />

                  <rect x="40" y="272" width="125" height="22" rx="4" className="fill-accent/15 stroke-accent/40" strokeWidth="1" />
                  <text x="102" y="286" className="fill-accent font-mono font-bold text-[9px]" textAnchor="middle">
                    SEND MESSAGE
                  </text>
                </svg>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <h3 className="font-heading font-bold text-ink dark:text-white text-base mb-1">
                  {platformsData.wireframes[2]?.label}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {platformsData.wireframes[2]?.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Three-Step Flow Diagram */}
        <ScrollReveal delayMs={150}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 mb-8 shadow-xs">
            <div className="mb-8">
              <span className="font-mono uppercase text-xs tracking-wider text-accent font-semibold block mb-2">
                Conversion Funnel Process
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink dark:text-white tracking-tight">
                From First Impression to WhatsApp Conversation
              </h3>
              <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
                Meta Ads generate targeted local reach and discovery, while direct WhatsApp messaging gives you the personal medium to close high-value sales.
              </p>
            </div>

            {/* Three Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {platformsData.flowSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-border p-6 flex flex-col justify-between bg-bg/50 transition-all hover:border-accent/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-muted">
                        PHASE {step.step}
                      </span>
                      {step.category === 'Platform' && (
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-tint text-accent border border-accent/20 inline-flex items-center gap-1.5">
                          <FacebookIcon size={12} className="w-3 h-3" />
                          <InstagramIcon size={12} className="w-3 h-3" />
                          {step.role}
                        </span>
                      )}
                      {step.category === 'Interaction' && (
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-card text-ink dark:text-white border border-border">
                          {step.role}
                        </span>
                      )}
                      {step.category === 'Destination' && (
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-positive/10 text-positive border border-positive/30 inline-flex items-center gap-1">
                          <WhatsAppIcon className="w-3 h-3 text-positive" />
                          {step.role}
                        </span>
                      )}
                    </div>

                    <h4 className="font-heading font-bold text-ink dark:text-white text-lg tracking-tight mb-2.5">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/80 text-[11px] font-mono text-muted">
                    {step.category === 'Platform' && <span>Delivery: Sponsored Impression</span>}
                    {step.category === 'Interaction' && <span>Interaction: Verified Buyer Intent</span>}
                    {step.category === 'Destination' && <span>Outcome: 1-on-1 Closed Inquiry</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Placement Note */}
        <ScrollReveal delayMs={180}>
          <div className="rounded-xl border border-border p-5 sm:p-6 bg-card flex items-start gap-3.5 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div className="space-y-1 text-xs sm:text-sm text-ink/85 dark:text-gray-300 leading-relaxed">
              <p className="font-medium text-ink dark:text-white">
                {platformsData.placementNote}
              </p>
              <p className="text-muted text-xs">
                {platformsData.distinctionNote}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
