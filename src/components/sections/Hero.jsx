import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Scene3D from '../3d/Scene3D';
import SocialLinks from '../ui/SocialLinks';
import { personalInfo, typewriterSequence, heroButtons } from '../../data/personalInfo';
import { getSocialLinks } from '../../utils/socialMedia';
import { scrollToSection } from '../../utils/navigation';

const Hero = () => {
  const scrollToAbout = () => scrollToSection('#about');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-900/50 to-dark-900/90" />

      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="relative z-10 section-container section-padding text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-400 font-medium mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight"
            style={{ lineHeight: '1.1' }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold text-white mb-8 h-16"
          >
            <TypeAnimation
              sequence={typewriterSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {heroButtons.map((button, index) => (
              <motion.button
                key={button.text}
                whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.querySelector(button.target)?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`btn-${button.variant}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {button.text}
              </motion.button>
            ))}
          </motion.div>

          {/* Social Links */}
          <SocialLinks
            socialLinks={getSocialLinks()}
            variant="hero"
            spacing="space-x-6"
            containerClassName="justify-center mb-16"
            delay={1.4}
            animation="fade-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ChevronDownIcon className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 -z-20 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
