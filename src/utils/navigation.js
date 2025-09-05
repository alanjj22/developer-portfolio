/**
 * Shared navigation utilities
 */

/**
 * Smooth scroll to a section by selector
 * @param {string} href - CSS selector (e.g., '#about', '#contact')
 */
export const scrollToSection = href => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Navigation items configuration
 */
export const navigationItems = [
  { id: 'home', name: 'Home', href: '#home' },
  { id: 'about', name: 'About', href: '#about' },
  // { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'contact', name: 'Contact', href: '#contact' },
];
