import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Plug, Cloud, ShoppingCart, CheckCircle } from 'lucide-react';
import { companyInfo, services, projects, technologies } from '../data/companyData';

// Network node positions for the animated background
const networkNodes = [
  { x: 10, y: 20 }, { x: 25, y: 15 }, { x: 40, y: 30 }, { x: 55, y: 10 },
  { x: 70, y: 25 }, { x: 85, y: 18 }, { x: 15, y: 45 }, { x: 30, y: 55 },
  { x: 50, y: 50 }, { x: 65, y: 40 }, { x: 80, y: 55 }, { x: 20, y: 75 },
  { x: 35, y: 85 }, { x: 55, y: 70 }, { x: 75, y: 80 }, { x: 90, y: 70 },
];

const networkLines = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [1, 6], [2, 8],
  [6, 7], [7, 8], [8, 9], [9, 10], [4, 9], [5, 10], [6, 11], [7, 11],
  [7, 12], [8, 13], [9, 14], [10, 15], [11, 12], [12, 13], [13, 14], [14, 15],
];

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient - matching portfolio style */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-300 via-surface-200 to-dharma-900/20" />
        
        {/* Animated network lines background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                <stop offset="50%" stopColor="rgba(100, 181, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
              </linearGradient>
            </defs>
            {/* Network lines */}
            {networkLines.map(([from, to], index) => (
              <motion.line
                key={`line-${index}`}
                x1={`${networkNodes[from].x}%`}
                y1={`${networkNodes[from].y}%`}
                x2={`${networkNodes[to].x}%`}
                y2={`${networkNodes[to].y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1],
                  opacity: [0, 0.6, 0.2],
                }}
                transition={{ 
                  duration: 3 + (index % 3),
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
            {/* Glowing pulse along lines */}
            {networkLines.slice(0, 8).map(([from, to], index) => (
              <motion.circle
                key={`pulse-${index}`}
                r="3"
                fill="rgba(100, 181, 246, 0.8)"
                filter="blur(2px)"
                initial={{ 
                  cx: `${networkNodes[from].x}%`,
                  cy: `${networkNodes[from].y}%`,
                  opacity: 0
                }}
                animate={{ 
                  cx: [`${networkNodes[from].x}%`, `${networkNodes[to].x}%`],
                  cy: [`${networkNodes[from].y}%`, `${networkNodes[to].y}%`],
                  opacity: [0, 1, 0],
                }}
                transition={{ 
                  duration: 2 + (index % 2),
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
          
          {/* Network nodes */}
          {networkNodes.map((node, index) => (
            <motion.div
              key={`node-${index}`}
              className="absolute w-2 h-2 rounded-full bg-white/30"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                boxShadow: [
                  '0 0 5px rgba(255, 255, 255, 0.3)',
                  '0 0 15px rgba(100, 181, 246, 0.6)',
                  '0 0 5px rgba(255, 255, 255, 0.3)'
                ]
              }}
              transition={{ 
                duration: 2 + (index % 3),
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </div>
        
        {/* Ambient glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-dharma-500/8 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-dharma-400/8 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dharma-500/10 border border-dharma-500/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-dharma-400 animate-pulse" />
              <span className="text-dharma-400 text-sm font-mono">Web Development Consultancy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Building{' '}
              <span className="gradient-text">Digital Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {companyInfo.description} From custom React applications to WordPress solutions, 
              we bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact" className="btn btn-primary group">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="btn btn-outline">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-dharma-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-surface-400/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              End-to-end web development services tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const icons: Record<string, React.ReactNode> = {
                Code2: <Code2 className="w-6 h-6" />,
                Layers: <Layers className="w-6 h-6" />,
                Plug: <Plug className="w-6 h-6" />,
                ShoppingCart: <ShoppingCart className="w-6 h-6" />,
                Cloud: <Cloud className="w-6 h-6" />,
                RefreshCw: <ArrowRight className="w-6 h-6" />,
              };

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card card-hover group"
                >
                  <div className="w-14 h-14 rounded-xl bg-dharma-500/10 border border-dharma-500/30 flex items-center justify-center mb-6 text-dharma-400 group-hover:bg-dharma-500/20 transition-colors">
                    {icons[service.icon]}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn btn-outline group">
              All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A selection of our recent work across various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-hover group overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-dharma-500 to-dharma-400 -mx-6 -mt-6 mb-6" />
                <span className="text-xs font-mono text-dharma-400 bg-dharma-500/10 px-2 py-1 rounded mb-4 inline-block">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-dharma-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{project.client}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="btn btn-outline group">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-surface-400/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-4">Our Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Modern technologies for building robust, scalable solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {[...technologies.frontend, ...technologies.backend, ...technologies.cloud].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-4 py-2 rounded-lg bg-surface-100 border border-surface-50 text-gray-300 text-sm font-mono hover:border-dharma-500/50 hover:text-dharma-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading mb-6">Why Choose Dharma?</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We're not just developers—we're partners in your success. With years of experience 
                across startups, enterprises, and non-profits, we understand that every project is unique.
              </p>
              <ul className="space-y-4">
                {[
                  "End-to-end development from concept to deployment",
                  "Modern tech stack with best practices",
                  "Transparent communication throughout",
                  "Ongoing support and maintenance",
                  "Mission-driven approach to every project"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-dharma-400 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-display font-semibold text-white mb-6">Ready to Start?</h3>
              <p className="text-gray-400 mb-8">
                Let's discuss your project and see how we can help bring your vision to life.
              </p>
              <Link to="/contact" className="btn btn-primary w-full group">
                Get a Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

