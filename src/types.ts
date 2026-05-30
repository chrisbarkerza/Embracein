export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  energy: string;
  image: string;
}

export interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  experience: string; // Describe what it physically feels like
  details: string[];
  suitedFor: string[];
}

export interface ServiceCategory {
  id: string;
  emoji?: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  offerings: ServiceDetail[];
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  context: string; // e.g., "Postpartum Doula Care", "Aura Awakening Yoga"
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "all" | "doula" | "yoga" | "booking";
}
