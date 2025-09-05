import { motion } from 'framer-motion';
import SocialLink from './SocialLink';

/**
 * Social Links Group Component
 * Renders a group of social media links with consistent spacing and animations
 */
const SocialLinks = ({
  socialLinks,
  variant = 'default',
  className = '',
  containerClassName = '',
  delay = 0,
  animation = 'fade-up',
  direction = 'horizontal',
  spacing = 'space-x-4',
  ...containerProps
}) => {
  const containerClasses = {
    horizontal: `flex ${spacing}`,
    vertical: 'flex flex-col space-y-4',
    grid: 'grid grid-cols-2 gap-4',
  };

  const currentContainerClass = containerClasses[direction] || containerClasses.horizontal;

  return (
    <motion.div className={`${currentContainerClass} ${containerClassName}`} {...containerProps}>
      {socialLinks.map((social, index) => (
        <SocialLink
          key={social.name}
          social={social}
          index={index}
          variant={variant}
          delay={delay}
          animation={animation}
          className={className}
        />
      ))}
    </motion.div>
  );
};

export default SocialLinks;
