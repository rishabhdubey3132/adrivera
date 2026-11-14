export interface PlanPricing {
  id: string;
  name: string;
  subtitle: string;
  purposeTagline?: string;
  highlights: string[];
  bestForLabel: string;
  bestForDescription: string;
  bestForExamples: string[];
  bestForMessage: string;
  totalPrice: number;
  priceDisplay: string;
  billingPeriod: string;
  adSpend: number | null;
  serviceFee: number | null;
  targetPersona: string;
  summary: string;
  features: string[];
  limits: string[];
  limitations?: string[];
  ctaLabel: string;
  ctaType: 'whatsapp' | 'custom';
  ctaAction?: 'whatsapp' | 'custom';
  hindiStarterMessage?: string;
  isPopular?: boolean;
  isTrial?: boolean;
  trialDuration?: string;
}

export interface ComparisonFeature {
  category: string;
  name: string;
  starter: string;
  growth: string;
  premium: string;
  custom: string;
}

export const plansContent: PlanPricing[] = [
  {
    id: 'trial',
    name: 'Trial',
    subtitle: 'Test real Meta Ads for your business in just 7 days. Zero monthly commitment — see actual results before you decide.',
    purposeTagline: 'Prove the concept in one week for ₹1,500.',
    highlights: [
      'Campaign setup & launch on Meta Ads Manager',
      'Targeted local audience configuration',
      'One custom ad creative designed for your business',
      'End-of-week verified performance report',
    ],
    bestForLabel: 'Complete Beginners',
    bestForDescription:
      'If you have never run a Facebook or Instagram ad and want to see real results before committing to a monthly plan, this 7-day trial is built for you.',
    bestForExamples: [
      'Retail shops & local boutiques',
      'Restaurants, cafes & catering businesses',
      'Coaching centres & tuition classes',
      'Any business testing ads for the first time',
    ],
    bestForMessage: 'Try it for one week and see the results for yourself — with zero long-term commitment.',
    totalPrice: 1500,
    priceDisplay: '₹1,500',
    billingPeriod: '/ 7 Days',
    adSpend: null,
    serviceFee: null,
    targetPersona: 'Business owners who want to test Meta Ads with a minimal investment before committing to a monthly package.',
    summary:
      'Run your first real Facebook & Instagram campaign for just ₹1,500 over 7 days. We handle everything — setup, targeting, creative, and reporting. Upgrade to a monthly plan based on actual results.',
    features: [
      'Full campaign setup and launch on Meta Ads Manager.',
      'Precision local radius and demographic audience targeting in Bhopal.',
      'One custom static ad creative tailored to your business.',
      'WhatsApp click-to-chat integration for direct customer inquiries.',
      'Active monitoring throughout the 7-day campaign window.',
      'Verified end-of-week performance report with real impressions, reach, and click data.',
      'No monthly subscription required — upgrade only if satisfied.',
    ],
    limits: [
      'Single creative (no video or carousel in trial)',
      'One campaign objective only',
      'Support via WhatsApp (no in-person meetings)',
    ],
    limitations: [
      'Single creative (no video or carousel in trial)',
      'One campaign objective only',
      'Support via WhatsApp (no in-person meetings)',
    ],
    ctaLabel: 'Start 7-Day Trial · ₹1,500',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    isTrial: true,
    trialDuration: '7 Days',
    isPopular: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Perfect for businesses launching their first Meta Ads campaign with low risk and predictable budget.',
    purposeTagline: 'Launch professional Facebook & Instagram advertising for just ₹5,000/month.',
    highlights: [
      'Basic campaign configuration & setup',
      'Targeted local radius and interest mapping',
      'One high-impact primary ad creative',
      'Direct WhatsApp click-to-chat integration',
    ],
    bestForLabel: 'First-Time Advertisers',
    bestForDescription:
      'If you are testing online advertising for the first time or want to build steady local awareness without heavy financial commitment, this plan is tailored for you.',
    bestForExamples: [
      'Local retail shops & boutique stores',
      'Independent clinics & specialized doctors',
      'Early-stage local service providers',
      'Founders seeking initial market validation',
    ],
    bestForMessage:
      'Start lean, observe genuine audience engagement, and scale your investment based on real performance data.',
    totalPrice: 5000,
    priceDisplay: '₹5,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Business owners testing digital ads for the first time without committing to large upfront budgets.',
    summary:
      'Begin your digital advertising journey for just ₹5,000 per month. Evaluate customer interest, gain clarity on local reach, and decide your next growth step.',
    features: [
      'Full campaign architecture setup on Meta Ads Manager.',
      'Precision geo-radius and demographic targeting in Bhopal.',
      'One primary custom ad creative designed to capture local attention.',
      'Seamless WhatsApp click-to-chat destination routing.',
      'Continuous routine campaign monitoring & budget safety controls.',
      'End-of-month verified transparent analytics report.',
      'Fast support via WhatsApp, phone, and online video meetings.',
      'Transparent ad spend allocation confirmed before launch.',
      'Zero hidden management charges or technical surprises.',
    ],
    limits: [
      'In-person meetings not included (fully managed online)',
      'Single primary creative focus (no multi-variant video suite)',
      'Custom bespoke video shoot production not included',
    ],
    limitations: [
      'In-person meetings not included (fully managed online)',
      'Single primary creative focus (no multi-variant video suite)',
      'Custom bespoke video shoot production not included',
    ],
    ctaLabel: 'Start with ₹5,000 Plan',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    hindiStarterMessage:
      'You do not need a massive budget on day one. Start small, review verified delivery data, and make informed advertising decisions.',
    isPopular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'Accelerate inbound inquiries with AI-assisted video Reels, audience testing, and weekly optimization.',
    purposeTagline: 'Dynamic creative testing, short-form video ads, and weekly performance reviews.',
    highlights: [
      'AI-assisted video Reel ad production',
      'Weekly active campaign optimization',
      'Multi-audience interest testing',
      '1 monthly in-person strategy session in Bhopal',
    ],
    bestForLabel: 'Established Local Businesses',
    bestForDescription:
      'Designed for growing companies with existing product demand looking to outshine competitors, test video creatives, and capture higher customer inquiries.',
    bestForExamples: [
      'Gyms, fitness clubs & sports academies',
      'Popular restaurants, cafes & banquet venues',
      'Coaching institutes & skill academies',
      'Regional service brands scaling city-wide',
    ],
    bestForMessage:
      'Move beyond static banners. Unlock the engagement power of short-form video Reels and continuous weekly optimization.',
    totalPrice: 8000,
    priceDisplay: '₹8,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Established businesses seeking multi-format creatives, short-form video ads, and proactive weekly campaign tuning.',
    summary:
      'When you need higher inquiry velocity, fresh video creatives, and systematic weekly optimization, the Growth Plan delivers outstanding impact.',
    features: [
      'Everything in the Starter Plan.',
      'High-converting AI-assisted video Reel creation tailored for Instagram.',
      'Monthly allowance of 2 to 3 creative iterations or fresh ad angles.',
      'Expanded demographic, interest, and competitor audience testing.',
      'Weekly campaign performance check and bid optimization.',
      'Comprehensive monthly analytics review with actionable insights.',
      '1 dedicated in-person campaign review session per month in Bhopal.',
    ],
    limits: [
      'Creative refresh allowance limited to 2-3 assets per billing cycle',
      'Extensive on-location cinematography quoted separately',
    ],
    limitations: [
      'Creative refresh allowance limited to 2-3 assets per billing cycle',
      'Extensive on-location cinematography quoted separately',
    ],
    ctaLabel: 'Choose Growth Plan',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Advanced multi-stage funnels, custom retargeting, and hands-on scaling for high-intent brands.',
    purposeTagline: 'Full-funnel digital partnership for ambitious businesses scaling across Central India.',
    highlights: [
      'Multi-stage funnel architecture & retargeting',
      'Continuous daily bid & audience optimization',
      'Multi-city regional campaign expansion',
      'Priority executive communication & dedicated manager',
    ],
    bestForLabel: 'Multi-Location Brands',
    bestForDescription:
      'For established brands expanding into multiple territories that require deeper strategic alignment, retargeting funnels, and frequent consultation.',
    bestForExamples: [
      'Multi-branch retail chains & showrooms',
      'Real estate developers & luxury residential builders',
      'Hospitals, specialized clinics & diagnostic chains',
      'Regional lifestyle and consumer product brands',
    ],
    bestForMessage:
      'Do not settle for single-channel visibility. Build structured multi-stage funnels that turn cold prospects into repeat clients.',
    totalPrice: 16000,
    priceDisplay: '₹16,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'High-scale businesses needing continuous testing, custom audience retargeting, and close strategic alignment.',
    summary:
      'A deeply collaborative advertising partnership focused on audience response, multi-asset creative pipelines, and aggressive growth goals.',
    features: [
      'Advanced multi-tier campaign architecture (Cold Discovery + Warm Retargeting).',
      'Comprehensive audience persona modeling and Lookalike targeting.',
      'Dynamic multi-variant creative testing (Video, Carousels, Static).',
      'Continuous daily monitoring and ongoing bid calibrations.',
      'Frequent strategic consultation and bi-weekly in-person reviews.',
      'Dedicated priority communication channel on WhatsApp & direct calls.',
      'Detailed commercial conversion attribution and funnel analytics.',
      'Final advertising spend and service fee breakdown agreed prior to purchase.',
    ],
    limits: [
      'Exact split between ad budget and agency fee finalized before onboarding',
    ],
    limitations: [
      'Exact split between ad budget and agency fee finalized before onboarding',
    ],
    ctaLabel: 'Consult on Premium',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    isPopular: false,
  },
  {
    id: 'custom',
    name: 'Custom',
    subtitle: 'Bespoke campaign strategy, tailored creative pipelines, and enterprise-grade budget scaling.',
    highlights: [
      'Fully customizable advertising strategy',
      'High ad-spend allocation flexibility',
      'Dedicated bespoke creative pipeline',
      'Comprehensive cross-platform integration',
    ],
    bestForLabel: 'Enterprise & Multi-State Expansion',
    bestForDescription:
      'Tailored for businesses operating across multiple states, launching high-capital ventures, or requiring custom omni-channel media buying.',
    bestForExamples: [
      'Enterprise businesses targeting multiple states',
      'High-volume eCommerce and D2C consumer brands',
      'Franchise networks requiring localized multi-ad accounts',
      'Institutions launching high-capacity marketing initiatives',
    ],
    bestForMessage:
      'Scale without arbitrary ceilings. Deploy custom budgets and bespoke creative strategies designed strictly around your business targets.',
    totalPrice: 30000,
    priceDisplay: '₹30,000+',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Enterprises with distinct marketing goals, larger media budgets, or requirements surpassing standardized packages.',
    summary:
      'Share your bespoke scaling objectives and budget parameters. We will architect a custom roadmap and dedicated scope of work tailored exclusively to you.',
    features: [
      'Customized media buying and advertising architecture.',
      'Flexible budget ratio configuration between ad spend and creative services.',
      'Support for larger ad budgets, multiple simultaneous funnels, and sub-brands.',
      'Custom on-demand creative asset production and advanced analytics dashboards.',
      'Strictly scoped deliverables and deliverables confirmed contractually before launch.',
    ],
    limits: [
      'Scope, deliverables, and service terms mutually formalized in written contract',
      'No speculative or uncapped operational commitments',
    ],
    limitations: [
      'Scope, deliverables, and service terms mutually formalized in written contract',
      'No speculative or uncapped operational commitments',
    ],
    ctaLabel: 'Design Custom Plan',
    ctaType: 'custom',
    ctaAction: 'custom',
    isPopular: false,
  },
];

