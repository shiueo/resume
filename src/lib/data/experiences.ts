interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  bgColor: string;
  description: string;
  type: string;
  skills: string[];
  isActive: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'Sevenwiki',
    role: 'Co-Founder',
    period: '2023 - Present',
    location: 'South Korea',
    logo: 'S',
    bgColor: 'from-purple-500 to-purple-600',
    description: 'Building innovative wiki platform with modern web technologies',
    type: 'Startup',
    skills: ['Leadership', 'Product Design', 'Full-Stack Development'],
    isActive: true
  },
  {
    company: 'KAIST Hard Rock Band KANGJEOK',
    role: 'Guitarist',
    period: '2023 - Present',
    location: 'KAIST, Daejeon',
    logo: '🎸',
    bgColor: 'from-red-500 to-red-600',
    description: '40th generation guitarist, performing at university events and festivals',
    type: 'Music',
    skills: ['Guitar', 'Performance', 'Teamwork'],
    isActive: true
  },
  {
    company: 'Freelance',
    role: 'Vocaloid Producer',
    period: '2020 - Present',
    location: 'Remote',
    logo: '🎵',
    bgColor: 'from-blue-500 to-blue-600',
    description: 'Creating Vocaloid covers and original compositions, tuning vocals with precision',
    type: 'Creative',
    skills: ['Music Production', 'Audio Engineering', 'Creative Direction'],
    isActive: true
  }
];
