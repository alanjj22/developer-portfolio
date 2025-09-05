import { motion } from 'framer-motion';

const SkipLink = () => {
  const handleSkipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleSkipToMain}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary-500 text-white px-4 py-2 rounded-lg font-medium"
      whileFocus={{ scale: 1.05 }}
      tabIndex={0}
    >
      Skip to main content
    </motion.button>
  );
};

export default SkipLink;
