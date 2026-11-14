export interface VisibilityBenefit {
  number: string;
  title: string;
  summary: string;
  description: string;
  isHinglishSummary?: boolean;
}

export const visibilityData = {
  eyebrow: '03 / The Visibility Gap',
  headline: 'Great Products Deserve Greater Visibility. Close The Local Market Gap.',
  openingPullQuote:
    'Your competitors are actively capturing digital attention every single day. Put your offering directly in front of the local customers who need it most.',
  leadText:
    'Word-of-mouth and traditional walk-ins are valuable, but they have natural ceilings. Meta Ads introduces your business to the vast majority of qualified customers in Bhopal and Central India who have yet to discover what you offer.',
  benefits: [
    {
      number: '01',
      title: 'Targeted Discovery',
      summary: 'Introduce your brand to thousands of qualified local prospects.',
      isHinglishSummary: false,
      description:
        'Present your products directly to active social media users residing within your immediate service radius in Bhopal.',
    },
    {
      number: '02',
      title: 'Brand Familiarity',
      summary: 'Build top-of-mind brand recall and consumer trust across your city.',
      isHinglishSummary: false,
      description:
        'Consistent, high-impact visibility across Instagram Reels and Facebook feeds turns casual scrollers into familiar, trusting prospects.',
    },
    {
      number: '03',
      title: 'Immediate Action',
      summary: 'Convert attention into direct 1-on-1 customer conversations.',
      isHinglishSummary: false,
      description:
        'Strategic calls-to-action prompt interested customers to initiate inquiries directly on WhatsApp or call your business immediately.',
    },
  ] as VisibilityBenefit[],
  closingLine: 'A remarkable product without visibility is like a diamond in the dark. Let your city discover what you offer.',
  qualificationNote:
    'Every business possesses unique advertising priorities. A restaurant seeks weekend dining reservations, a clinic seeks patient consultations, and a retail store seeks local store visits. We engineer every campaign around your exact commercial intent.',
};

export const brandBuildingData = {
  eyebrow: '04 / Brand Equity',
  headline: 'The Difference Between a Local Shop and an Iconic Brand is Mindshare.',
  leadLine: 'Do not just operate a business—build an enduring regional brand.',
  paragraphs: [
    'In any competitive market, multiple vendors offer similar products and services. Yet only a handful command customer preference and pricing power—because their market visibility is consistent, professional, and trusted.',
    'Targeted Facebook and Instagram advertising transforms you from an occasional choice into the definitive go-to destination in your city. Elevate your presence and claim your rightful market share.',
  ] as string[],
  opportunityIntro: 'Transform your local footprint into your city’s most recognizable brand.',
  opportunities: [
    'Cultivate an authoritative, premium brand identity across Central India.',
    'Showcase your offerings with modern, high-definition visual storytelling.',
    'Maintain steady, consistent mindshare with relevant local audiences.',
    'Launch seasonal campaigns, new collections, or branch openings with maximum reach.',
    'Command superior pricing power and customer loyalty through recognized authority.',
  ] as string[],
  pullStatement: 'Your Vision. Your Offering. Your Enduring Brand.',
  qualification:
    'Advertising amplifies your brand reach, while product excellence and customer service sustain enduring loyalty. We focus on strategic ad execution and verified performance reporting.',
};
