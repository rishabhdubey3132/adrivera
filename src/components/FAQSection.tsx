import React from 'react';
import { faqsData } from '@/content/faqs';
import { ScrollReveal } from './ScrollReveal';
import { HelpCircle } from 'lucide-react';

export function FAQSection() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg relative overflow-hidden">
      {/* FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="mb-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-eyebrow text-accent bg-tint/60 dark:bg-card border border-accent/20">
              <HelpCircle className="w-3.5 h-3.5" />
              {faqsData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink dark:text-white tracking-tighter leading-tight mb-4">
              {faqsData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {faqsData.leadText}
            </p>
          </div>
        </ScrollReveal>

        {/* 11 FAQ Items using Native <details> / <summary> */}
        <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden shadow-xs">
          {faqsData.items.map((item, idx) => (
            <details
              key={item.id}
              className="group p-6 sm:p-7 [&_summary::-webkit-details-marker]:hidden transition-colors hover:bg-tint/20 dark:hover:bg-card/70"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none select-none text-ink dark:text-white font-heading font-bold text-base sm:text-lg hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
                <span className="flex items-start gap-4 pr-6">
                  <span className="font-mono text-xs font-semibold text-muted mt-1 tabular-nums flex-shrink-0">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-left leading-snug">{item.question}</span>
                </span>

                {/* Plus text glyph rotated 45deg by CSS on open state, turning into an × */}
                <span
                  className="font-mono text-2xl font-light text-accent flex-shrink-0 transition-transform duration-200 group-open:rotate-45 leading-none select-none"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <div
                className="pt-4 pl-8 sm:pl-9 pr-4 text-xs sm:text-sm text-muted dark:text-gray-300 leading-relaxed font-normal border-t border-border/50 mt-4"
                {...(item.lang ? { lang: item.lang } : {})}
              >
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
