"use client";

import React, { useEffect, useRef, useState } from "react";
import { visibilityData } from "@/content/visibility";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { Sparkles, ArrowRight } from "lucide-react";

// 24 columns by 10 rows = 240 dots
const TOTAL_DOTS = 240;
const COLS = 24;

// Indices representing the initial customer base (people who know the business today)
const INK_DOT_INDICES = new Set([
  82, 83, 84, 106, 107, 108, 109, 130, 131, 132, 133, 154, 155, 156,
]);

// Indices representing the expanded audience reached through Meta advertising
const AD_REACHED_INDICES = new Set([
  32, 33, 34, 35, 36, 37, 55, 56, 57, 58, 59, 60, 61, 62, 79, 80, 81, 85, 86,
  87, 103, 104, 105, 110, 111, 112, 113, 126, 127, 128, 129, 134, 135, 136, 137,
  150, 151, 152, 153, 157, 158, 159, 160, 174, 175, 176, 177, 178, 179, 180,
  181, 182, 183, 198, 199, 200, 201, 202, 203, 204, 205, 223, 224, 225, 226,
  227,
]);

export function VisibilitySection() {
  const [hasRevealed, setHasRevealed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasRevealed(true);
    }, 400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
        }
      },
      { threshold: 0.2 },
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="visibility"
      className="py-16 md:py-24 border-b border-border bg-bg relative overflow-hidden"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-12">
            <Eyebrow number="08" label={visibilityData.eyebrow} />
            {visibilityData.openingPullQuote && (
              <blockquote className="border-l-3 border-accent pl-4 my-4 font-sans text-lg sm:text-xl text-ink dark:text-white font-medium leading-relaxed">
                &ldquo;{visibilityData.openingPullQuote}&rdquo;
              </blockquote>
            )}
            <h2 className="font-heading font-extrabold text-ink dark:text-white text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-snugger mb-4">
              {visibilityData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {visibilityData.leadText}
            </p>
          </div>
        </Reveal>

        {/* Visual: Dot-Matrix Market Penetration Model */}
        <Reveal delayMs={80}>
          <div
            ref={gridRef}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-border mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink dark:text-white block mb-0.5">
                  Market Reach &amp; Local Visibility Model
                </span>
                <span className="text-xs text-muted">
                  Illustrative audience penetration matrix in Bhopal (240 population nodes)
                </span>
              </div>
              <span className="self-start sm:self-auto text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border border-border text-muted bg-bg">
                Illustrative Matrix
              </span>
            </div>

            {/* The 24x10 Dot Matrix Grid */}
            <div className="overflow-x-auto pb-4 pt-2 -mx-2 px-2 scrollbar-none">
              <div
                className="grid gap-1.5 sm:gap-2.5 mx-auto"
                style={{
                  gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                  width: "100%",
                  minWidth: "580px",
                  maxWidth: "880px",
                }}
              >
                {Array.from({ length: TOTAL_DOTS }).map((_, index) => {
                  const isCurrent = INK_DOT_INDICES.has(index);
                  const isAdReached = AD_REACHED_INDICES.has(index);

                  let dotColor = "bg-border dark:bg-border-dark";
                  if (isCurrent) {
                    dotColor = "bg-ink dark:bg-white";
                  } else if (isAdReached && hasRevealed) {
                    dotColor = "bg-accent";
                  }

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center p-0.5"
                      title={
                        isCurrent
                          ? "Current customer base"
                          : isAdReached
                            ? "Reached through Meta advertising"
                            : "Untapped local market"
                      }
                    >
                      <span
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full inline-block transition-colors duration-700 ease-out ${dotColor}`}
                        style={{
                          transitionDelay: isAdReached
                            ? `${(index % 24) * 25}ms`
                            : "0ms",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-ink dark:bg-white inline-block" />
                  <span className="text-ink dark:text-white font-medium">
                    Existing clientele{" "}
                    <span className="text-muted">(walk-ins &amp; referrals)</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
                  <span className="text-ink dark:text-white font-medium">
                    Targeted ad reach{" "}
                    <span className="text-muted">(Meta campaign discovery)</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-border dark:bg-border-dark inline-block" />
                  <span className="text-muted">
                    Untapped regional market{" "}
                    <span className="text-muted">(growth potential)</span>
                  </span>
                </div>
              </div>

              <div className="font-mono text-[11px] text-muted">
                Matrix: 24 × 10 · 240 Nodes
              </div>
            </div>
          </div>
        </Reveal>

        {/* Below: Three Benefits */}
        <Reveal delayMs={120}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {visibilityData.benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-lg hover:border-accent/40 hover:-translate-y-1"
              >
                <div>
                  <div className="font-mono text-xs font-semibold text-accent mb-3 tracking-wider">
                    {benefit.number} / {benefit.title.toUpperCase()}
                  </div>
                  <h3 className="font-heading font-extrabold text-ink dark:text-white text-xl sm:text-2xl mb-2.5 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-medium text-ink dark:text-white leading-snug mb-3">
                    {benefit.summary}
                  </p>
                </div>
                <p className="text-xs text-muted leading-relaxed pt-4 border-t border-border/60">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          {visibilityData.closingLine && (
            <div className="mb-8 p-5 rounded-xl border border-border bg-tint/40 dark:bg-card">
              <p className="font-sans font-medium text-ink dark:text-white text-base sm:text-lg leading-relaxed">
                &ldquo;{visibilityData.closingLine}&rdquo;
              </p>
            </div>
          )}
        </Reveal>

        {/* Qualification Note */}
        <Reveal delayMs={160}>
          <div className="rounded-xl border border-border p-4 sm:p-5 bg-card text-xs text-muted leading-relaxed">
            <span className="font-semibold text-ink dark:text-white uppercase tracking-wider block mb-1 font-mono text-[11px]">
              Campaign Alignment Note
            </span>
            <p>{visibilityData.qualificationNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
