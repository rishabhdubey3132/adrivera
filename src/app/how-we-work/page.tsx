import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { PageIntro } from '@/components/PageIntro';
import { PageShell } from '@/components/PageShell';
import { PlatformsSection } from '@/components/PlatformsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ProofSection } from '@/components/ProofSection';

export default function HowWeWorkPage() {
  return (
    <PageShell>
      <PageIntro
        index="02"
        eyebrow="Operational Methodology"
        headline="Grounded in Experience. Accelerated by Real-Time Platform Data."
        description="We do not just run ads. We analyze your commercial strengths, profile target customer intent in Bhopal, deploy thumb-stopping creative assets, and calibrate campaigns continuously using transparent performance data."
        quote="From initial impression to verified WhatsApp inquiry—strategy backed by evidence."
      />
      <ProcessSection />
      <PlatformsSection />
      <ProofSection />
      <CaseStudiesSection />
    </PageShell>
  );
}
