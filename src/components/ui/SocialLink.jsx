import { motion } from 'framer-motion';

/**
 * Reusable Social Link Component
 * Renders a social media link with consistent styling and animations
 */
const SocialLink = ({
  social,
  index = 0,
  variant = 'default',
  className = '',
  delay = 0,
  animation = 'fade-up',
  ...motionProps
}) => {
  const IconComponent = social.icon;

  // Variant-based styling
  const variants = {
    default: {
      container:
        'text-white/80 hover:text-primary-400 p-3 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 group',
      icon: 'w-6 h-6 group-hover:scale-110 transition-transform duration-200',
    },
    hero: {
      container:
        'text-white/80 hover:text-primary-400 p-3 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 group',
      icon: 'w-6 h-6 group-hover:scale-110 transition-transform duration-200',
    },
    contact: {
      container:
        'w-12 h-12 glass-effect rounded-lg flex items-center justify-center text-white/80 hover:text-primary-400 hover:bg-white/10 transition-all duration-300 group',
      icon: 'w-6 h-6 group-hover:scale-110 transition-transform duration-200',
    },
    footer: {
      container:
        'w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-lg hover:bg-white/10 transition-all duration-300',
      icon: 'w-5 h-5',
    },
  };

  // Animation presets
  const animations = {
    'fade-up': {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: delay + index * 0.1 },
    },
    'fade-in': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: delay + index * 0.1 },
    },
    'scale-in': {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay: delay + index * 0.1 },
    },
    'slide-right': {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: delay + index * 0.1 },
    },
  };

  const currentVariant = variants[variant] || variants.default;
  const currentAnimation = animations[animation] || animations['fade-up'];

  return (
    <motion.a
      href={social.url}
      target={social.name !== 'Email' ? '_blank' : '_self'}
      rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.1, y: variant === 'hero' ? -5 : -2 }}
      whileTap={{ scale: 0.95 }}
      className={`${currentVariant.container} ${className}`}
      aria-label={social.ariaLabel}
      {...currentAnimation}
      {...motionProps}
    >
      <IconComponent className={currentVariant.icon} />
      {variant === 'footer' && <span className="sr-only">{social.name}</span>}
    </motion.a>
  );
};

export default SocialLink;