export const pricingPlans = plansContent;

export const pricingComparisonFeatures: ComparisonFeature[] = [
  {
    category: 'Financials',
    name: 'Total Monthly Package',
    starter: '₹5,000',
    growth: '₹8,000',
    premium: '₹16,000',
    custom: '₹30,000+',
  },
  {
    category: 'Creative Scope',
    name: 'Ad Creatives Included',
    starter: '1 primary static / client creative',
    growth: 'Multiple creatives (2-3 monthly variations)',
    premium: 'Extensive multi-format testing',
    custom: 'Dedicated bespoke creative pipeline',
  },
  {
    category: 'Creative Scope',
    name: 'Video Production',
    starter: 'Not included',
    growth: 'AI-assisted video Reel ads included',
    premium: 'AI-assisted video + motion assets',
    custom: 'Custom production scope',
  },
  {
    category: 'Optimization',
    name: 'Review Frequency',
    starter: 'Routine monitoring',
    growth: 'Weekly optimization reviews',
    premium: 'Continuous daily optimization',
    custom: 'Intensive bespoke schedule',
  },
  {
    category: 'Optimization',
    name: 'Audience & Retargeting',
    starter: 'Basic demographic & geo-radius',
    growth: 'Expanded audience testing',
    premium: 'Full retargeting funnels included',
    custom: 'Multi-stage funnel architecture',
  },
  {
    category: 'Reporting & Support',
    name: 'Performance Reports',
    starter: 'Monthly transparent report',
    growth: 'Detailed monthly report + weekly notes',
    premium: 'In-depth executive performance audit',
    custom: 'Custom analytics dashboards',
  },
  {
    category: 'Reporting & Support',
    name: 'In-Person Meetings (Bhopal)',
    starter: 'Fully managed online',
    growth: '1 in-person meeting per month',
    premium: 'Regular in-person strategy reviews',
    custom: 'As defined in agreed scope',
  },
  {
    category: 'Reporting & Support',
    name: 'WhatsApp Lead Routing',
    starter: 'Fully configured',
    growth: 'Fully configured',
    premium: 'Fully configured',
    custom: 'Fully configured',
  },
];

