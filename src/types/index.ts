export interface CompanyExperience {
  id: string;
  companyName: string;
  role: string;
  period: string;
  startYear: number;
  endYear: number | 'Present';
  location: string;
  division: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
  brandColor: string;
  logoKey: 'lt-finance' | 'cnh-newholland' | 'aye-finance' | 'fullerton' | 'hdfc-life' | 'paytm';
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level: number; description: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: 'Debt Management & Collections' | 'MSME Lending' | 'Banking Regulations & Risk' | 'Rural & Agri Finance';
  summary: string;
  image: string;
  takeaways: string[];
  content: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  organization: string;
  location: string;
  category: 'Borrower' | 'Colleague / Manager' | 'Dealer Partner';
  verifiedLoanType?: string;
}

export interface EducationItem {
  degree: string;
  year: string;
  institution: string;
  division: string;
}
