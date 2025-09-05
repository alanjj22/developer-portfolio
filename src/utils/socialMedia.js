import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { personalInfo } from '../data/personalInfo';

/**
 * Centralized social media configuration
 * All social links should be managed from here to avoid duplication
 */

export const socialMediaConfig = [
  {
    name: 'GitHub',
    url: personalInfo.social.github.url,
    icon: FaGithub,
    ariaLabel: `Visit GitHub profile with ${personalInfo.social.github.followers} followers`,
    color: 'hover:text-gray-100',
    category: 'development',
  },
  {
    name: 'LinkedIn',
    url: personalInfo.social.linkedin.url,
    icon: FaLinkedin,
    ariaLabel: `Connect on LinkedIn with ${personalInfo.social.linkedin.connections} connections`,
    color: 'hover:text-blue-400',
    category: 'professional',
  },
  {
    name: 'Instagram',
    url: personalInfo.social.instagram.url,
    icon: FaInstagram,
    ariaLabel: `Follow on Instagram ${personalInfo.social.instagram.username} with ${personalInfo.social.instagram.followers} followers`,
    color: 'hover:text-pink-400',
    category: 'personal',
  },
  {
    name: 'Email',
    url: `mailto:${personalInfo.contact.email}`,
    icon: EnvelopeIcon,
    ariaLabel: `Send email to ${personalInfo.contact.email}`,
    color: 'hover:text-primary-400',
    category: 'contact',
  },
];

/**
 * Get social links filtered by category
 * @param {string[]} categories - Array of categories to include
 * @returns {Array} Filtered social links
 */
export const getSocialLinks = (
  categories = ['development', 'professional', 'personal', 'contact']
) => {
  return socialMediaConfig.filter(social => categories.includes(social.category));
};

/**
 * Get social links excluding email
 * @returns {Array} Social links without email
 */
export const getSocialLinksOnly = () => {
  return socialMediaConfig.filter(social => social.category !== 'contact');
};

/**
 * Get contact links only
 * @returns {Array} Contact links only
 */
export const getContactLinks = () => {
  return socialMediaConfig.filter(social => social.category === 'contact');
};
