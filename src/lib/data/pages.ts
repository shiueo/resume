interface Page {
  id: string;
  title: string;
  icon: string;
}

export const pages: Page[] = [
  { id: 'about', title: 'About', icon: '🍣' },
  { id: 'education', title: 'Education', icon: '🎓' },
  { id: 'experience', title: 'Experience', icon: '💼' },
  { id: 'skills', title: 'Skills', icon: '⚡' },
  { id: 'projects', title: 'Projects', icon: '🚀' },
  { id: 'interests', title: 'Interests', icon: '🎸' }
];
