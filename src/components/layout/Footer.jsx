import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';
import { scrollToTop } from '../../utils/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-white/10 relative overflow-hidden">
      <div className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-white/10"
        >
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Get notified about new projects and insights on web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-300">
            <span>© {currentYear} Alan Jomy Joseph. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <HeartIcon className="w-5 h-5 text-red-500" />
            </motion.div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <button onClick={scrollToTop} className="hover:text-primary-400 transition-colors duration-200">
              Back to Top ↑
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
