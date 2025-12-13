import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../data/companyData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-400 border-t border-surface-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-dharma-500 to-dharma-400 flex items-center justify-center shadow-lg shadow-dharma-500/25">
                <span className="font-display font-bold text-white text-lg">D</span>
              </div>
              <div>
                <p className="font-display font-semibold text-white tracking-wide">{companyInfo.name}</p>
                <p className="text-sm text-dharma-400 font-mono">Web Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex gap-3">
              <a 
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-dharma-400 hover:bg-dharma-500/10 border border-surface-50 hover:border-dharma-500/30 transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-dharma-400 hover:bg-dharma-500/10 border border-surface-50 hover:border-dharma-500/30 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${companyInfo.email}`}
                className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-dharma-400 hover:bg-dharma-500/10 border border-surface-50 hover:border-dharma-500/30 transition-all duration-300"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 tracking-wide">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-dharma-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-dharma-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-400 hover:text-dharma-400 transition-colors flex items-center gap-3 group"
                >
                  <Mail className="w-4 h-4 text-gray-500 group-hover:text-dharma-500 transition-colors" />
                  <span className="text-sm">{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${companyInfo.phone.replace(/-/g, '')}`}
                  className="text-gray-400 hover:text-dharma-400 transition-colors flex items-center gap-3 group"
                >
                  <Phone className="w-4 h-4 text-gray-500 group-hover:text-dharma-500 transition-colors" />
                  <span className="text-sm">{companyInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{companyInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-50/50 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

