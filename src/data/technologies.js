import { getTechnologyIcon, getCertificationIcon } from '../utils/iconMapping';

// Utility function to calculate experience dynamically
const calculateExperience = (startYear, startMonth = 1) => {
  const startDate = new Date(startYear, startMonth - 1); // Month is 0-based
  const now = new Date();
  const diffTime = now - startDate;
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  const years = Math.floor(diffYears);
  return years > 0 ? `${years}+ years` : `${Math.floor(diffYears * 12)} months`;
};

export const technologies = {
  frontend: {
    category: 'Frontend Development',
    icon: 'CodeBracketIcon',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      {
        name: 'React',
        level: 'Expert',
        experience: calculateExperience(2021, 7), // Started July 2021
        icon: getTechnologyIcon('React'),
        description: 'Building scalable user interfaces with hooks, context, and modern patterns'
      },
      {
        name: 'TypeScript',
        level: 'Expert',
        experience: '3+ years',
        icon: getTechnologyIcon('TypeScript'),
        description: 'Type-safe JavaScript development for better code quality'
      },
      {
        name: 'Next.js',
        level: 'Intermediate',
        experience: '2+ years',
        icon: getTechnologyIcon('Next.js'),
        description: 'Full-stack React framework with SSR, SSG, and API routes'
      },
      {
        name: 'Tailwind CSS',
        level: 'Intermediate',
        experience: '2+ years',
        icon: getTechnologyIcon('Tailwind CSS'),
        description: 'Utility-first CSS framework for rapid UI development'
      },
      {
        name: 'React Query',
        level: 'Expert',
        experience: '4+ years',
        icon: getTechnologyIcon('React Query'),
        description: 'Query client for React applications'
      },
      {
        name: 'Redux',
        level: 'Expert',
        experience: '2+ years',
        icon: getTechnologyIcon('Redux'),
        description: 'State management library for React applications'
      },
      
    ]
  },
  backend: {
    category: 'Backend Development',
    icon: 'ServerIcon',
    color: 'from-green-500 to-emerald-500',
    technologies: [
      {
        name: 'Node.js',
        level: 'Beginner',
        experience: calculateExperience(2025, 7), // Started July 2021
        icon: getTechnologyIcon('Node.js'),
        description: 'Server-side JavaScript runtime for scalable applications'
      },
      {
        name: 'Express.js',
        level: 'Beginner',
        experience: calculateExperience(2025, 7), // Started July 2021
        icon: getTechnologyIcon('Express.js'),
        description: 'Minimal web framework for Node.js API development'
      },
      {
        name: 'Nest.js',
        level: 'Beginner',
        experience: calculateExperience(2025, 7),
        icon: getTechnologyIcon('Nest.js'),
        description: 'Advanced web framework for Node.js API development'
      },
      {
        name: 'PostgreSQL',
        level: 'Beginner',
        experience: calculateExperience(2025, 7),
        icon: getTechnologyIcon('PostgreSQL'),
        description: 'Advanced open-source relational database system'
      },
      {
        name: 'Redis',
        level: 'Beginner',
        experience: calculateExperience(2025, 7),
        icon: getTechnologyIcon('Redis'),
        description: 'In-memory data structure store for caching and sessions'
      },
    ]
  },
  mobile: {
    category: 'Mobile Development',
    icon: 'DevicePhoneMobileIcon',
    color: 'from-purple-500 to-pink-500',
    technologies: [
      {
        name: 'React Native',
        level: 'Beginner',
        experience: '2+ years',
        icon: getTechnologyIcon('React Native'),
        description: 'Cross-platform mobile development with React'
      },
      {
        name: 'Expo',
        level: 'Beginner',
        experience: '2+ years',
        icon: getTechnologyIcon('Expo'),
        description: 'Platform for universal React applications'
      },
    ]
  },
  // cloud: {
  //   category: 'Cloud & DevOps',
  //   icon: 'CloudIcon',
  //   color: 'from-orange-500 to-red-500',
  //   technologies: [
  //     {
  //       name: 'AWS',
  //       level: 'Advanced',
  //       experience: '3+ years',
  //       icon: '☁️',
  //       description: 'Amazon Web Services cloud computing platform'
  //     },
  //     {
  //       name: 'Docker',
  //       level: 'Advanced',
  //       experience: '2+ years',
  //       icon: '🐳',
  //       description: 'Containerization platform for application deployment'
  //     },
  //     {
  //       name: 'Kubernetes',
  //       level: 'Intermediate',
  //       experience: '1+ years',
  //       icon: '⚓',
  //       description: 'Container orchestration for scalable applications'
  //     },
  //     {
  //       name: 'GitHub Actions',
  //       level: 'Advanced',
  //       experience: '2+ years',
  //       icon: '⚙️',
  //       description: 'CI/CD automation and workflow management'
  //     },
  //     {
  //       name: 'Terraform',
  //       level: 'Intermediate',
  //       experience: '1+ years',
  //       icon: '🏗️',
  //       description: 'Infrastructure as Code for cloud resource management'
  //     }
  //   ]
  // },
  // design: {
  //   category: 'Design & Tools',
  //   icon: 'PaintBrushIcon',
  //   color: 'from-indigo-500 to-purple-500',
  //   technologies: [
  //     {
  //       name: 'Figma',
  //       level: 'Advanced',
  //       experience: '3+ years',
  //       icon: '🎨',
  //       description: 'Collaborative design tool for UI/UX design'
  //     },
  //     {
  //       name: 'Adobe XD',
  //       level: 'Intermediate',
  //       experience: '2+ years',
  //       icon: '🎭',
  //       description: 'Vector-based user experience design tool'
  //     },
  //     {
  //       name: 'Framer Motion',
  //       level: 'Advanced',
  //       experience: '2+ years',
  //       icon: '🎬',
  //       description: 'Production-ready motion library for React'
  //     },
  //     {
  //       name: 'GSAP',
  //       level: 'Intermediate',
  //       experience: '1+ years',
  //       icon: '✨',
  //       description: 'Professional-grade animation library for the web'
  //     }
  //   ]
  // }
};

