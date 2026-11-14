export interface EnquiryOption {
  value: string;
  label: string;
}

export const businessCategories: EnquiryOption[] = [
  { value: 'retail', label: 'Retail & Consumer Goods (Shops, Showrooms, D2C)' },
  { value: 'food-hospitality', label: 'Restaurants, Cafes, Bakeries & Hospitality' },
  { value: 'healthcare-wellness', label: 'Clinics, Dental Centers, Hospitals & Wellness' },
  { value: 'education-coaching', label: 'Coaching Institutes, Academies & EdTech' },
  { value: 'real-estate', label: 'Real Estate Builders, Projects & Commercial Properties' },
  { value: 'professional-services', label: 'Professional & Corporate Services' },
  { value: 'local-services', label: 'Local Services (Gyms, Salons, Event Venues)' },
  { value: 'other', label: 'Other Commercial Venture' },
];

export const primaryObjectives: EnquiryOption[] = [
  { value: 'leads', label: 'Increase Inbound Inquiries & Qualified Leads' },
  { value: 'brand-awareness', label: 'Establish Dominant Local Brand Visibility' },
  { value: 'whatsapp-chat', label: 'Initiate Direct WhatsApp Customer Chats' },
  { value: 'offer-promotion', label: 'Launch New Offers, Products or Store Openings' },
  { value: 'store-visits', label: 'Drive Physical Store Visits & Venue Footfall' },
];

export const planOptions: EnquiryOption[] = [
  { value: 'starter', label: 'Starter — ₹5,000/month (Low-Risk Evaluation)' },
  { value: 'growth', label: 'Growth — ₹8,000/month (Video Reels & Optimization)' },
  { value: 'premium', label: 'Premium — ₹16,000/month (Full Funnel Retargeting)' },
  { value: 'custom', label: 'Custom — ₹30,000+/month (Bespoke Enterprise Scope)' },
];

export interface EnquiryFormData {
  businessName: string;
  category: string;
  location: string;
  objective: string;
  preferredPlan: string;
  contactName: string;
  phone: string;
}

export function buildWhatsAppMessage(data: EnquiryFormData): string {
  const categoryLabel =
    businessCategories.find((c) => c.value === data.category)?.label || data.category;
  const objectiveLabel =
    primaryObjectives.find((o) => o.value === data.objective)?.label || data.objective;
  const planLabel =
    planOptions.find((p) => p.value === data.preferredPlan)?.label || data.preferredPlan;

  return `Hello ADrivera Team,

I would like to explore Meta advertising (Facebook & Instagram) for my business. Here are my details:

• Business Name: ${data.businessName.trim()}
• Category: ${categoryLabel}
• Location: ${data.location.trim()}
• Primary Objective: ${objectiveLabel}
• Selected Package: ${planLabel}
• Contact Person: ${data.contactName.trim()}
• Phone / WhatsApp: ${data.phone.trim()}

Please review my requirements and advise on the next steps to launch our campaign.`;
}
