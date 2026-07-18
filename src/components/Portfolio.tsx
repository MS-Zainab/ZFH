import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'AI/ML', 'Web App', 'Cloud', 'Mobile', 'Security'];

const projects = [
  {
    title: 'NeuralVision AI Platform',
    category: 'AI/ML',
    desc: 'Advanced computer vision platform for real-time object detection and image classification with 99.2% accuracy.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'yellow',
    result: '99.2% Accuracy',
  },
  {
    title: 'CloudForge Enterprise Suite',
    category: 'Cloud',
    desc: 'Multi-cloud infrastructure management platform handling 10M+ daily transactions for Fortune 500 clients.',
    tech: ['AWS', 'Kubernetes', 'Terraform', 'React'],
    image: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'blue',
    result: '10M+ Daily TXN',
  },
  {
    title: 'SmartHealth AI Diagnostics',
    category: 'AI/ML',
    desc: 'AI-powered medical diagnostic platform that assists physicians in early disease detection with 97% precision.',
    tech: ['PyTorch', 'Django', 'PostgreSQL', 'Docker'],
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'yellow',
    result: '97% Precision',
  },
  {
    title: 'FinTrack Analytics Dashboard',
    category: 'Web App',
    desc: 'Real-time financial analytics dashboard processing billions in transactions with predictive insights.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redis'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'blue',
    result: '$2B+ Processed',
  },
  {
    title: 'SecureShield Enterprise',
    category: 'Security',
    desc: 'Zero-trust cybersecurity platform with AI threat detection protecting 500+ enterprise networks globally.',
    tech: ['Go', 'Rust', 'ElasticSearch', 'Kafka'],
    image: 'https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'yellow',
    result: '500+ Networks',
  },
  {
    title: 'ZenithMobile Commerce',
    category: 'Mobile',
    desc: 'Cross-platform e-commerce mobile app with AI-powered product recommendations and AR try-on features.',
    tech: ['React Native', 'TypeScript', 'GraphQL', 'Firebase'],
    image: 'https://images.pexels.com/photos/7988745/pexels-photo-7988745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'blue',
    result: '5M+ Downloads',
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 section-gradient overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/8 mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="font-rajdhani text-sm text-yellow-400 tracking-widest font-semibold">OUR WORK</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gold-gradient">Projects</span>
          </h2>
          <div className="neon-line w-32 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of transformative solutions delivered to clients worldwide.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-rajdhani font-semibold text-sm tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/40 transition-all duration-300 card-hover"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent" />

                  {/* Category badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-orbitron font-bold ${
                    project.color === 'yellow'
                      ? 'bg-yellow-400/20 border border-yellow-400/50 text-yellow-400'
                      : 'bg-blue-400/20 border border-blue-400/50 text-blue-400'
                  }`}>
                    {project.category}
                  </div>

                  {/* Result badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-rajdhani font-bold bg-white/10 border border-white/20 text-white">
                    {project.result}
                  </div>

                  {/* Links overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-yellow-400 text-[#050d1a]"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-white/20 text-white backdrop-blur-sm"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 navbar-glass">
                  <h3 className="font-orbitron text-base font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-rajdhani text-sm text-gray-400 leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded text-xs font-rajdhani text-gray-400 border border-white/10 bg-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary px-8 py-3 rounded-full font-orbitron text-xs font-bold tracking-widest">
            VIEW ALL PROJECTS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
