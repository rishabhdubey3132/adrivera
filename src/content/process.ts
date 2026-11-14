export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processData = {
  eyebrow: '07 / Strategic Framework',
  headline: 'Systematic Execution. Zero Guesswork.',
  leadText:
    'We follow an agile, four-phase operational framework designed to test what resonates with your local audience and scale campaign performance methodically.',
  steps: [
    {
      step: '01',
      title: 'Discovery & Market Alignment',
      description:
        'We study your business offering, competitive landscape in Bhopal, and target customer profiles to establish clear, realistic campaign goals.',
    },
    {
      step: '02',
      title: 'Creative Production & Launch',
      description:
        'We develop high-impact ad creatives, configure precise geo-radius audience segments, and launch your campaign on Facebook and Instagram.',
    },
    {
      step: '03',
      title: 'Active Calibration & Testing',
      description:
        'We track live response data, optimize bid strategies, and adjust creative hooks to ensure maximum inquiry velocity for your budget.',
    },
    {
      step: '04',
      title: 'Transparent Reporting & Scaling',
      description:
        'We review verified ad spend, unique reach, and customer actions with you, using clean data to guide your subsequent scaling decisions.',
    },
  ] as ProcessStep[],
  footnote:
    'Performance advertising is an evidence-based iterative discipline. We focus on continuous optimization rather than speculative sales promises.',
};
