import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, AtSign, Mail } from 'lucide-react';


const team = [
  {
    name: 'Zainab Abbasi',
    role: 'Co-Founder & Developer',
    dept: 'Leadership',
    bio: 'Founder of Zenith Forge Hub, leading business strategy, innovation, and digital transformation. Passionate about building impactful technology solutions that help businesses grow.',
    avatar: 'ZA',
    color: 'yellow',
    skills: ['Leadership', 'Business Strategy', 'Project Management'],
    social: {
      linkedin: 'https://www.linkedin.com/in/zainab-sharif-abbasi/',
      github: 'https://github.com/MS-Zainab',
      email: 'mailto:zainabsharifabbasi@gmail.com',
    },
  },
  {
    name: 'Syeda Farzeen',
    role: 'Co-Founder & CTO',
    dept: 'Technology',
    bio: 'Co-Founder responsible for software architecture, AI solutions, and scalable technology. Focused on delivering reliable, modern, and high-performance digital products.',
    avatar: 'SF',
    color: 'blue',
    skills: ['Full Stack Development', 'AI Solutions', 'Cloud Technology'],

    social: {
      linkedin: '#',
      github: '#',
      email: 'mailto:zenithforgehub@gmail.com',
    }
  },
  {
    name: 'Hajra Khilji',
    role: 'Co-Founder & Creative Director',
    dept: 'Creative',
    bio: 'Co-Founder leading product design, branding, and user experience. Dedicated to creating intuitive, visually engaging, and user-focused digital experiences.',
    avatar: 'HK',
    color: 'yellow',
    skills: ['UI/UX Design', 'Brand Identity', 'Creative Strategy'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'mailto:zenithforgehub@gmail.com',
    }
  },
];


export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A1628 0%, #050d1a 100%)' }}>
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />

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
            <span className="font-rajdhani text-sm text-blue-400 tracking-widest font-semibold">OUR TEAM</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the <span className="text-blue-gradient">Founding Team</span>
          </h2>
          <div className="neon-line w-32 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building Zenith Forge Hub with a shared vision of delivering innovative technology solutions, empowering businesses, and creating meaningful digital experiences.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative rounded-2xl p-6 navbar-glass border border-white/5 hover:border-yellow-400/30 transition-all duration-300 card-hover"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 ${member.color === 'yellow'
                  ? 'bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0 group-hover:opacity-100'
                  : 'bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0 group-hover:opacity-100'
                } opacity-0`} />

              {/* Avatar */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center font-orbitron text-xl font-bold shrink-0 ${member.color === 'yellow'
                    ? 'bg-gradient-to-br from-yellow-400/30 to-orange-400/20 border border-yellow-400/40 text-yellow-400'
                    : 'bg-gradient-to-br from-blue-400/30 to-cyan-400/20 border border-blue-400/40 text-blue-400'
                  }`}>
                  {member.avatar}
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#0A1628] ${member.color === 'yellow' ? 'bg-yellow-400' : 'bg-green-400'
                    }`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-rajdhani text-xs text-gray-500 tracking-widest mb-0.5">{member.dept}</div>
                  <h3 className="font-orbitron text-base font-bold text-white truncate group-hover:text-yellow-400 transition-colors">
                    {member.name}
                  </h3>
                  <div className={`font-rajdhani text-sm font-semibold ${member.color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'
                    }`}>
                    {member.role}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="font-rajdhani text-sm text-gray-400 leading-relaxed mb-4">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2 py-0.5 rounded text-xs font-rajdhani border ${member.color === 'yellow'
                        ? 'border-yellow-400/30 bg-yellow-400/8 text-yellow-400'
                        : 'border-blue-400/30 bg-blue-400/8 text-blue-400'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}

              {/* Social Links */}
              <div className="flex gap-3 pt-3 border-t border-white/5">
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all ${member.color === 'yellow'
                      ? 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                      : 'text-gray-400 hover:text-blue-400 hover:bg-blue-400/10'
                    }`}
                >
                  <Link size={16} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all ${member.color === 'yellow'
                      ? 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                      : 'text-gray-400 hover:text-blue-400 hover:bg-blue-400/10'
                    }`}
                >
                  <AtSign size={16} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.social.email}
                  className={`p-2 rounded-lg transition-all ${member.color === 'yellow'
                      ? 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                      : 'text-gray-400 hover:text-blue-400 hover:bg-blue-400/10'
                    }`}
                >
                  <Mail size={16} />
                </motion.a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl gold-border navbar-glass">
            <div className="text-left">
              <h3 className="font-orbitron text-xl font-bold text-white mb-1">Let's Build the Future Together</h3>
              <p className="font-rajdhani text-gray-400">Have an exciting project or partnership in mind? We'd love to hear from you and explore how we can work together.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-3 rounded-full font-orbitron text-xs font-bold tracking-widest whitespace-nowrap"
            >
              GET IN TOUCH
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
