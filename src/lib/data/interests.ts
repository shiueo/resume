interface Interest {
  title: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}

export const interests: Interest[] = [
  {
    title: 'Music Production',
    description:
      'Creating Vocaloid covers and original compositions, exploring the intersection of technology and music',
    icon: '🎵',
    color: 'bg-blue-500',
    tags: ['Vocaloid', 'Audio Engineering', 'Composition']
  },
  {
    title: 'Guitar & Rock Music',
    description: "Playing guitar in KAIST's hard rock band KANGJEOK, performing at university events",
    icon: '🎸',
    color: 'bg-red-500',
    tags: ['Electric Guitar', 'Rock', 'Live Performance']
  },
  {
    title: 'Open Source',
    description: 'Contributing to open source projects and building tools that help the developer community',
    icon: '💻',
    color: 'bg-green-500',
    tags: ['Rust', 'GitHub', 'Community']
  },
  {
    title: 'Technology Innovation',
    description: 'Exploring cutting-edge technologies and their applications in solving real-world problems',
    icon: '🚀',
    color: 'bg-purple-500',
    tags: ['AI/ML', 'Web3', 'Systems Programming']
  }
];
