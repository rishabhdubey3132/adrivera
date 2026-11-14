'use client';

import React, { useState, useEffect } from 'react';
import {
  businessCategories,
  primaryObjectives,
  planOptions,
  EnquiryFormData,
  buildWhatsAppMessage,
} from '@/content/enquiry';
import { siteConfig } from '@/content/site';
import { ScrollReveal } from './ScrollReveal';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function EnquirySection() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    businessName: '',
    category: 'retail',
    location: 'Bhopal, Madhya Pradesh',
    objective: 'leads',
    preferredPlan: 'starter',
    contactName: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [composedMessage, setComposedMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Sync plan preselection from URL params or custom event
  useEffect(() => {
    const handlePlanSelect = (planId: string) => {
      const match = planOptions.find((p) => p.value === planId.toLowerCase());
      if (match) {
        setFormData((prev) => ({ ...prev, preferredPlan: match.value }));
      }
    };

    const checkUrlParams = () => {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(window.location.search);
      const planParam = params.get('plan');
      if (planParam) {
        handlePlanSelect(planParam);
      } else if (window.location.hash.includes('plan=')) {
        const hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
        const hashPlan = hashParams.get('plan');
        if (hashPlan) handlePlanSelect(hashPlan);
      }
    };

    checkUrlParams();
    window.addEventListener('hashchange', checkUrlParams);
    window.addEventListener('popstate', checkUrlParams);

    const customEventListener = (e: Event) => {
      const customEvent = e as CustomEvent<{ plan: string }>;
      if (customEvent.detail?.plan) {
        handlePlanSelect(customEvent.detail.plan);
      }
    };

    window.addEventListener('adrivera-select-plan', customEventListener);

    return () => {
      window.removeEventListener('hashchange', checkUrlParams);
      window.removeEventListener('popstate', checkUrlParams);
      window.removeEventListener('adrivera-select-plan', customEventListener);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business or venture name.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Please specify your business location or area.';
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Please enter your contact name.';
    }

    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone or WhatsApp number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildWhatsAppMessage(formData);
    setComposedMessage(message);

    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${siteConfig.contact.whatsappNumberPlaceholder}?text=${encoded}`;

    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = async () => {
    if (!composedMessage) return;
    try {
      await navigator.clipboard.writeText(composedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="enquiry" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg scroll-mt-20 relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="mb-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-eyebrow text-accent bg-tint/60 dark:bg-card border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              11 / Launch Your Campaign
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink dark:text-white tracking-tighter leading-tight mb-4">
              Tell Us About Your Business
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Complete the quick brief below to receive a personalized advertising strategy directly on WhatsApp. We will evaluate your market opportunity and discuss recommended campaign parameters.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delayMs={50}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xs space-y-6"
              >
                {/* Business Name */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-ink dark:text-white mb-2"
                  >
                    Business / Brand Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    aria-invalid={!!errors.businessName}
                    aria-describedby={errors.businessName ? 'businessName-error' : undefined}
                    placeholder="e.g. Malwa Organic Foods / City Dental Care"
                    className={`w-full min-h-[48px] px-4 text-sm bg-bg border rounded-xl text-ink dark:text-white placeholder:text-muted/60 focus:outline-none focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                      errors.businessName ? 'border-red-600' : 'border-border'
                    }`}
                  />
                  {errors.businessName && (
                    <p id="businessName-error" className="mt-1.5 text-xs text-red-600 font-medium">
                      {errors.businessName}
                    </p>
                  )}
                </div>

                {/* Category & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink dark:text-white mb-2"
                    >
                      Industry Category <span className="text-accent">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full min-h-[48px] px-4 text-sm bg-bg border border-border rounded-xl text-ink dark:text-white focus:outline-none focus:border-accent"
                    >
                      {businessCategories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink dark:text-white mb-2"
                    >
                      Operating Location <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      aria-invalid={!!errors.location}
                      aria-describedby={errors.location ? 'location-error' : undefined}
                      placeholder="e.g. Arera Colony, MP Nagar, Bhopal"
                      className={`w-full min-h-[48px] px-4 text-sm bg-bg border rounded-xl text-ink dark:text-white placeholder:text-muted/60 focus:outline-none focus:border-accent ${
                        errors.location ? 'border-red-600' : 'border-border'
                      }`}
                    />
                    {errors.location && (
                      <p id="location-error" className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Objective & Preferred Plan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="objective"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink dark:text-white mb-2"
                    >
                      Primary Growth Goal <span className="text-accent">*</span>
                    </label>
                    <select
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      className="w-full min-h-[48px] px-4 text-sm bg-bg border border-border rounded-xl text-ink dark:text-white focus:outline-none focus:border-accent"
                    >
                      {primaryObjectives.map((obj) => (
                        <option key={obj.value} value={obj.value}>
                          {obj.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredPlan"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink dark:text-white mb-2"
                    >
                      Target Package Tier <span className="text-accent">*</span>
                    </label>
                    <select
                      id="preferredPlan"
                      name="preferredPlan"
                      value={formData.preferredPlan}
                      onChange={handleChange}
                      className="w-full min-h-[48px] px-4 text-sm bg-bg border border-border rounded-xl text-ink dark:text-white focus:outline-none focus:border-accent"
                    >
                      {planOptions.map((plan) => (
                        <option key={plan.value} value={plan.value}>
                          {plan.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink dark:text-white mb-2"
                    >
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      aria-invalid={!!errors.contactName}
                      aria-describedby={errors.contactName ? 'contactName-error' : undefined}
                      placeholder="e.g. Rajesh Sharma"
                      className={`w-full min-h-[48px] px-4 text-sm bg-bg border rounded-xl text-ink dark:text-white placeholder:text-muted/60 focus:outline-none focus:border-accent ${
                        errors.contactName ? 'border-red-600' : 'border-border'
                      }`}
                    />
                    {errors.contactName && (
                      <p id="contactName-error" className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.contactName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink dark:text-white mb-2"
                    >
                      WhatsApp / Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      placeholder="e.g. 98260 00000"
                      className={`w-full min-h-[48px] px-4 text-sm bg-bg border rounded-xl text-ink dark:text-white placeholder:text-muted/60 focus:outline-none focus:border-accent ${
                        errors.phone ? 'border-red-600' : 'border-border'
                      }`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative flex h-13 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#1E4BD9] to-[#285BFF] hover:from-[#1A42C5] hover:to-[#2250EA] px-6 font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
                    <span>Send Brief on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Privacy Note */}
                <div className="pt-3 border-t border-border flex items-start gap-2.5 text-xs text-muted">
                  <ShieldCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    <span className="font-semibold text-ink dark:text-white">Privacy Guarantee: </span>
                    Your details are never sold or stored on external servers. This form formats an immediate message directly to our official WhatsApp business channel for complete transparency.
                  </p>
                </div>
              </form>
            </ScrollReveal>
          </div>

          {/* Right Column: Process Guide */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delayMs={100}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted block mb-2">
                  What Happens Next?
                </span>
                <h3 className="font-heading font-extrabold text-xl text-ink dark:text-white tracking-tight mb-5">
                  How We Process Your Campaign Inquiry
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-ink/85 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-accent flex-shrink-0 mt-0.5">01</span>
                    <span>We evaluate your industry category, competitive presence in Bhopal, and target commercial objectives.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-accent flex-shrink-0 mt-0.5">02</span>
                    <span>We suggest an optimal mix of creative formats (video Reels vs. static Feed) aligned with your budget.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-accent flex-shrink-0 mt-0.5">03</span>
                    <span>Exact budget allocation, ad deliverables, and launch timeline are mutually confirmed before going live.</span>
                  </li>
                </ul>

                <div className="p-4 rounded-xl bg-bg border border-border text-xs text-muted leading-relaxed">
                  <span className="font-semibold text-ink dark:text-white">ADrivera Commitment: </span>
                  Zero hidden agency markups, zero unrealistic sales guarantees, and 100% verified platform analytics.
                </div>
              </div>
            </ScrollReveal>

            {/* Formatted Message Fallback */}
            {composedMessage && (
              <ScrollReveal delayMs={140}>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                      Formatted Message Preview
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-3 py-1.5 text-xs font-mono font-semibold text-ink dark:text-white border border-border hover:bg-tint/50 transition-colors rounded-md"
                    >
                      {copied ? 'Copied to Clipboard!' : 'Copy Message'}
                    </button>
                  </div>

                  <pre className="font-mono text-xs text-ink/90 dark:text-gray-200 whitespace-pre-wrap bg-bg p-4 rounded-lg border border-border/80 leading-relaxed max-h-60 overflow-y-auto">
                    {composedMessage}
                  </pre>

                  <p className="mt-3 text-[11px] font-mono text-muted">
                    If WhatsApp does not launch automatically, copy this message and send it directly to our number.
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
