import { StaticImageData } from 'next/image';

export type platformsAndServicesType = {
  title: string;
  startDate: string;
  tooltip: string;
  icon?: React.ReactElement;
  img?: StaticImageData;
  span?: number;
  colSpan?: number;
  services: {
    name: string;
    tooltip: string;
    img?: StaticImageData;
    icon?: React.ReactElement;
  }[];
};

export type UpworkClientsType = {
  img?: StaticImageData;
  title: string;
  rating: number;
};

export type TestimonialType = {
  name: string;
  img: StaticImageData;
  position: string;
  testimonial: string;
};

export type WorkExType = {
  position: string;
  company: string;
  location?: 'USA' | 'Canada' | 'UK' | 'UAE' | 'Egypt';
  workType?: 'Remote' | 'On-site' | 'Hybrid';
  employmentType: 'Full-time' | 'Freelance' | 'Part-time';
  startDate: string;
  endDate?: string;
  img: StaticImageData | string;
  descIntro?: string;
  desc: { bold: string; text: string }[];
};

type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface QuestionItemProps {
  id: number;
  title: string;
  difficulty: Difficulty;
  timeEstimate: number;
  topics: string[];
  leetCodeUrl: string;
  videoUrl?: string;
  completed: boolean;
}
