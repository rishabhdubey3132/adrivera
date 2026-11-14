'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/content/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const enquiryEl = document.getElementById('enquiry');
    if (!enquiryEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(enquiryEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const whatsAppUrl = `https://wa.me/${
    siteConfig.contact.whatsappNumberPlaceholder
  }?text=${encodeURIComponent(
    'Hello ADrivera team, I am interested in exploring Meta advertising (Facebook & Instagram) for my business.'
  )}`;

  return (
    <aside
      aria-label="Mobile Contact Action"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border p-3 transition-transform duration-300 ease-in-out shadow-lg ${
        isVisible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
      style={{
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
      }}
    >
      <div className="flex items-center gap-2.5">
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 min-h-[46px] px-4 text-xs font-semibold text-white bg-accent hover:bg-[#1E4BD9] active:bg-[#153BB8] rounded-xl transition-all shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
          <span>Chat on WhatsApp</span>
        </a>

        <a
          href="/#pricing"
          className="flex items-center justify-center min-h-[46px] px-4 text-xs font-mono font-bold uppercase tracking-wider text-ink dark:text-white border border-border bg-bg hover:bg-tint/40 rounded-xl transition-colors"
        >
          View Plans
        </a>
      </div>
    </aside>
  );
}
