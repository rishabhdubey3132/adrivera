import { EnquirySection } from '@/components/EnquirySection';
import { PageIntro } from '@/components/PageIntro';
import { PageShell } from '@/components/PageShell';

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        index="05"
        eyebrow="Direct Consultation"
        headline="You Run Your Operations. We Engineer Your Market Visibility."
        description="Share your business profile, target customer base, and growth goals. We will audit your local market opportunity and recommend the highest-performing Meta Ads campaign structure."
        quote="Take the decisive first step toward building an authoritative digital presence today."
      />
      <EnquirySection />
    </PageShell>
  );
}
