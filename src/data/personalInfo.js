export const personalInfo = {
  name: 'Alan Jomy Joseph',
  title: 'Full Stack Developer',
  tagline: 'Crafting Digital Products',
  get bio() {
    const years = this.experience.yearsOfExperience;
    const experience = years > 0 ? `${years}+ years` : this.experience.totalExperienceFormatted;
    return `Full-stack developer with ${experience} of experience, specializing in React and Node.js/NestJS. Passionate about creating impactful products. Outside of work, I enjoy badminton, cricket, and supporting Liverpool FC.`;
  },
  location: 'San Francisco, CA',
  timezone: 'PST (UTC-8)',

  // Contact Information
  contact: {
    email: 'alanjomy22@gmail.com',
    phone: '+91 8078049242',
    website: 'https://alanjomy22.dev',
    calendly: 'https://calendly.com/alanjomy22',
  },

  // Social Media Links
  social: {
    github: {
      url: 'https://github.com/alanjomy22',
      username: 'alanjomy22',
      followers: '2.5K',
    },
    linkedin: {
      url: 'https://linkedin.com/in/alan-jomy-joseph',
      username: 'alan-jomy-joseph',
      connections: '5K+',
    },
    instagram: {
      url: 'https://instagram.com/that__backpacker',
      username: '@that__backpacker',
      followers: '850',
    },
  },

  // Professional Information
  experience: {
    startDate: new Date('2021-07-15'),
    get yearsOfExperience() {
      const now = new Date();
      const diffTime = now - this.startDate;
      const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
      return Math.floor(diffYears);
    },
    get monthsOfExperience() {
      const now = new Date();
      const diffTime = now - this.startDate;
      const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30.44); // Average days per month
      return Math.floor(diffMonths);
    },
    get totalExperienceFormatted() {
      const years = this.yearsOfExperience;
      const totalMonths = this.monthsOfExperience;
      const months = totalMonths % 12;

      if (years === 0) {
        return `${totalMonths} month${totalMonths === 1 ? '' : 's'}`;
      } else if (months === 0) {
        return `${years} year${years === 1 ? '' : 's'}`;
      } else {
        return `${years} year${years === 1 ? '' : 's'} ${months} month${months === 1 ? '' : 's'}`;
      }
    },
    projectsCompleted: 6,
    clientsSatisfied: 6,
    technologiesMastered: 10,
  },

  // Current Status
  availability: {
    status: 'available', // 'available', 'busy', 'unavailable'
    nextAvailable: '2025-02-01',
    workingHours: '9:00 AM - 6:00 PM PST',
    responseTime: '24 hours',
  },

  // Skills & Expertise
  skills: {
    frontend: {
      title: 'Frontend Development',
      percentage: 95,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'React Query', 'Redux'],
    },
    backend: {
      title: 'Backend Development',
      percentage: 90,
      technologies: ['Node.js', 'Express.js', 'Nest.js', 'PostgreSQL', 'Redis'],
    },
    mobile: {
      title: 'Mobile Development',
      percentage: 80,
      technologies: ['React Native', 'Expo'],
    },
  },

  // Education & Certifications
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      year: '2018',
      gpa: '3.8/4.0',
    },
    {
      degree: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      year: '2023',
      certificateId: 'AWS-CSA-2023-001',
    },
    {
      degree: 'Google Cloud Professional Developer',
      institution: 'Google Cloud',
      year: '2022',
      certificateId: 'GCP-PD-2022-001',
    },
  ],

  // Work Philosophy
  philosophy: {
    approach: 'User-centric design with clean, maintainable code',
    values: ['Quality', 'Innovation', 'Collaboration', 'Continuous Learning'],
    workStyle: 'Agile development with regular communication and feedback',
    codeStandards: 'Clean code, comprehensive testing, detailed documentation',
  },

  // Interests & Hobbies
  interests: [
    'Mentoring Junior Developers',
    'Coffee Brewing',
    'Reading Books',
    'Traveling',
    'Badminton',
    'Cricket',
  ],

  // Featured Testimonials
  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO at TechStart',
      company: 'TechStart Inc.',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      quote:
        'John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.',
      rating: 5,
      project: 'E-Commerce Platform',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'Digital Solutions Co.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      quote:
        'Working with John was a pleasure. He transformed our complex requirements into a beautiful, user-friendly application. Highly recommended!',
      rating: 5,
      project: 'Task Management App',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'StartupXYZ',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      quote:
        "John's expertise in full-stack development helped us launch our MVP in record time. His code quality and communication skills are outstanding.",
      rating: 5,
      project: 'Learning Management System',
    },
  ],
};

export const typewriterSequence = [
  'Full Stack Developer',
  2000,
  'React Specialist',
  2000,
  'Problem Solver',
  2000,
];

export const heroButtons = [
  // {
  //   text: 'View My Work',
  //   variant: 'primary',
  //   action: 'scroll',
  //   target: '#projects',
  // },
  {
    text: 'About Me',
    variant: 'primary',
    action: 'scroll',
    target: '#about',
  },
  {
    text: 'Get In Touch',
    variant: 'secondary',
    action: 'scroll',
    target: '#contact',
  },
];

// Navigation items moved to src/utils/navigation.js

export const education = [
  {
    id: 1,
    institution: 'College of Engineering Trivandrum',
    degree: 'Bachelor of Science in Computer Science',
    duration: 'Aug 2017 - Jul 2021',
    location: 'Trivandrum, Kerala',
    gpa: '6.80 / 10.00',
    description:
      'Focused on computer science fundamentals, software engineering, and programming. Gained strong foundation in algorithms, data structures, and software development practices.',
  },
];