export const pricingTransparencyRules: string[] = [
  'The displayed monthly package price is your complete cost—zero hidden management fees.',
  'Exact campaign scope, creative deliverables, and ad spend allocation are confirmed before launch.',
  'Transparent monthly performance reporting with verified Meta Ads Manager delivery metrics.',
  'No locked-in annual commitments; retain complete flexibility month to month.',
];

export const starterSectionData = {
  eyebrow: '09 / Entry Point',
  headline: 'Test The Waters First. Scale When You See Results.',
  leadLine:
    'You do not need an extravagant budget to run professional Meta Ads. Start with a 7-day trial for ₹1,500, inspect real performance data, and scale with confidence.',
  paragraphs: [
    'Begin with our Trial Plan — just ₹1,500 for a full 7-day campaign. We handle setup, targeting, creative, and reporting. See verified results before committing to a monthly package.',
    'Ready to scale? Our Starter Plan at ₹5,000/month gives you continuous monthly advertising with expanded capabilities. Upgrade at any time based on your trial results.',
  ],
  hindiQuote:
    'Start with a realistic budget, measure verified customer inquiries, and let transparent performance data guide your advertising investment.',
  hindiNote: 'Trial & Starter Overview · Bhopal & Central India',
  qualification:
    'The Trial Plan is a fully functional 7-day campaign — not a demo. We deploy real ads, real targeting, and deliver a transparent performance report with verified Meta Ads Manager data.',
};

/**
 * Formats the ad spend and service split for transparent rendering.
 * Renders "Confirmed before purchase" when the split is null.
 */
export function formatAllocation(amount: number | null): string {
  if (amount === null) {
    return 'Confirmed before purchase';
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}
