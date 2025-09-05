import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CodeBracketIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  CalendarIcon,
  MapPinIcon,
  MapIcon,
} from '@heroicons/react/24/outline';
import UniversityIcon from '../ui/UniversityIcon';
import { personalInfo, education } from '../../data/personalInfo';
import { technologies } from '../../data/technologies';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const features = [
    {
      icon: CodeBracketIcon,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with best practices.',
    },
    {
      icon: CpuChipIcon,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and seamless user interactions.',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Innovation',
      description:
        'Staying updated with latest technologies and implementing cutting-edge solutions.',
    },
  ];

  return (
    <section id="about" className="py-10 lg:py-16 relative overflow-hidden">
      <div className="section-container section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions that make a
            difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
                        <motion.div 
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.2 }}
              className="glass-effect p-4 rounded-lg border border-gray-700/30 hover:border-primary-500/30 transition-all duration-200"
            >
              {/* My Journey Title */}
              <h3 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                <MapIcon className="w-5 h-5 text-primary-400" />
                <span>My Journey</span>
              </h3>

              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed text-sm">
                  I began my journey as a front-end developer and gradually expanded into full-stack
                  development, working across React, Node.js, and modern web technologies. Over the
                  years, I've grown from building UI components to architecting scalable
                  applications, combining my experience in front-end, back-end, and testing to
                  deliver impactful solutions.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  When I'm not coding, you'll find me playing cricket, badminton or watching
                  liverpool fc play.
                </p>
              </div>
            </motion.div>

            {/* Education */}
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.01, y: -2, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="glass-effect p-4 rounded-lg border border-gray-700/30 hover:border-primary-500/30 transition-all duration-200">
                  {/* Education Title */}
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                    <AcademicCapIcon className="w-5 h-5 text-primary-400" />
                    <span>Education</span>
                  </h4>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UniversityIcon className="w-5 h-5 text-primary-400" />
                    </div>

                    <div className="flex-1 space-y-2">
                      {/* Institution Header */}
                      <div>
                        <h5 className="text-base font-bold text-white">{edu.institution}</h5>
                        <p className="text-sm text-primary-400 font-medium">{edu.degree}</p>
                      </div>

                      {/* Info Pills */}
                      <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="w-3 h-3" />
                          <span>{edu.duration}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <MapPinIcon className="w-3 h-3" />
                          <span>{edu.location}</span>
                        </div>
                        <span>•</span>
                        <span className="text-primary-400 font-medium">GPA: {edu.gpa}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed text-xs">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                  className="glass-effect p-6 rounded-xl text-center card-hover"
                >
                  <div className="w-12 h-12 mx-auto mb-4 text-primary-400">
                    <IconComponent className="w-full h-full" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            Technologies I Work With
          </h3>
          {/* Technology Categories */}
          <div className="space-y-12">
            {Object.entries(technologies).map(([categoryKey, category], categoryIndex) => (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 }}
                className="text-center"
              >
                <h4 className="text-lg font-semibold text-primary-400 mb-6">{category.category}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 1 + categoryIndex * 0.1 + techIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
                      className="glass-effect p-4 rounded-lg text-center card-hover group relative"
                    >
                      <div className="text-2xl mb-2 text-primary-400">
                        {typeof tech.icon === 'string' ? (
                          <span>{tech.icon}</span>
                        ) : (
                          <tech.icon className="w-8 h-8 mx-auto" />
                        )}
                      </div>
                      <span className="text-white font-medium text-sm block">{tech.name}</span>
                      <span className="text-xs text-gray-400 block mt-1">{tech.level}</span>

                      {/* Tooltip on hover - smart positioning */}
                      <div 
                        className={`absolute bottom-full mb-2 px-3 py-2 bg-dark-900/95 backdrop-blur-sm border border-gray-700/50 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500 pointer-events-none shadow-xl w-60 ${
                          techIndex === 0 ? 'left-0 z-[60]' : 
                          techIndex === category.technologies.length - 1 ? 'right-0 z-[60]' : 
                          'left-1/2 transform -translate-x-1/2 z-50'
                        }`}
                        style={{ 
                          transitionDelay: `${300 + techIndex * 100}ms`
                        }}
                      >
                        <div className="font-semibold text-primary-400 mb-1">{tech.name}</div>
                        <div className="text-gray-300 mb-1">{tech.experience} experience • {tech.level}</div>
                        <div className="text-gray-400 text-xs leading-relaxed">
                          {tech.description}
                        </div>
                        {/* Tooltip arrow - positioned based on tooltip position */}
                        <div className={`absolute top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-700/50 ${
                          techIndex === 0 ? 'left-6' :
                          techIndex === category.technologies.length - 1 ? 'right-6' :
                          'left-1/2 transform -translate-x-1/2'
                        }`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Years Experience', value: personalInfo.experience.yearsOfExperience + '+' },
              {
                label: 'Projects Completed',
                value: personalInfo.experience.projectsCompleted + '+',
              },
              { label: 'Happy Clients', value: personalInfo.experience.clientsSatisfied + '+' },
              { label: 'Technologies', value: personalInfo.experience.technologiesMastered + '+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="text-center glass-effect p-6 rounded-xl"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl" />
    </section>
  );
};

export default About;
