export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  lang?: string;
}

export const faqsData = {
  eyebrow: '12 / Clarifications & FAQs',
  headline: 'Frequently Asked Questions — Transparent Answers',
  leadText:
    'Key questions from business owners regarding budgets, ad spend allocation, creative deliverables, and campaign timelines.',
  items: [
    {
      id: 'faq-1',
      question: 'Is Meta ad spend included in the ₹5,000 Starter Plan?',
      answer:
        'Yes. The Starter Plan is an all-inclusive monthly package for ₹5,000. Campaign scope, ad spend allocation, and deliverables are transparently finalized prior to launch. There are zero hidden setup costs or agency surcharges.',
    },
    {
      id: 'faq-2',
      question: 'Are sales or inquiries guaranteed?',
      answer:
        'No agency can ethically guarantee fixed sales. We guarantee professional campaign architecture, verified targeting, compelling creatives, and transparent reporting. Final conversion depends on offer strength, pricing, and prompt inquiry response.',
    },
    {
      id: 'faq-3',
      question: 'What if our business has never run digital ads before?',
      answer:
        'The Starter Plan is designed specifically for first-time advertisers. It allows you to test the waters with a predictable, low-risk budget, review real platform metrics, and build confidence before scaling your marketing budget.',
    },
    {
      id: 'faq-4',
      question: 'What if we require higher ad spend or multi-city reach?',
      answer:
        'You can seamlessly upgrade to our Growth, Premium, or bespoke Custom packages. We will evaluate your multi-city objectives and configure an advanced multi-stage funnel tailored to your expansion targets.',
    },
    {
      id: 'faq-5',
      question: 'Can you run ads for my specific business category?',
      answer:
        'Yes. We have executed campaigns across retail, dining, healthcare clinics, educational coaching, real estate, and professional local services. Share your business profile with us to review relevant campaign frameworks.',
    },
    {
      id: 'faq-6',
      question: 'Which platforms and placements will our ads run on?',
      answer:
        'We run campaigns natively on Facebook and Instagram using Meta Ads Manager. Placements include high-impact 4:5 Feed posts, 9:16 vertical Stories, and short-form video Reels, with direct routing to your business WhatsApp.',
    },
    {
      id: 'faq-7',
      question: 'Do you produce vertical video Reel ads?',
      answer:
        'Yes, AI-assisted video Reel ads are included in our Growth and higher packages. The Starter Plan focuses on single primary static creatives and client-supplied visual assets.',
    },
    {
      id: 'faq-8',
      question: 'How frequently are ad creatives updated?',
      answer:
        'Creative refresh frequency corresponds to your chosen plan. Starter includes a focused primary ad asset, while Growth and Premium include regular iterations and A/B variations to prevent audience ad fatigue.',
    },
    {
      id: 'faq-9',
      question: 'What happens if ads receive clicks but few purchases?',
      answer:
        'We diagnose the complete customer journey. If click-through rates are high but inquiries lag, we analyze offer clarity, pricing perception, competitor actions, and follow-up response speed to recalibrate.',
    },
    {
      id: 'faq-10',
      question: 'Do you offer in-person strategy meetings in Bhopal?',
      answer:
        'Starter is managed conveniently via WhatsApp, phone, and online video calls. The Growth package includes 1 scheduled in-person strategy review per month in Bhopal, while Premium includes regular in-person alignment sessions.',
    },
    {
      id: 'faq-11',
      question: 'Can we configure a customized advertising budget?',
      answer:
        'Yes. For businesses with specialized objectives, multi-location requirements, or budgets exceeding standard tiers, we formulate bespoke Custom plans with tailored creative and reporting schedules.',
    },
  ] as FAQItem[],
};
