import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
  CalendarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { projects } from '../../data/projects';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="py-10 lg:py-16 relative overflow-hidden">
      <div className="section-container section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and innovative
            digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl overflow-hidden glass-effect card-hover ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-dark-900/80">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-200"
                      aria-label="View live project"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-secondary-500 text-white rounded-full hover:bg-secondary-600 transition-colors duration-200"
                      aria-label="View source code"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <CalendarIcon className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-3 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-3 h-3" />
                    <span>{project.duration}</span>
                  </div>
                  <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-dark-700 text-primary-300 rounded-full border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs px-3 py-1 bg-dark-700 text-gray-400 rounded-full border border-gray-500/20">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 font-medium"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    <span>Source</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/50 transition-colors duration-200 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Projects;
