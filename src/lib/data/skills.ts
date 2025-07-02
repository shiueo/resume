interface Skill {
  title: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}

export const skills: Skill[] = [
  {
    title: 'Programming Languages',
    description: 'Proficient in Rust, Python, JavaScript, and TypeScript',
    icon: '💻',
    color: 'bg-blue-500',
    tags: ['Rust', 'Python', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Experience with NextJS, Svelte, React, and Vue',
    icon: '📚',
    color: 'bg-green-500',
    tags: ['NextJS', 'Svelte', 'React', 'Vue']
  },
  {
    title: 'Tools & Technologies',
    description: 'Familiar with Git, Docker, Kubernetes, and CI/CD pipelines',
    icon: '🛠️',
    color: 'bg-orange-500',
    tags: ['Git', 'Docker', 'Kubernetes', 'CI/CD']
  }
];
