export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A comprehensive full-stack e-commerce solution built with React and Node.js. Features include user authentication, shopping cart functionality, secure payment processing with Stripe, inventory management, and a responsive admin dashboard. Implemented advanced search and filtering capabilities with real-time inventory updates.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Express.js', 'JWT'],
    liveUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/johndeveloper/ecommerce-platform',
    featured: true,
    category: 'Full Stack',
    year: '2024',
    duration: '3 months',
    features: [
      'User authentication & authorization',
      'Shopping cart & wishlist',
      'Secure payment processing',
      'Admin dashboard with analytics',
      'Real-time inventory management',
      'Order tracking system',
      'Product reviews & ratings',
      'Mobile-responsive design',
    ],
    challenges:
      'Implementing real-time inventory updates and optimizing database queries for large product catalogs.',
    technologies: {
      frontend: ['React', 'Tailwind CSS', 'Framer Motion', 'React Query'],
      backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
      payment: ['Stripe API'],
      deployment: ['Vercel', 'MongoDB Atlas'],
    },
  },
  {
    id: 2,
    title: 'Developer Portfolio Website',
    description:
      'A cutting-edge portfolio website showcasing modern web development practices. Features 3D animations, smooth micro-interactions, optimized performance, and accessibility best practices. Built with React, Three.js, and advanced animation libraries.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center',
    tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Vite', 'GSAP'],
    liveUrl: 'https://johndeveloper.dev',
    githubUrl: 'https://github.com/johndeveloper/portfolio',
    featured: false,
    category: 'Frontend',
    year: '2024',
    duration: '1 month',
    features: [
      '3D interactive animations',
      'Smooth scroll animations',
      'Dark/light mode toggle',
      'Performance optimized',
      'Accessibility compliant',
      'SEO optimized',
      'Progressive Web App',
      'Mobile-first design',
    ],
    challenges:
      'Balancing complex 3D animations with performance optimization and ensuring accessibility across all interactive elements.',
    technologies: {
      frontend: ['React 18', 'Vite', 'Three.js', 'React Three Fiber'],
      styling: ['Tailwind CSS', 'Custom CSS', 'CSS Grid', 'Flexbox'],
      animation: ['Framer Motion', 'GSAP', 'React Spring'],
      optimization: ['Lighthouse', 'Web Vitals', 'Code Splitting'],
      deployment: ['Vercel', 'GitHub Actions'],
    },
  },
];

export const featuredProjects = projects.filter(project => project.featured);

export const projectCategories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'DevOps'];

export const projectStats = {
  totalProjects: projects.length,
  featuredProjects: featuredProjects.length,
  categories: projectCategories.length - 1, // Exclude 'All'
  technologies: [...new Set(projects.flatMap(p => p.tags))].length,
};
