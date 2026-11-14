import React from "react";
import { Reveal } from "./ui/Reveal";
import { FacebookIcon } from "./ui/FacebookIcon";
import { InstagramIcon } from "./ui/InstagramIcon";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export function CampaignProofSection() {
  return (
    <Reveal delayMs={140}>
      <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink dark:text-white">
            Verified Campaign Results
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-border text-muted bg-card rounded-md shadow-2xs">
          Real Bhopal Growth
        </span>
      </div>

      <div className="space-y-4">
        {/* Case Study Card 1: Taskloop */}
        <figure className="group rounded-xl border border-border bg-card dark:bg-card/90 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:-translate-y-1">
          <div className="relative overflow-hidden bg-bg/50">
            <img
              src="/taskloop-analytics.png"
              alt="Taskloop analytics showing 285 thousand views and over 1,200 percent growth"
              className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-positive/90 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-sm">
              <TrendingUp className="w-3 h-3" />
              <AnimatedCounter value={1240} prefix="+" suffix="% Views" />
            </div>
          </div>
          <figcaption className="p-4">
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-heading font-extrabold text-sm text-ink dark:text-white">
                  Taskloop · Rishabh, Founder
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-tint/70 text-accent dark:text-[#7EA7FF]">
                  <InstagramIcon size={12} className="w-3 h-3" />
                  <FacebookIcon size={12} className="w-3 h-3" />
                  Meta Ads
                </span>
              </div>
            </div>
            <p className="text-xs text-muted dark:text-gray-300 leading-relaxed">
              Achieved <strong className="text-ink dark:text-white">285K+ verified impressions</strong> within the targeted campaign cycle, driving unprecedented platform discovery across Central India.
            </p>
          </figcaption>
        </figure>

        {/* Case Study Card 2: Bhopal Events Company */}
        <figure className="group rounded-xl border border-border bg-card dark:bg-card/90 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:-translate-y-1">
          <div className="relative overflow-hidden bg-bg/50">
            <img
              src="/bhopal-events-analytics.png"
              alt="Analytics for a Bhopal event management company showing 2.42 million views and over 1,500 percent growth"
              className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-positive/90 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-sm">
              <TrendingUp className="w-3 h-3" />
              <AnimatedCounter value={1535} prefix="+" suffix="% Views" />
            </div>
          </div>
          <figcaption className="p-4">
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-heading font-extrabold text-sm text-ink dark:text-white">
                  Bhopal Hospitality &amp; Event Group
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-tint/70 text-accent dark:text-[#7EA7FF]">
                  <InstagramIcon size={12} className="w-3 h-3" />
                  <FacebookIcon size={12} className="w-3 h-3" />
                  Meta Ads
                </span>
              </div>
            </div>
            <p className="text-xs text-muted dark:text-gray-300 leading-relaxed">
              Campaign generated over <strong className="text-ink dark:text-white">2.42M+ verified views</strong>, transforming brand recall and driving immediate high-value inquiries.
            </p>
          </figcaption>
        </figure>
      </div>

      {/* Proof Assurance Callout */}
      <div className="mt-4 rounded-xl border border-border bg-gradient-to-r from-card to-tint/30 p-4 shadow-xs">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="font-heading font-extrabold text-sm text-ink dark:text-white leading-tight">
              Multiple client campaigns scaled past 1,000%+ view velocity.
            </p>
            <p className="text-[11px] text-muted dark:text-gray-400 leading-relaxed mt-1">
              Performance varies naturally by offer and seasonality. We provide raw, unmanipulated Meta Ads Manager data for complete transparency.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
