'use client';

import React from 'react';
import { siteContent } from '@/content/site';
import CardNav, { type CardNavItem } from './CardNav';
import { BrandLogo } from './BrandLogo';

export function SiteHeader() {
  const items: CardNavItem[] = [
    {
      label: 'Why Us',
      description: 'Precision Meta Ads execution engineered for ambitious local businesses.',
      links: [
        { label: 'Why Choose Us', href: '/why-us' },
        { label: 'How We Work', href: '/how-we-work' },
        { label: 'Placement Framework', href: '/#our-approach' },
      ],
    },
    {
      label: 'Packages',
      description: 'Start with a 7-day trial for ₹1,500 — or choose a full monthly plan from ₹5,000/month.',
      links: [
        { label: 'Trial Plan (₹1,500 / 7 Days)', href: '/#pricing' },
        { label: 'Starter (₹5,000/mo)', href: '/#pricing' },
        { label: 'Growth (₹8,000/mo)', href: '/#pricing' },
        { label: 'Premium (₹16,000/mo)', href: '/#pricing' },
        { label: 'Custom Enterprise (₹30,000+/mo)', href: '/#pricing' },
      ],
    },
    {
      label: 'Contact',
      description: 'Fast onboarding and direct strategic consultation on WhatsApp.',
      links: [
        {
          label: 'Direct WhatsApp Chat',
          href: 'https://wa.me/917974291582?text=Hello%20ADrivera%20team%2C%20I%20would%20like%20to%20discuss%20Meta%20Ads%20for%20my%20business.',
        },
        { label: 'Request Consultation', href: '/contact' },
        { label: 'About Agency', href: '/about' },
      ],
    },
  ];

  const logoNode = (
    <BrandLogo variant="horizontal" size="md" alt={siteContent.brandName} />
  );

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6 w-full pointer-events-none">
      <div className="pointer-events-auto">
        <CardNav
          logo={logoNode}
          logoAlt={siteContent.brandName}
          logoHref="/"
          items={items}
          cta={{ label: 'View Pricing', href: '/#pricing' }}
          cardEffect="rise"
          openOn="click"
          surface="glass"
          stagger={0.12}
          bounce={0.2}
          menuLabel
          speed={1}
          cardHeight={176}
          maxWidth={820}
          intro
        />
      </div>
    </header>
  );
}

export default SiteHeader;
