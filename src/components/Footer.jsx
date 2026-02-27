import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Work', path: '/work' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    social: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
      { name: 'Figma', url: 'https://figma.com/@piyush0' },
      { name: 'GitHub', url: 'https://github.com/yourprofile' },
    ],
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="relative border-t border-zinc/50 mt-32" role='contentinfo' >
      <div className="container-custom px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="group inline-block mb-6" aria-label='Go to homepage'>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 border-2 border-emerald-400"
                  />
                  <motion.div
                    whileHover={{ rotate: -180 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-2 bg-emerald-400"
                  />
                </div>
                
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold tracking-tight">
                    PIYUSH
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 -mt-1 tracking-[0.2em]">
                    UI/UX DESIGNER
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="font-mono text-sm text-ash leading-relaxed">
              Crafting intuitive digital experiences through research, 
              design, and iteration.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label='Footer navigation'>
            <h3 className="font-mono text-emerald-400 font-semibold mb-4 text-sm tracking-wider">
              NAVIGATION
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-mono text-sm text-ash hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h3 className="font-mono text-emerald-400 font-semibold mb-4 text-sm tracking-wider">
              CONNECT
            </h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${link.name} profile`}
                    className="font-mono text-sm text-ash hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.name}
                    <svg className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-emerald-400 font-semibold mb-4 text-sm tracking-wider">
              GET IN TOUCH
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:piyush0codes@gmail.com"
                className="font-mono text-sm text-ash hover:text-emerald-400 transition-colors block"
              >
                piyush0codes@gmail.com
              </a>
              <a
                href="tel:+917764822206"
                className="font-mono text-sm text-ash hover:text-emerald-400 transition-colors block"
              >
                +91 7764822206
              </a>
              <p className="font-mono text-sm text-ash">
                Muzaffarpur, Bihar, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-ash">
            © {currentYear} Piyush Kumar. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-xs text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 group"
            >
              BACK TO TOP
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-ash">
            Designed & Developed with{' '}
            <span className="text-red-400">♥</span>{' '}
            using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
