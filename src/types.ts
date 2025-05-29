export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Profile {
  name: string;
  bio: string;
  skills: string[];
  experiences: Experience[];
  contactEmail: string;
}
