/**
 * Centralized icon mapping for the entire application
 * Maps icon names to actual React icon components
 */

// Heroicons imports
import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  PaintBrushIcon,
  ShoppingCartIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

// React Icons imports
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiExpo,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
  SiFigma,
  SiAdobexd,
  SiFramer,
  SiGreensock,
  SiMongodb,
  SiGoogle,
  SiMeta,
} from 'react-icons/si';

/**
 * Technology-specific icon mapping
 * Maps technology names to their official brand icons
 */
export const technologyIcons = {
  // Frontend Technologies
  React: SiReact,
  TypeScript: SiTypescript,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'React Query': SiReactquery,
  Redux: SiRedux,

  // Backend Technologies
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Nest.js': SiNestjs,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,

  // Mobile Technologies
  'React Native': SiReact, // Using same React icon for React Native
  Expo: SiExpo,

  // Cloud Technologies
  AWS: SiAmazon,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  'GitHub Actions': SiGithubactions,
  Terraform: SiTerraform,

  // Design Tools
  Figma: SiFigma,
  'Adobe XD': SiAdobexd,
  'Framer Motion': SiFramer,
  GSAP: SiGreensock,

  // Databases
  MongoDB: SiMongodb,
};

/**
 * Category icon mapping
 * Maps technology categories to appropriate Heroicons
 */
export const categoryIcons = {
  CodeBracketIcon: CodeBracketIcon,
  ServerIcon: ServerIcon,
  DevicePhoneMobileIcon: DevicePhoneMobileIcon,
  CloudIcon: CloudIcon,
  PaintBrushIcon: PaintBrushIcon,
  ShoppingCartIcon: ShoppingCartIcon,
};

/**
 * Certification logo mapping
 * Maps certification providers to their brand icons
 */
export const certificationIcons = {
  AWS: SiAmazon,
  'Google Cloud': SiGoogle,
  MongoDB: SiMongodb,
  Meta: SiMeta,
};

/**
 * Get technology icon by name
 * @param {string} name - Technology name
 * @returns {React.Component} Icon component
 */
export const getTechnologyIcon = name => {
  return technologyIcons[name] || CodeBracketIcon;
};

/**
 * Get category icon by string name
 * @param {string} iconName - Icon name string
 * @returns {React.Component} Icon component
 */
export const getCategoryIcon = iconName => {
  return categoryIcons[iconName] || CodeBracketIcon;
};

/**
 * Get certification icon by issuer
 * @param {string} issuer - Certification issuer name
 * @returns {React.Component} Icon component
 */
export const getCertificationIcon = issuer => {
  if (issuer.includes('AWS') || issuer.includes('Amazon')) return SiAmazon;
  if (issuer.includes('Google')) return SiGoogle;
  if (issuer.includes('MongoDB')) return SiMongodb;
  if (issuer.includes('Meta') || issuer.includes('Facebook')) return SiMeta;
  return ShieldCheckIcon;
};
