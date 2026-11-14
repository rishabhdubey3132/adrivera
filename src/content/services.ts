export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export const servicesData = {
  eyebrow: '05 / Core Capabilities',
  headline: 'We Do Not Just Run Ads. We Engineer Local Market Dominance.',
  leadText:
    'From initial business positioning to creative production, audience calibration, and ongoing optimization, we handle every critical layer of your Meta advertising strategy.',
  items: [
    {
      number: '01',
      title: 'Strategic Campaign Architecture',
      description:
        'We study your business model, local customer buying habits, and specific revenue targets before architecting a tailor-made advertising roadmap.',
    },
    {
      number: '02',
      title: 'Precision Audience & Geo-Targeting',
      description:
        'Every business serves a distinct clientele. We deploy hyper-local radius targeting, demographic profiling, and interest filters tailored for Bhopal and regional markets.',
    },
    {
      number: '03',
      title: 'High-Converting Creative Production',
      description:
        'We design thumb-stopping 4:5 Feed visuals and captivating 9:16 short-form video Reels that highlight your unique offering and command viewer attention.',
    },
    {
      number: '04',
      title: 'Technical Configuration & Meta Setup',
      description:
        'We professionally configure campaign objectives, placement hierarchies, budget allocation rules, and destination tracking within Meta Ads Manager.',
    },
    {
      number: '05',
      title: 'Data-Driven Campaign Optimization',
      description:
        'We monitor live campaign performance continuously—refining audience bid parameters, pruning fatigued creatives, and scaling winning ad sets.',
    },
    {
      number: '06',
      title: 'Transparent Performance Analytics',
      description:
        'No vanity metrics or confusing agency jargon. You receive clear, honest monthly reports detailing exact ad spend, reach, click-through rates, and inquiry costs.',
    },
    {
      number: '07',
      title: 'Direct WhatsApp Inquiry Integration',
      description:
        'Eliminate purchase friction. We direct interested local customers straight into 1-on-1 conversations on your official WhatsApp number for swift closing.',
    },
  ] as ServiceItem[],
};
