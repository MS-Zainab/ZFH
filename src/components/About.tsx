import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Target, Eye, Award, Users, Code2, Brain } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered', icon: <Code2 size={24} /> },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: <Award size={24} /> },
  { value: 150, suffix: '+', label: 'Expert Engineers', icon: <Users size={24} /> },
  { value: 30, suffix: '+', label: 'Countries Served', icon: <Brain size={24} /> },
];

const values = [
  {
    icon: '⚡',
    title: 'Innovation First',
    desc: 'We embrace cutting-edge technology and pioneering approaches to solve complex challenges.',
  },
  {
    icon: '🛡️',
    title: 'Security by Design',
    desc: 'Every solution is built with enterprise-grade security and data privacy at its core.',
  },
  {
    icon: '🚀',
    title: 'Agile Delivery',
    desc: 'Rapid development cycles ensure your product reaches market faster without sacrificing quality.',
  },
  {
    icon: '🤝',
    title: 'Client Partnership',
    desc: 'We work as an extension of your team, deeply invested in your long-term success.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 section-gradient overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      {/* Decorative blobs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/8 mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            <span className="font-rajdhani text-sm text-yellow-400 tracking-widest font-semibold">ABOUT US</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Forging the <span className="text-gold-gradient">Future</span> of Technology
          </h2>
          <div className="neon-line w-32 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to reshape the digital landscape, Zenith Forge Hub stands at the intersection of innovation and excellence.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gold-border p-0.5">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="AI Technology"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent rounded-2xl" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 navbar-glass rounded-2xl p-4 border border-yellow-400/30"
            >
              <div className="font-orbitron text-3xl font-bold text-gold-gradient">10+</div>
              <div className="font-rajdhani text-sm text-gray-400">Years of Excellence</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 navbar-glass rounded-2xl p-4 border border-blue-400/30"
            >
              <div className="font-orbitron text-3xl font-bold text-blue-gradient">50+</div>
              <div className="font-rajdhani text-sm text-gray-400">Tech Partners</div>
            </motion.div>

            {/* Circuit lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <path d="M 50 350 L 50 300 L 100 300 L 100 250" stroke="#C9A84C" strokeWidth="1" fill="none" strokeDasharray="5,5" opacity="0.3" />
              <path d="M 350 50 L 350 100 L 300 100 L 300 150" stroke="#3B82F6" strokeWidth="1" fill="none" strokeDasharray="5,5" opacity="0.3" />
            </svg>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To empower businesses worldwide with transformative AI and software solutions that drive growth, 
                    efficiency, and competitive advantage in the digital age.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-400/10 border border-blue-400/30 text-blue-400 shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To be the world's most trusted technology forge — where ideas are transformed into 
                    powerful digital realities that shape the future of industries.
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <h4 className="font-rajdhani text-sm text-gray-400 tracking-widest mb-3">CORE TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'React', 'Node.js', 'AWS', 'Azure', 'Kubernetes', 'PyTorch', 'LangChain', 'GPT-4'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-rajdhani font-semibold border border-yellow-400/30 bg-yellow-400/8 text-yellow-400 hover:border-yellow-400/70 hover:bg-yellow-400/15 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary px-8 py-3 rounded-full font-orbitron text-xs font-bold tracking-widest mt-4 inline-block"
              >
                EXPLORE SERVICES
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="gold-border rounded-2xl p-6 text-center card-hover cursor-default group"
            >
              <div className="text-yellow-400 flex justify-center mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="font-orbitron text-3xl font-bold text-gold-gradient mb-1">
                {inView && (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                )}
              </div>
              <div className="font-rajdhani text-sm text-gray-400 tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-8">
            Our Core <span className="text-gold-gradient">Values</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="navbar-glass rounded-xl p-6 border border-white/5 hover:border-yellow-400/30 transition-all card-hover group"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4 className="font-orbitron text-sm font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{v.title}</h4>
                <p className="font-rajdhani text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
