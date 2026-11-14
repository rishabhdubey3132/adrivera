export interface TrustContent {
  eyebrow: string;
  headline: string;
  promiseParagraphs: string[];
  agencyResponsibilities: string[];
  customerResponsibilities: string[];
  commitmentNote: string;
}

export const trustContent: TrustContent = {
  eyebrow: '11 / Accountability & Standards',
  headline: 'We Do Not Sell Illusions. We Build Transparent Partnerships.',
  promiseParagraphs: [
    'Every business operates under distinct commercial realities. Product quality, market pricing, local competition, and frontline customer service all directly influence bottom-line conversions.',
    'Our core responsibility is to professionally configure, monitor, and optimize your agreed Meta advertising campaigns while providing completely honest, unmanipulated performance data.',
    'We reject misleading guarantees and arbitrary return claims. We focus on rigorous advertising execution, proactive communication, and verifiable customer acquisition data.',
  ],
  agencyResponsibilities: [
    'Professional campaign architecture and technical Meta Ads Manager configuration.',
    'Precision audience profiling, Bhopal geo-radius targeting, and optimal placement selection.',
    'Creation and delivery of approved ad visuals, video Reels, and persuasive advertising copy.',
    'Routine campaign monitoring and scope-aligned weekly performance optimization.',
    'Detailed monthly analytics reports with 100% verified platform delivery data.',
  ],
  customerResponsibilities: [
    'Providing accurate, up-to-date information regarding business offerings and pricing.',
    'Sharing product photographs, seasonal offers, and brand assets in a timely fashion.',
    'Promptly following up on inbound customer WhatsApp inquiries and phone leads.',
    'Maintaining high standards of product quality and courteous customer service.',
    'Reviewing and signing off on ad creative variations and campaign strategies.',
  ],
  commitmentNote:
    'A defined division of responsibilities establishes clear mutual expectations, professional accountability, and sustained marketing momentum.',
};

export const promisesData = trustContent;
