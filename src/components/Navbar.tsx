import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  {
    name: 'Services', href: '#services',
    submenu: ['AI Solutions', 'Software Dev', 'Cloud Services', 'Cybersecurity', 'Data Analytics']
  },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'navbar-glass py-2 shadow-2xl' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo('#home')}
          >
            <div className="relative">
              <img src="/images/logo.png" alt="ZFH Logo" className="h-12 w-12 object-contain logo-glow" />
            </div>
            <div>
              <div className="font-orbitron font-bold text-lg leading-none">
                <span className="text-gold-gradient">ZENITH</span>
                <span className="text-white mx-1">|</span>
                <span className="text-blue-gradient">FORGE HUB</span>
              </div>
              <div className="font-rajdhani text-xs tracking-[0.3em] text-gray-400 mt-0.5">ZFH TECHNOLOGIES</div>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button
                  onClick={() => link.submenu ? setServicesOpen(!servicesOpen) : scrollTo(link.href)}
                  className={`flex items-center gap-1 px-4 py-2 font-rajdhani font-semibold text-sm tracking-wider transition-all duration-300 rounded-md ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-blue-400"
                    />
                  )}
                </button>
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="navbar-glass rounded-xl border border-yellow-400/20 overflow-hidden py-2">
                      {link.submenu.map((item) => (
                        <button
                          key={item}
                          onClick={() => scrollTo('#services')}
                          className="w-full text-left px-4 py-2 font-rajdhani text-sm text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('#contact')}
              className="ml-4 btn-primary px-6 py-2.5 rounded-full font-orbitron text-xs font-bold tracking-widest"
            >
              GET STARTED
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-yellow-400 p-2 rounded-md border border-yellow-400/30"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mobile-menu border-t border-yellow-400/20 mt-2"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 font-rajdhani font-semibold text-base rounded-lg transition-all ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => scrollTo('#contact')}
                className="w-full btn-primary px-6 py-3 rounded-xl font-orbitron text-xs font-bold tracking-widest mt-4"
              >
                GET STARTED
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
