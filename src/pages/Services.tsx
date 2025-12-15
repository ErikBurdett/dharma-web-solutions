import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Layers, Plug, Cloud, ShoppingCart, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/companyData';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  Plug: <Plug className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  RefreshCw: <RefreshCw className="w-8 h-8" />,
};

const Services = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dharma-500/10 border border-dharma-500/30 mb-6"
          >
            <Code2 className="w-4 h-4 text-dharma-400" />
            <span className="text-dharma-400 text-sm font-mono">What We Offer</span>
          </motion.div>
          <h1 className="section-heading mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive web development solutions tailored to your unique business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="card card-hover group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-dharma-500/20 to-dharma-400/10 border border-dharma-500/30 flex items-center justify-center text-dharma-400 flex-shrink-0 group-hover:from-dharma-500/30 group-hover:to-dharma-400/20 transition-all duration-300">
                  {iconMap[service.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-dharma-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your goals, requirements, and vision" },
              { step: "02", title: "Planning", description: "Architecture design, technology selection, and roadmap" },
              { step: "03", title: "Development", description: "Agile development with regular updates and feedback" },
              { step: "04", title: "Launch", description: "Deployment, testing, and ongoing support" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold text-dharma-500/30 mb-4">{phase.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-12 text-center"
        >
          <h2 className="text-2xl font-display font-semibold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <Link to="/contact" className="btn btn-primary group">
            Request a Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;


