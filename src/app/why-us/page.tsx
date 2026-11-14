import { BrandSection } from '@/components/BrandSection';
import { FAQSection } from '@/components/FAQSection';
import { PageIntro } from '@/components/PageIntro';
import { PageShell } from '@/components/PageShell';
import { ServicesSection } from '@/components/ServicesSection';
import { TrustSection } from '@/components/TrustSection';

export default function WhyUsPage() {
  return (
    <PageShell>
      <PageIntro
        index="01"
        eyebrow="The Strategic Imperative"
        headline="The Difference Between an Ordinary Venture and an Iconic Brand is Mindshare."
        description="Multiple businesses offer similar products and services within the same market. Yet only a select few command customer trust and pricing power—because their market visibility is persistent, professional, and memorable."
        quote="Your Vision. Your Offering. Your Enduring Brand."
      />
      <BrandSection useSerifHeadline />
      <ServicesSection />
      <TrustSection />
      <FAQSection />
    </PageShell>
  );
}
