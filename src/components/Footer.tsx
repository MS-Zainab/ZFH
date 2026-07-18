import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const footerLinks = {
  Services: ['AI & Machine Learning', 'Custom Software Dev', 'Cloud & DevOps', 'Cybersecurity', 'Data Analytics', 'Mobile Apps'],
  Company: ['About Us', 'Our Team', 'Careers', 'Press & Media', 'Partners', 'Blog'],
  Resources: ['Documentation', 'Case Studies', 'White Papers', 'API Reference', 'Community', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance', 'Security Policy'],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden" style={{ background: '#020810' }}>
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Newsletter Banner */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl gold-border p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-1">
                Stay at the <span className="text-gold-gradient">Zenith</span> of Innovation
              </h3>
              <p className="font-rajdhani text-gray-400">Get the latest AI & tech insights delivered to your inbox.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-rajdhani text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/60"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-6 py-3 rounded-xl font-orbitron text-xs font-bold tracking-widest whitespace-nowrap"
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="ZFH Logo" className="h-12 w-12 object-contain logo-glow" />
              <div>
                <div className="font-orbitron font-bold text-base leading-none">
                  <span className="text-gold-gradient">ZENITH</span>
                  <span className="text-white mx-1">|</span>
                  <span className="text-blue-gradient">FORGE HUB</span>
                </div>
                <div className="font-rajdhani text-xs tracking-[0.3em] text-gray-500 mt-0.5">ZFH TECHNOLOGIES</div>
              </div>
            </div>
            <p className="font-rajdhani text-gray-400 text-sm leading-relaxed mb-6">
              Forging tomorrow's technology today. Premier IT & AI software solutions for businesses worldwide.
            </p>
            <div className="space-y-2">
              {[
                { icon: <Mail size={14} />, text: 'zenithforgehub@gmail.com' },
                { icon: <Phone size={14} />, text: '0324 3214033' },
                { icon: <MapPin size={14} />, text: 'Pakistan' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400 font-rajdhani text-sm">
                  <span className="text-yellow-400">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h4 className="font-orbitron text-sm font-bold text-white mb-4 tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-rajdhani text-sm text-gray-400 hover:text-yellow-400 transition-colors leading-relaxed"
                      onClick={(e) => e.preventDefault()}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-rajdhani text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Zenith Forge Hub (ZFH). All rights reserved.
              <span className="ml-2 text-yellow-400/60">Forging the Future™</span>
            </div>

            {/* Tech badges */}
            <div className="flex items-center gap-3">
              {['ISO 27001', 'SOC 2', 'GDPR'].map((badge) => (
                <span key={badge} className="px-2 py-1 rounded border border-white/10 font-rajdhani text-xs text-gray-500">
                  {badge}
                </span>
              ))}
            </div>

            {/* Scroll to top */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-lg border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 transition-all"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
