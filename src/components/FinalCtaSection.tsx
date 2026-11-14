import React from 'react';
import { finalCtaData } from '@/content/cta';
import { ScrollReveal } from './ScrollReveal';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { FacebookIcon } from './ui/FacebookIcon';
import { InstagramIcon } from './ui/InstagramIcon';
import { Sparkles, ArrowRight } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#0B1530] text-white border-b border-border/20 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-accent/15 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="rounded-3xl border border-white/15 p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#0E1B3E] to-[#0A1430] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (7 cols): Eyebrow, Headline, and Operational Guarantees */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 mb-5">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <FacebookIcon size={14} className="w-3.5 h-3.5" />
                    <InstagramIcon size={14} className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-eyebrow text-blue-200">
                    {finalCtaData.eyebrow}
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-tight mb-4">
                  {finalCtaData.headline}
                </h2>

                <p className="text-xs text-white/70 font-mono tracking-tight mt-6 pt-5 border-t border-white/10 flex items-center gap-2.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-white/95">
                    <FacebookIcon size={12} className="w-3 h-3" /> Facebook Ads
                  </span>
                  &bull;
                  <span className="inline-flex items-center gap-1.5 text-white/95">
                    <InstagramIcon size={12} className="w-3 h-3" /> Instagram Reels
                  </span>
                  &bull;
                  <span>Meta Ad Spend Included</span>
                  &bull;
                  <span>Zero Hidden Markups</span>
                </p>
              </div>

              {/* Right Column (5 cols): Supporting Copy and Direct Action Buttons */}
              <div className="lg:col-span-5 flex flex-col items-start gap-5">
                <p className="text-blue-200 text-base sm:text-lg font-medium leading-relaxed">
                  {finalCtaData.leadText}
                </p>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                  {finalCtaData.supportingCopy}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full pt-2">
                  <a
                    href={finalCtaData.primaryCta.href}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#285BFF] to-[#3D71FF] hover:from-[#1E4BD9] hover:to-[#285BFF] px-7 font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{finalCtaData.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href={finalCtaData.secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 px-6 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    <span>{finalCtaData.secondaryCta.label}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