export const techStats = {
  totalTechnologies: Object.values(technologies).reduce((acc, category) => acc + category.technologies.length, 0),
  categories: Object.keys(technologies).length,
  expertLevel: Object.values(technologies).reduce((acc, category) => 
    acc + category.technologies.filter(tech => tech.level === 'Expert').length, 0),
  get yearsOfExperience() {
    // Dynamic calculation from July 15, 2021
    const startDate = new Date('2021-07-15');
    const now = new Date();
    const diffTime = now - startDate;
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(diffYears);
  }
};

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-CSA-2023-001',
    logo: getCertificationIcon('Amazon Web Services'),
    verifyUrl: 'https://aws.amazon.com/verification'
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-PD-2022-001',
    logo: getCertificationIcon('Google Cloud'),
    verifyUrl: 'https://cloud.google.com/certification/verification'
  },
  {
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2023',
    credentialId: 'MDB-DEV-2023-001',
    logo: getCertificationIcon('MongoDB University'),
    verifyUrl: 'https://university.mongodb.com/verification'
  },
  {
    name: 'Meta React Developer Certificate',
    issuer: 'Meta (Facebook)',
    date: '2022',
    credentialId: 'META-REACT-2022-001',
    logo: getCertificationIcon('Meta (Facebook)'),
    verifyUrl: 'https://developers.facebook.com/certification'
  }
];

export const learningGoals = [
  {
    technology: 'WebAssembly',
    reason: 'High-performance web applications',
    timeline: '2025 Q1'
  },
  {
    technology: 'Rust',
    reason: 'System programming and performance',
    timeline: '2025 Q2'
  },
  {
    technology: 'Machine Learning',
    reason: 'AI-powered applications',
    timeline: '2025 Q3'
  },
  {
    technology: 'Web3/Blockchain',
    reason: 'Decentralized applications',
    timeline: '2025 Q4'
  }
];
