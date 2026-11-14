export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface VerifiedStat {
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  definition: string;
  source: string;
  verified: boolean;
}

export interface SiteContent {
  brandName: string;
  tagline: string;
  whatsappNumber: string;
  navLinks: NavLink[];
  footerLinks: FooterLinkGroup[];
  verifiedStats: VerifiedStat[];
  location: string;
  contact: {
    whatsappNumberPlaceholder: string;
    whatsappNumberFormatted: string;
    whatsappDisplayPlaceholder: string;
    isWhatsappVerified: boolean;
    emailPlaceholder: string;
    officeLocation: string;
  };
  disclaimers: {
    metaNonAffiliation: string;
    resultsGuarantee: string;
    taxNotice: string;
  };
}

export const siteContent: SiteContent = {
  brandName: 'ADrivera',
  tagline: 'Turn Local Attention Into Measurable Revenue',
  whatsappNumber: '917974291582',
  navLinks: [
    { label: 'Home', href: '/#home' },
    { label: 'Services', href: '/#what-we-do' },
    { label: 'Our Process', href: '/#our-approach' },
    { label: 'Plans & Pricing', href: '/#pricing' },
    { label: 'Case Studies', href: '/#case-studies' },
    { label: 'FAQs', href: '/#faqs' },
  ],
  footerLinks: [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '/#home' },
        { label: 'Services & Scope', href: '/#what-we-do' },
        { label: 'Advertising Process', href: '/#our-approach' },
        { label: 'Plans & Pricing', href: '/#pricing' },
        { label: 'Client Case Studies', href: '/#case-studies' },
        { label: 'FAQs', href: '/#faqs' },
      ],
    },
    {
      title: 'Company & Policies',
      links: [
        { label: 'About Agency', href: '/about' },
        { label: 'Why Choose Us', href: '/why-us' },
        { label: 'How We Work', href: '/how-we-work' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cancellation & Renewal', href: '/cancellation-and-renewal' },
        { label: 'Advertising Disclaimers', href: '/advertising-disclaimer' },
      ],
    },
  ],
  verifiedStats: [
    {
      value: '2.7M+',
      numericValue: 2.7,
      suffix: 'M+',
      decimals: 1,
      definition: 'Verified Meta impressions delivered across client campaigns.',
      source: 'Meta Ads Manager Data',
      verified: true,
    },
    {
      value: '+1,535%',
      numericValue: 1535,
      prefix: '+',
      suffix: '%',
      decimals: 0,
      definition: 'Peak organic + paid reach increase recorded in 30-day testing cycle.',
      source: 'Campaign Benchmark Data',
      verified: true,
    },
    {
      value: '₹6.61',
      numericValue: 6.61,
      prefix: '₹',
      decimals: 2,
      definition: 'Average benchmark Cost Per Click achieved on local video Reel ads.',
      source: 'Bhopal Venue Campaign Audit',
      verified: true,
    },
  ],
  location: 'Bhopal, Madhya Pradesh, India',
  contact: {
    whatsappNumberPlaceholder: '917974291582',
    whatsappNumberFormatted: '+91 79742 91582',
    whatsappDisplayPlaceholder: '+91 79742 91582',
    isWhatsappVerified: true,
    emailPlaceholder: 'hello@adrivera.in',
    officeLocation: 'Bhopal, Madhya Pradesh, India',
  },
  disclaimers: {
    metaNonAffiliation:
      'ADrivera is an independent performance advertising agency and is not officially affiliated with or endorsed by Meta Platforms, Inc. Facebook and Instagram are registered trademarks of Meta Platforms, Inc.',
    resultsGuarantee:
      'We do not guarantee fixed sales volumes or arbitrary return on ad spend. Campaign results depend on local market demand, creative relevance, offer strength, competitive dynamics, and prompt customer follow-up.',
    taxNotice:
      'Displayed monthly package prices include the allocated Meta advertising budget and ADrivera service fees. There are zero hidden setup fees or surprise surcharges.',
  },
};

export const siteConfig = siteContent;

/**
 * Enforces the strict claims policy: only stats explicitly verified by founders can render.
 */
export function getRenderableStats(stats: VerifiedStat[]): VerifiedStat[] {
  return stats.filter((stat) => stat.verified === true);
}
