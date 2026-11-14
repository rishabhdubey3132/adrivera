import React from "react";
import { siteConfig } from "@/content/site";
import { heroData } from "@/content/hero";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";
import { FacebookIcon } from "./ui/FacebookIcon";
import { InstagramIcon } from "./ui/InstagramIcon";
import { CampaignProofSection } from "./CampaignProofSection";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const isWhatsappPlaceholder =
    !siteConfig.whatsappNumber ||
    siteConfig.whatsappNumber.includes("REPLACE_WITH_VERIFIED_NUMBER");

  const whatsappHref = isWhatsappPlaceholder
    ? "#contact"
    : `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        "Hi ADrivera team, I would like to explore Meta Ads packages for my business.",
      )}`;

  // Split headline if comma is present for optimal 2-part visual chunking
  const headlineParts = heroData.headline.includes(",")
    ? [
        heroData.headline.slice(0, heroData.headline.indexOf(",") + 1),
        heroData.headline.slice(heroData.headline.indexOf(",") + 1).trim(),
      ]
    : [heroData.headline];

  return (
    <section className="relative pt-8 pb-12 md:pt-14 md:pb-20 border-b border-border bg-bg overflow-hidden">
      {/* Ambient Designer Glow Mesh */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-[340px] bg-gradient-to-b from-accent/15 via-accent/5 to-transparent blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (7 cols): Core Positioning & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full border border-accent/20 bg-card/90 dark:bg-card/70 backdrop-blur-md shadow-xs">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <FacebookIcon size={14} className="w-3.5 h-3.5 shrink-0" />
                  <InstagramIcon size={14} className="w-3.5 h-3.5 shrink-0" />
                </div>
                <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink dark:text-white">
                  Meta Ads in Bhopal · Facebook &amp; Instagram
                </span>
              </div>
            </Reveal>

            <Reveal delayMs={60}>
              <h1 className="font-heading font-extrabold tracking-tight text-ink text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.2] sm:leading-[1.18] md:leading-[1.16] mb-4 sm:mb-5">
                {headlineParts.length > 1 ? (
                  <>
                    <span className="block text-ink dark:text-white pb-1">{headlineParts[0]}</span>
                    <span className="block text-accent bg-gradient-to-r from-accent via-[#3D71FF] to-[#6392FF] dark:from-[#5A8AFF] dark:via-[#7EA7FF] dark:to-[#A3C2FF] bg-clip-text text-transparent pt-1 pb-3 pr-2">
                      {headlineParts[1]}
                    </span>
                  </>
                ) : (
                  <span className="block text-accent bg-gradient-to-r from-accent via-[#3D71FF] to-[#6392FF] dark:from-[#5A8AFF] dark:via-[#7EA7FF] dark:to-[#A3C2FF] bg-clip-text text-transparent pt-1 pb-3 pr-2">
                    {heroData.headline}
                  </span>
                )}
              </h1>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="text-muted dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-[56ch] mb-4">
                {heroData.supportingCopy}
              </p>

              {heroData.secondaryTagline && (
                <div className="flex items-center gap-2.5 text-ink dark:text-white text-xs sm:text-sm font-semibold mb-5 bg-tint/60 dark:bg-card/80 border border-border px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-4 h-4 text-positive shrink-0" />
                  <span>{heroData.secondaryTagline}</span>
                </div>
              )}

              {/* Strategic platform capability strip */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-card text-[11px] sm:text-xs font-semibold text-ink shadow-2xs hover:border-accent/40 transition-colors">
                  <FacebookIcon size={14} className="w-3.5 h-3.5 shrink-0" />
                  Facebook Ads &amp; Feed
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-card text-[11px] sm:text-xs font-semibold text-ink shadow-2xs hover:border-accent/40 transition-colors">
                  <InstagramIcon size={14} className="w-3.5 h-3.5 shrink-0" />
                  Instagram Reels &amp; Stories
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-card text-[11px] sm:text-xs font-semibold text-ink shadow-2xs hover:border-accent/40 transition-colors">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  Direct WhatsApp Routing
                </span>
              </div>
            </Reveal>

            <Reveal delayMs={180} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-4">
                <Button variant="primary" href={heroData.primaryCta.href} className="w-full sm:w-auto group">
                  <span>{heroData.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1 inline-block" />
                </Button>
                <Button
                  variant="secondary"
                  href={whatsappHref}
                  target={isWhatsappPlaceholder ? undefined : "_blank"}
                  rel={
                    isWhatsappPlaceholder ? undefined : "noopener noreferrer"
                  }
                  className="gap-2.5 w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span>{heroData.secondaryCta.label}</span>
                </Button>
              </div>

              {/* Supporting microcopy */}
              <p className="text-xs text-muted leading-normal max-w-[55ch] mb-6">
                {heroData.microcopy}
              </p>
            </Reveal>

            {/* Dynamic Animated Increasing Numbers Bar */}
            <Reveal delayMs={240} className="w-full">
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/80">
                {heroData.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-border bg-card/70 dark:bg-card/40 backdrop-blur-xs transition-all hover:border-accent/40 hover:-translate-y-0.5"
                  >
                    <div className="font-heading font-extrabold text-ink dark:text-white text-xl sm:text-2xl tracking-tight text-accent dark:text-[#5A8AFF]">
                      <AnimatedCounter
                        value={metric.value}
                        prefix={metric.prefix || ""}
                        suffix={metric.suffix || ""}
                        decimals={metric.decimals || 0}
                      />
                    </div>
                    <div className="text-[11px] sm:text-xs text-muted font-medium mt-0.5 leading-snug">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 cols): Verified Campaign Results with Animated Proof */}
          <div className="lg:col-span-5 w-full">
            <CampaignProofSection />
          </div>
        </div>
      </div>
    </section>
  );
}
