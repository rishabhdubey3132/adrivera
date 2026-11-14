import { BrandSection } from '@/components/BrandSection';
import { PageIntro } from '@/components/PageIntro';
import { PageShell } from '@/components/PageShell';
import { TrustSection } from '@/components/TrustSection';

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        index="04"
        eyebrow="About ADrivera"
        headline="Do Not Just Run a Business. Build an Enduring Brand."
        description="ADrivera is a dedicated Meta Ads partner engineered for ambitious local and regional businesses. We operate with radical transparency, realistic commercial benchmarks, and relentless performance optimization."
        quote="Transform your local footprint into your city's most recognized and respected commercial brand."
      />
      <BrandSection />
      <TrustSection />
    </PageShell>
  );
}
