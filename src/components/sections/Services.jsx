import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CloudIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  ServerIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { services } from '../../data/services';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Map icon strings to actual icon components
  const iconMap = {
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    PaintBrushIcon,
    CloudIcon,
    CogIcon,
    ChatBubbleLeftRightIcon,
    ServerIcon,
    ShoppingCartIcon,
  };

  const servicesWithIcons = services.map(service => ({
    ...service,
    iconComponent:
      typeof service.icon === 'function' ? service.icon : iconMap[service.icon] || CodeBracketIcon,
    popular: service.id === 1 || service.id === 6, // Mark Full-Stack and DevOps as popular
    price: `Starting at $${service.price.starting.toLocaleString()}`,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900"
    >
      <div className="section-container section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Services & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, I provide comprehensive development services to bring your
            digital vision to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesWithIcons.map(service => {
            const IconComponent = service.iconComponent;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className={`relative glass-effect rounded-2xl p-8 card-hover ${
                  service.popular
                    ? 'border-2 border-primary-500/50 shadow-lg shadow-primary-500/20'
                    : 'border border-white/10'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-6 text-primary-400"
                >
                  <IconComponent className="w-full h-full" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold gradient-text">{service.price}</span>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  Get Started
                </motion.button>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            My Development Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your goals and requirements',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating wireframes and visual designs',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building with clean, efficient code',
              },
              { step: '04', title: 'Deployment', description: 'Testing, optimization, and launch' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{phase.title}</h4>
                <p className="text-gray-300">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0ea5e9 0%, transparent 70%),
                           radial-gradient(circle at 75% 75%, #d946ef 0%, transparent 70%)`,
            backgroundSize: '400px 400px',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
};

export default Services;
