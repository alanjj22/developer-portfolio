// Portfolio Configuration Example
// Copy this file to config.js and update with your information

export const portfolioConfig = {
  // Personal Information
  developer: {
    name: 'John Developer',
    title: 'Full Stack Developer',
    email: 'john@developer.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    tagline: 'Creating exceptional digital experiences with modern technologies',
  },

  // Social Links
  social: {
    github: 'https://github.com/johndeveloper',
    linkedin: 'https://linkedin.com/in/johndeveloper',
    twitter: 'https://twitter.com/johndeveloper',
    instagram: 'https://instagram.com/johndeveloper',
  },

  // Features
  features: {
    enable3D: true,
    enableParticles: true,
    enableSoundEffects: false,
    enableAnalytics: false,
  },

  // SEO
  seo: {
    title: 'John Developer - Portfolio',
    description: 'Full Stack Developer creating exceptional digital experiences',
    keywords: 'developer, portfolio, react, javascript, web development, full stack',
    author: 'John Developer',
  },

  // Form Configuration (if using external service)
  form: {
    endpoint: 'https://your-form-service.com/submit',
    emailjs: {
      serviceId: 'your_service_id',
      templateId: 'your_template_id',
      publicKey: 'your_public_key',
    },
  },

  // Analytics
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX',
  },
};
