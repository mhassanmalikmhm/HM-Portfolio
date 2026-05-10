import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}