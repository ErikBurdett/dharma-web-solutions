import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Code2, Heart, Globe, ArrowRight, Github, Linkedin } from 'lucide-react';
import { companyInfo, technologies } from '../data/companyData';

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <User className="w-4 h-4 text-dharma-400" />
            <span className="text-dharma-400 text-sm font-mono">About Us</span>
          </motion.div>
          <h1 className="section-heading mb-4">Meet Dharma Web Solutions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A full-service web development consultancy dedicated to building digital excellence.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-display font-semibold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Founded by Erik Burdett, Dharma Web Solutions was born from a passion for building 
                technology that makes a real difference. With over 7 years of experience in full stack 
                development, we've worked with startups, enterprises, and non-profits across diverse industries.
              </p>
              <p>
                "Dharma" represents our philosophy—the right way of doing things. We believe that great 
                software isn't just about code; it's about understanding your unique challenges and 
                crafting solutions that truly serve your mission.
              </p>
              <p>
                From managing 127+ client websites to building donation platforms that raised over $65,000 
                for schools in Uganda, we approach every project with the same dedication and care.
              </p>
            </div>

            <div className="flex gap-3 mt-8">
              <a 
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-dharma-400 hover:bg-dharma-500/10 border border-surface-50 hover:border-dharma-500/30 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-dharma-400 hover:bg-dharma-500/10 border border-surface-50 hover:border-dharma-500/30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {[
              {
                icon: Code2,
                title: "Technical Excellence",
                description: "Modern tech stack with React, Node.js, Python, and cloud-native solutions."
              },
              {
                icon: Heart,
                title: "Mission-Driven",
                description: "We believe technology can change lives. Special focus on non-profit and social impact projects."
              },
              {
                icon: Globe,
                title: "End-to-End Solutions",
                description: "From concept to deployment and beyond—we're partners in your success, not just contractors."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="card p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-dharma-500/10 border border-dharma-500/30 flex items-center justify-center text-dharma-400 flex-shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">Technologies We Use</h2>
            <p className="text-gray-400">
              A modern stack for building robust, scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Frontend", techs: technologies.frontend },
              { title: "Backend", techs: technologies.backend },
              { title: "Cloud & DevOps", techs: technologies.cloud },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-12 text-center bg-gradient-to-br from-dharma-500/10 to-dharma-400/5"
        >
          <h2 className="text-2xl font-display font-semibold text-white mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether you're a startup, enterprise, or non-profit, we'd love to hear about your project.
          </p>
          <Link to="/contact" className="btn btn-primary group">
            Start a Conversation
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

