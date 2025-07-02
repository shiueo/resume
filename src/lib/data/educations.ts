interface Education {
  institution: string;
  degree: string;
  period: string;
  year: string;
  logo: string;
  bgColor: string;
  description: string;
  status: 'Current' | 'Completed';
  progress: number;
}

export const education: Education[] = [
  {
    institution: 'Korea Advanced Institute of Science and Technology (KAIST)',
    degree: 'B.S. Computer Science & Software Engineering',
    period: '2025 (Expected)',
    year: '25th',
    logo: '🎓',
    bgColor: 'from-blue-500 to-blue-600',
    description: 'Double major in Computer Science and Software Engineering',
    status: 'Current',
    progress: 75
  },
  {
    institution: 'Korea Science Academy of KAIST (KSA)',
    degree: 'High School Diploma',
    period: '2022',
    year: '22nd',
    logo: '🔬',
    bgColor: 'from-purple-500 to-purple-600',
    description: 'Specialized science high school for gifted students',
    status: 'Completed',
    progress: 100
  },
  {
    institution: 'Hanyang University Software Gifted Education Center',
    degree: 'Gifted Education Program',
    period: '2019',
    year: '',
    logo: '💻',
    bgColor: 'from-green-500 to-green-600',
    description: 'Early exposure to advanced software development concepts',
    status: 'Completed',
    progress: 100
  }
];
