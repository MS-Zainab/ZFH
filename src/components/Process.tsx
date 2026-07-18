import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: <Search size={28} />,
    number: '01',
    title: 'Discovery & Strategy',
    desc: 'We dive deep into your business goals, challenges, and technical requirements to forge a comprehensive strategy.',
    color: 'yellow',
  },
  {
    icon: <Lightbulb size={28} />,
    number: '02',
    title: 'Design & Architecture',
    desc: 'Our experts design scalable system architectures and intuitive UI/UX that align with your vision.',
    color: 'blue',
  },
  {
    icon: <Code2 size={28} />,
    number: '03',
    title: 'Agile Development',
    desc: 'Sprint-based development with continuous integration ensures rapid, high-quality delivery.',
    color: 'yellow',
  },
  {
    icon: <Rocket size={28} />,
    number: '04',
    title: 'Launch & Deploy',
    desc: 'Seamless deployment with rigorous QA testing, security audits, and performance optimization.',
    color: 'blue',
  },
  {
    icon: <HeadphonesIcon size={28} />,
    number: '05',
    title: 'Support & Scale',
    desc: '24/7 monitoring, continuous improvement, and dedicated support to keep your systems at peak performance.',
    color: 'yellow',
  },
];

const techCategories = [
  {
    title: 'AI & ML',
    techs: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'LangChain', 'Hugging Face', 'Scikit-learn'],
    color: 'yellow',
    icon: '🧠',
  },
  {
    title: 'Frontend',
    techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    color: 'blue',
    icon: '💻',
  },
  {
    title: 'Backend',
    techs: ['Node.js', 'Python', 'Go', 'Rust', 'GraphQL', 'FastAPI'],
    color: 'yellow',
    icon: '⚙️',
  },
  {
    title: 'Cloud & DevOps',
    techs: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
    color: 'blue',
    icon: '☁️',
  },
  {
    title: 'Database',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra', 'Neo4j'],
    color: 'yellow',
    icon: '🗄️',
  },
  {
    title: 'Security',
    techs: ['OAuth 2.0', 'Zero Trust', 'Vault', 'SIEM', 'WAF', 'mTLS'],
    color: 'blue',
    icon: '🔒',
  },
];

export default function Process() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });

  return (
    <>
      {/* Process Section */}
      <section className="relative py-24 section-gradient overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute bottom-0 left-0 right-0 section-divider" />

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
              <span className="font-rajdhani text-sm text-blue-400 tracking-widest font-semibold">HOW WE WORK</span>
            </div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-blue-gradient">Process</span>
            </h2>
            <div className="neon-line w-32 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results, on time and on budget.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent hidden lg:block" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                    step.color === 'yellow'
                      ? 'bg-yellow-400/15 border border-yellow-400/40 text-yellow-400 group-hover:bg-yellow-400/25'
                      : 'bg-blue-400/15 border border-blue-400/40 text-blue-400 group-hover:bg-blue-400/25'
                  }`}>
                    {step.icon}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-orbitron font-bold ${
                      step.color === 'yellow' ? 'bg-yellow-400 text-[#050d1a]' : 'bg-blue-400 text-[#050d1a]'
                    }`}>
                      {i + 1}
                    </div>
                  </div>

                  <div className="font-orbitron text-xs text-gray-600 mb-1">{step.number}</div>
                  <h3 className={`font-orbitron text-sm font-bold mb-2 group-hover:transition-colors ${
                    step.color === 'yellow' ? 'text-white group-hover:text-yellow-400' : 'text-white group-hover:text-blue-400'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="font-rajdhani text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050d1a 0%, #0A1628 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute bottom-0 left-0 right-0 section-divider" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref2}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/8 mb-4">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="font-rajdhani text-sm text-yellow-400 tracking-widest font-semibold">TECH STACK</span>
            </div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
              Technologies We <span className="text-gold-gradient">Master</span>
            </h2>
            <div className="neon-line w-32 mx-auto mb-6" />
          </motion.div>

          {/* Tech Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`rounded-2xl p-6 navbar-glass border transition-all duration-300 card-hover group ${
                  cat.color === 'yellow' ? 'border-yellow-400/20 hover:border-yellow-400/50' : 'border-blue-400/20 hover:border-blue-400/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className={`font-orbitron text-lg font-bold group-hover:transition-colors ${
                    cat.color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'
                  }`}>
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 rounded-lg text-xs font-rajdhani font-semibold border transition-all hover:scale-105 ${
                        cat.color === 'yellow'
                          ? 'border-yellow-400/30 bg-yellow-400/8 text-yellow-300 hover:bg-yellow-400/20'
                          : 'border-blue-400/30 bg-blue-400/8 text-blue-300 hover:bg-blue-400/20'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
