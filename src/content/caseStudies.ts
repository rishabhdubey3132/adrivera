export interface CaseStudyEntry {
  id: string;
  title: string;
  category: string;
  objective: string;
  duration: string;
  spend: string;
  reach: string;
  impressions: string;
  clicks: string;
  cpc: string;
  enquiries: string;
  numericSpend?: number;
  numericReach?: number;
  numericImpressions?: number;
  numericClicks?: number;
  numericCpc?: number;
  numericEnquiries?: number;
  contextNotes: string;
  ownership: 'client' | 'founder-owned';
  status: 'verified' | 'illustrative';
}

export interface MetricDefinition {
  term: string;
  explanation: string;
}

export interface CaseStudiesData {
  eyebrow: string;
  headline: string;
  leadText: string;
  statusPolicyNote: string;
  definitions: MetricDefinition[];
  entries: CaseStudyEntry[];
}

export const caseStudiesData: CaseStudiesData = {
  eyebrow: '10 / Performance Benchmarks',
  headline: 'Verified Campaigns. Transparent Performance Data.',
  leadText:
    'Every business operates under distinct market realities. We report advertising performance with total transparency—analyzing exact platform spend, audience delivery metrics, and strategic optimization takeaways.',
  statusPolicyNote:
    'ADrivera rejects fabricated reviews and unverified claims. Below is a structured campaign benchmark demonstrating how we audit, analyze, and present advertising return metrics.',
  definitions: [
    {
      term: 'Total Views (Impressions) vs. Unique Reach',
      explanation:
        'Impressions indicate how many times an ad appeared on screen (including repeat views). Unique Reach reflects the exact count of distinct individuals who viewed your ad at least once.',
    },
    {
      term: 'Cost Per Click (CPC) vs. Customer Conversion',
      explanation:
        'Cost Per Click measures how efficiently an ad captures buyer intent. A low CPC signals strong creative resonance, while final conversion depends on offer strength, pricing, and rapid WhatsApp follow-up.',
    },
  ],
  entries: [
    {
      id: 'illustrative-bhopal-hospitality',
      title: 'Bhopal Hospitality & Fine Dining Venue Promotion',
      category: 'Hospitality / Food & Beverage',
      objective: 'Local Brand Discovery & WhatsApp Table Reservations',
      duration: '30-Day Testing & Scaling Cycle',
      spend: '₹4,500',
      reach: '18,400',
      impressions: '42,800',
      clicks: '680',
      cpc: '₹6.61',
      enquiries: '44',
      numericSpend: 4500,
      numericReach: 18400,
      numericImpressions: 42800,
      numericClicks: 680,
      numericCpc: 6.61,
      numericEnquiries: 44,
      contextNotes:
        'A local dining establishment in Bhopal tested localized ads within a 5 km radius. In week one, static photo ads yielded a CPC of ₹8.20. In week two, deploying a dynamic food preparation video Reel reduced the average CPC to ₹5.40 and accelerated inquiry momentum. Dedicated staff follow-up on WhatsApp within 5 minutes proved decisive in securing weekend group bookings.',
      ownership: 'founder-owned',
      status: 'illustrative',
    },
  ],
};
