export interface CompanyInfo {
  name: string;
  tagline: string;
  slogan: string;
  founded: string;
  location: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  facebook?: string;
  youtube?: string;
  ceo: string;
  mission: string;
  vision: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Product {
  id: string;
  category: string;
  icon: string;
  imageUrl?: string;
  images?: string[];
  imageSourceUrl?: string;
  name: string;
  description: string;
  brands: string[];
  specs: string[];
  tags: string[];
  sectionOrder?: ('description' | 'brands' | 'specs')[];
}

export interface Project {
  id: number;
  title: string;
  type: string;
  location: string;
  year: string;
  brand: string;
  qty: string;
  coverage: string;
  iot: boolean;
  extra?: string;
}

export interface TargetMarket {
  icon: string;
  name: string;
  desc: string;
}

export interface Client {
  name: string;
  website: string;
  logoUrl: string;
}

export interface Advantage {
  icon: string;
  title: string;
  desc: string;
}

export interface CompanyData {
  company: CompanyInfo;
  stats: Stat[];
  products: Product[];
  projects: Project[];
  clients: Client[];
  targetMarkets: TargetMarket[];
  certifications: string[];
  advantages: Advantage[];
}
