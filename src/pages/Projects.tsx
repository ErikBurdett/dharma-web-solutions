import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/companyData';

const categoryColors: Record<string, string> = {
  'E-Commerce': 'from-dharma-500 to-dharma-400',
  'Non-Profit': 'from-emerald-500 to-emerald-400',
  'Enterprise': 'from-violet-500 to-violet-400',
  'Real Estate': 'from-amber-500 to-amber-400',
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dharma-500/10 border border-dharma-500/30 mb-6"
          >
            <Folder className="w-4 h-4 text-dharma-400" />
            <span className="text-dharma-400 text-sm font-mono">Our Work</span>
          </motion.div>
          <h1 className="section-heading mb-4">Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of our work across e-commerce, enterprise, and non-profit sectors.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const gradientClass = categoryColors[project.category] || 'from-dharma-500 to-dharma-400';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card card-hover group overflow-hidden"
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${gradientClass} -mx-6 -mt-6 mb-6`} />
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${gradientClass} text-white font-medium mb-3`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-dharma-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dharma-400 font-mono text-sm mt-1">{project.client}</p>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-500 hover:text-dharma-400 hover:bg-dharma-500/10 transition-all duration-300"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-50">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag text-xs">{tech}</span>
                  ))}
                </div>

                {project.github && (
                  <div className="mt-4 pt-4 border-t border-surface-50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-dharma-400 hover:text-dharma-300 transition-colors group/link"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 card p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "127+", label: "Websites Managed" },
              { value: "7+", label: "Years Experience" },
              { value: "$65K+", label: "Raised for Non-Profits" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;

