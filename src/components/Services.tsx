import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Brain, Code2, Cloud, Shield, BarChart3, Smartphone, ChevronRight, X } from 'lucide-react';

const services = [
  {
    icon: <Brain size={32} />,
    title: 'AI & Machine Learning',
    shortDesc: 'Build intelligent systems that learn, adapt, and predict.',
    fullDesc: 'Our AI/ML solutions encompass deep learning models, natural language processing, computer vision, predictive analytics, and large language model integrations. We build custom AI pipelines tailored to your specific business needs.',
    features: ['Custom LLM Integration', 'Computer Vision Systems', 'NLP & Chatbots', 'Predictive Analytics', 'AI Model Training', 'MLOps Pipelines'],
    color: 'yellow',
    gradient: 'from-yellow-400/20 to-orange-400/10',
    badge: '🔥 Most Popular',
  },
  {
    icon: <Code2 size={32} />,
    title: 'Custom Software Dev',
    shortDesc: 'Scalable, robust software solutions for enterprise needs.',
    fullDesc: 'From concept to deployment, we build enterprise-grade web applications, APIs, microservices, and backend systems using modern tech stacks. Our agile methodology ensures rapid delivery without compromising on quality.',
    features: ['Web Applications', 'API Development', 'Microservices', 'Database Design', 'DevOps & CI/CD', 'Legacy Modernization'],
    color: 'blue',
    gradient: 'from-blue-400/20 to-cyan-400/10',
    badge: null,
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud & DevOps',
    shortDesc: 'Seamless cloud migration and infrastructure automation.',
    fullDesc: 'We design, implement, and manage cloud infrastructure on AWS, Azure, and GCP. Our DevOps expertise ensures automated deployments, infrastructure as code, container orchestration, and 99.9% uptime.',
    features: ['Cloud Migration', 'Kubernetes & Docker', 'Infrastructure as Code', 'CI/CD Automation', 'Multi-Cloud Strategy', 'Cost Optimization'],
    color: 'yellow',
    gradient: 'from-yellow-400/20 to-green-400/10',
    badge: null,
  },
  {
    icon: <Shield size={32} />,
    title: 'Web Development',
    shortDesc: 'Modern, responsive websites built for real-world needs.',
    fullDesc: 'Web development services focused on creating responsive, user-friendly, and functional websites using modern web technologies. From business websites and landing pages to custom web applications, we build clean and practical digital experiences tailored to your needs.',
    features: ['Penetration Testing', 'Threat Detection', 'Security Audits', 'Zero Trust Architecture', 'Compliance (SOC2, ISO)', 'Incident Response'],
    color: 'blue',
    gradient: 'from-blue-400/20 to-purple-400/10',
    badge: '💻 Web Development',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Data Analytics & BI',
    shortDesc: 'Transform raw data into actionable business insights.',
    fullDesc: 'We build comprehensive data platforms including data warehouses, ETL pipelines, real-time analytics dashboards, and business intelligence tools. Turn your data into a competitive advantage.',
    features: ['Responsive Websites', 'Business Websites', 'Landing Pages', 'Custom Web Applications', 'Frontend Development', 'API Integration'],
    color: 'yellow',
    gradient: 'from-yellow-400/20 to-red-400/10',
    badge: null,
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform mobile experiences.',
    fullDesc: 'We develop high-performance mobile applications for iOS and Android using React Native and Flutter. From UI/UX design to App Store deployment, we handle the complete mobile development lifecycle.',
    features: ['iOS & Android Apps', 'React Native & Flutter', 'UI/UX Design', 'App Store Deployment', 'Push Notifications', 'Offline Functionality'],
    color: 'blue',
    gradient: 'from-blue-400/20 to-indigo-400/10',
    badge: null,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A1628 0%, #050d1a 100%)' }}>
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/8 mb-4">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="font-rajdhani text-sm text-blue-400 tracking-widest font-semibold">WHAT WE DO</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-gradient">Services</span>
          </h2>
          <div className="neon-line w-32 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-6 cursor-pointer border transition-all duration-300 bg-gradient-to-br ${service.gradient} ${
                service.color === 'yellow'
                  ? 'border-yellow-400/20 hover:border-yellow-400/50'
                  : 'border-blue-400/20 hover:border-blue-400/50'
              } navbar-glass group`}
              onClick={() => setSelected(i)}
            >
              {service.badge && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-yellow-400 text-[#050d1a] text-xs font-orbitron font-bold rounded-full">
                  {service.badge}
                </div>
              )}

              <div className={`mb-4 ${service.color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'}`}>
                {service.icon}
              </div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              <p className="font-rajdhani text-gray-400 text-sm leading-relaxed mb-4">{service.shortDesc}</p>

              <ul className="space-y-1 mb-6">
                {service.features.slice(0, 3).map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-rajdhani text-gray-400">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.color === 'yellow' ? 'bg-yellow-400' : 'bg-blue-400'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className={`flex items-center gap-1 text-xs font-rajdhani font-semibold transition-all group-hover:gap-2 ${
                service.color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'
              }`}>
                Learn More <ChevronRight size={14} />
              </div>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                service.color === 'yellow' ? 'glow-gold' : 'glow-blue'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(2, 8, 16, 0.9)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-lg w-full rounded-2xl p-8 gold-border navbar-glass"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <X size={20} />
              </button>

              <div className={`mb-4 ${services[selected].color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'}`}>
                {services[selected].icon}
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-3">{services[selected].title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{services[selected].fullDesc}</p>

              <div>
                <h4 className="font-rajdhani text-sm text-gray-400 tracking-widest mb-3">KEY FEATURES</h4>
                <div className="grid grid-cols-2 gap-2">
                  {services[selected].features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-rajdhani text-gray-300">
                      <span className={`w-2 h-2 rounded-full ${services[selected].color === 'yellow' ? 'bg-yellow-400' : 'bg-blue-400'}`} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelected(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary w-full py-3 rounded-xl font-orbitron text-sm font-bold tracking-widest mt-6"
              >
                GET A QUOTE
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
