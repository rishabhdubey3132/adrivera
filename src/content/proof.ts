import { siteContent, VerifiedStat, getRenderableStats } from './site';

export interface ProofContent {
  eyebrow: string;
  headline: string;
  leadText: string;
  simplerStatement: string;
  claimsNotice: string;
}

export const proofData: ProofContent = {
  eyebrow: '02 / Proven Track Record',
  headline: 'Grounded in Experience. Driven by Verified Data.',
  leadText:
    'Combining hands-on Meta Ads technical expertise, verified campaign delivery data, and an intimate understanding of the Bhopal market, we align your ad spend directly with measurable commercial objectives.',
  simplerStatement: 'Demonstrated Meta Ads performance with deep Central India market insight.',
  claimsNotice:
    'Commercial Transparency Policy: ADrivera rejects unsubstantiated claims and fabricated return multiples. We focus exclusively on verified platform data, genuine reach, and realistic performance benchmarks.',
};

export { getRenderableStats };
export type { VerifiedStat };
