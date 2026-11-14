export interface PlacementWireframe {
  id: string;
  label: string;
  aspectRatio: string;
  format: string;
  description: string;
}

export interface FlowStep {
  step: string;
  category: 'Platform' | 'Interaction' | 'Destination';
  title: string;
  role: string;
  description: string;
}

export const platformsData = {
  eyebrow: '06 / Placement Architecture',
  headline: 'Where Bhopal Pays Attention, Your Brand Dominates.',
  leadText:
    'Your prospective customers spend hours every day scrolling Instagram and Facebook. With tailored aspect ratios and strategic placement mapping, your brand appears at the exact moment of highest user attention.',
  wireframes: [
    {
      id: 'feed',
      label: 'Facebook & Instagram Feed',
      aspectRatio: '4:5',
      format: 'In-Feed Sponsored Post',
      description:
        'Native feed placement where high-contrast visual framing and compelling headline copy capture scrolling attention instantaneously.',
    },
    {
      id: 'stories',
      label: 'Instagram & Facebook Stories',
      aspectRatio: '9:16',
      format: 'Full-Screen Story Canvas',
      description:
        'Full-screen vertical immersion designed for direct interactive polls, quick swipe gestures, and rapid 1-on-1 message initiation.',
    },
    {
      id: 'reels',
      label: 'Instagram & Facebook Reels',
      aspectRatio: '9:16',
      format: 'Short-Form Video Reel',
      description:
        'High-velocity video content favored by platform algorithms, delivering unmatched organic viral resonance and local engagement.',
    },
  ] as PlacementWireframe[],
  flowSteps: [
    {
      step: '01',
      category: 'Platform',
      title: 'Ad Viewed on Feed or Reels',
      role: 'Discovery Canvas',
      description:
        'Qualified local prospects in Bhopal encounter your high-definition sponsored ad while actively exploring their social feeds.',
    },
    {
      step: '02',
      category: 'Interaction',
      title: 'Prospect Taps Call-to-Action',
      role: 'Intent Capture',
      description:
        'Engaged customers tap the verified action button ("Send WhatsApp Message" or "Claim Offer") with zero interstitial friction.',
    },
    {
      step: '03',
      category: 'Destination',
      title: 'Direct 1-on-1 WhatsApp Chat',
      role: 'Customer Conversion',
      description:
        'The prospect immediately lands in your verified WhatsApp business inbox with a pre-formatted message ready for immediate closing.',
    },
  ] as FlowStep[],
  placementNote:
    'Every campaign has a unique placement footprint. We curate the optimal blend of Feed, Stories, and Reels based strictly on your business targets and asset strengths.',
  distinctionNote:
    'Meta Ads (Facebook & Instagram) generate high-intent traffic and market discovery, while WhatsApp provides the high-converting conversion channel.',
};
