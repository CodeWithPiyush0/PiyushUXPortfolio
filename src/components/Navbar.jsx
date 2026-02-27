import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobilemenuRef = useRef();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if(!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(
        mobilemenuRef.current &&
        !mobilemenuRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if(isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="group" aria-label='Go to homepage'>
            <div className="flex items-center gap-3">
              {/* Geometric logo mark */}
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
                <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
                  PIYUSH
                </span>
                <span className="font-mono text-[10px] md:text-xs text-emerald-400 -mt-1 tracking-[0.2em]">
                  UI/UX DESIGNER
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 group"
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                <span className="font-mono text-sm font-medium text-smoke group-hover:text-emerald-400 transition-colors duration-300">
                  {item.name}
                </span>
                
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                  />
                )}
                
                {/* Hover effect */}
                <span className="absolute inset-0 border border-transparent group-hover:border-emerald-400/20 transition-all duration-300" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <a
              href="/resume.pdf"
              download
              className="ml-4 px-5 py-2.5 bg-emerald-400 text-coal font-mono text-sm font-semibold hover:bg-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/50 relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span className="relative z-10">RESUME</span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent shimmer" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-emerald-400"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-emerald-400"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-emerald-400"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="container-custom px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 font-mono text-lg ${
                      isActive(item.path)
                        ? 'text-emerald-400 bg-emerald-400/10 border-l-2 border-emerald-400'
                        : 'text-smoke hover:text-emerald-400 hover:bg-white/5'
                    } transition-all duration-300`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                className="block px-4 py-3 mt-4 bg-emerald-400 text-coal font-mono text-lg font-semibold text-center"
              >
                  DOWNLOAD RESUME
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
