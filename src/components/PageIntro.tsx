import React from 'react';

interface PageIntroProps {
  index: string;
  eyebrow: string;
  headline: string;
  description: string;
  quote?: string;
}

export function PageIntro({ index, eyebrow, headline, description, quote }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#0B1530] py-16 text-white sm:py-20 md:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[300px] bg-accent/15 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 mx-auto grid max-w-site grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-8">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-eyebrow text-blue-200">
            <span className="text-accent font-bold">{index}</span>
            <span className="h-px w-10 bg-white/25" />
            <span>{eyebrow}</span>
          </div>
          <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl md:text-6xl text-white">
            {headline}
          </h1>
        </div>
        <div className="flex flex-col justify-end lg:col-span-4">
          <p className="border-l-3 border-accent pl-4 text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
          {quote && (
            <p className="mt-6 text-xl sm:text-2xl leading-snug font-medium text-blue-100">
              &ldquo;{quote}&rdquo;
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
