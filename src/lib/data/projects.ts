interface Project {
  name: string;
  description: string;
  tech: string[];
  status: 'Completed' | 'In Development' | 'Ongoing';
  year: string;
  color: string;
  progress?: number;
  github?: string | null;
  demo?: string | null;
}

export const projects: Project[] = [
  {
    name: 'Sevenwiki',
    description: 'Modern wiki platform built with Rust backend and Svelte frontend',
    tech: ['Rust', 'Axum', 'PostgreSQL', 'Svelte', 'TypeScript'],
    status: 'In Development',
    year: '2023-2024',
    color: 'from-purple-500 to-purple-600',
    progress: 65,
    github: 'https://github.com/shiueo/sevenwiki',
    demo: 'https://sevenwiki.org'
  },
  {
    name: 'Vocaloid Cover Collection',
    description: 'Series of Vocaloid covers with custom vocal tuning and arrangements',
    tech: ['Vocaloid', 'Logic Pro', 'Audio Engineering'],
    status: 'Ongoing',
    year: '2020-2024',
    color: 'from-blue-500 to-blue-600',
    progress: 80,
    github: null,
    demo: 'https://youtube.com/@shiueo'
  },
  {
    name: 'Personal Portfolio',
    description: 'Interactive resume and portfolio website showcasing projects and skills',
    tech: ['NextJS', 'Svelte', 'Tailwind CSS', 'TypeScript'],
    status: 'Completed',
    year: '2024',
    color: 'from-green-500 to-green-600',
    progress: 100,
    github: 'https://github.com/shiueo/portfolio',
    demo: 'https://shiueo.dev'
  }
];
