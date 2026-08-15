// import { useRef, useState } from 'react';
// import { motion, useInView, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// const testimonials = [
//   {
//     name: 'Robert Sterling',
//     role: 'CTO, Sterling Fintech Group',
//     company: 'Sterling Fintech',
//     text: "Zenith Forge Hub transformed our entire data infrastructure. Their AI analytics platform reduced our processing time by 80% and uncovered insights we never thought possible. Truly world-class engineering.",
//     rating: 5,
//     avatar: 'RS',
//     color: 'yellow',
//   },
//   {
//     name: 'Priya Mehta',
//     role: 'VP Technology, HealthCore Systems',
//     company: 'HealthCore Systems',
//     text: "The AI diagnostic system ZFH built for us is nothing short of revolutionary. It's helping physicians detect diseases 40% earlier. Their team's expertise in ML and healthcare compliance is unmatched.",
//     rating: 5,
//     avatar: 'PM',
//     color: 'blue',
//   },
//   {
//     name: 'David MacKenzie',
//     role: 'CEO, LogiTech Innovations',
//     company: 'LogiTech',
//     text: "ZFH delivered our cloud migration project on time and 15% under budget. Their DevOps team set up a CI/CD pipeline that reduced our deployment time from days to minutes. Outstanding partnership.",
//     rating: 5,
//     avatar: 'DM',
//     color: 'yellow',
//   },
//   {
//     name: 'Yuki Tanaka',
//     role: 'Head of Digital, Tanaka Retail Corp',
//     company: 'Tanaka Retail',
//     text: "Our mobile commerce app built by Zenith Forge Hub achieved 5 million downloads in just 6 months. The AI recommendation engine increased our conversion rate by 35%. They're genuinely brilliant.",
//     rating: 5,
//     avatar: 'YT',
//     color: 'blue',
//   },
//   {
//     name: 'Sarah O\'Brien',
//     role: 'CISO, SecureNet Enterprise',
//     company: 'SecureNet',
//     text: "ZFH's cybersecurity team identified 23 critical vulnerabilities in our infrastructure that we had missed for years. Their zero-trust implementation has made us virtually impenetrable to attacks.",
//     rating: 5,
//     avatar: 'SO',
//     color: 'yellow',
//   },
// ];

// const logos = ['Google', 'Microsoft', 'Amazon', 'IBM', 'Oracle', 'Salesforce', 'SAP', 'Adobe'];

// export default function Testimonials() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-100px' });
//   const [current, setCurrent] = useState(0);

//   const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
//   const next = () => setCurrent((c) => (c + 1) % testimonials.length);

//   return (
//     <section id="testimonials" className="relative py-24 section-gradient overflow-hidden">
//       <div className="absolute inset-0 grid-bg opacity-15" />
//       <div className="absolute top-0 left-0 right-0 section-divider" />
//       <div className="absolute bottom-0 left-0 right-0 section-divider" />
//       <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/8 mb-4">
//             <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
//             <span className="font-rajdhani text-sm text-yellow-400 tracking-widest font-semibold">TESTIMONIALS</span>
//           </div>
//           <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
//             Client <span className="text-gold-gradient">Success Stories</span>
//           </h2>
//           <div className="neon-line w-32 mx-auto mb-6" />
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Don't just take our word for it — hear from the businesses we've transformed.
//           </p>
//         </motion.div>

//         {/* Main Testimonial Carousel */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="relative max-w-4xl mx-auto mb-12"
//         >
//           <div className="relative min-h-[320px] flex items-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.4 }}
//                 className="w-full"
//               >
//                 <div className="relative rounded-3xl p-8 md:p-10 navbar-glass gold-border">
//                   {/* Quote icon */}
//                   <div className="absolute top-6 right-8 text-yellow-400/20">
//                     <Quote size={80} />
//                   </div>

//                   {/* Stars */}
//                   <div className="flex gap-1 mb-6">
//                     {Array.from({ length: testimonials[current].rating }).map((_, i) => (
//                       <span key={i} className="text-yellow-400 text-lg">★</span>
//                     ))}
//                   </div>

//                   {/* Text */}
//                   <p className="font-rajdhani text-xl text-gray-200 leading-relaxed mb-8 relative z-10">
//                     "{testimonials[current].text}"
//                   </p>

//                   {/* Author */}
//                   <div className="flex items-center gap-4">
//                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-orbitron text-base font-bold ${
//                       testimonials[current].color === 'yellow'
//                         ? 'bg-yellow-400/20 border border-yellow-400/40 text-yellow-400'
//                         : 'bg-blue-400/20 border border-blue-400/40 text-blue-400'
//                     }`}>
//                       {testimonials[current].avatar}
//                     </div>
//                     <div>
//                       <div className="font-orbitron text-base font-bold text-white">{testimonials[current].name}</div>
//                       <div className={`font-rajdhani text-sm ${
//                         testimonials[current].color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'
//                       }`}>
//                         {testimonials[current].role}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation */}
//           <div className="flex items-center justify-center gap-6 mt-8">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={prev}
//               className="p-3 rounded-full border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 transition-all"
//             >
//               <ChevronLeft size={20} />
//             </motion.button>

//             <div className="flex gap-2">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrent(i)}
//                   className={`rounded-full transition-all duration-300 ${
//                     i === current
//                       ? 'w-8 h-2 bg-yellow-400'
//                       : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
//                   }`}
//                 />
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={next}
//               className="p-3 rounded-full border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 transition-all"
//             >
//               <ChevronRight size={20} />
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Client Logos */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <p className="text-center font-rajdhani text-sm text-gray-500 tracking-widest mb-6">TRUSTED BY LEADING ORGANIZATIONS</p>
//           <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
//             {logos.map((logo, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0 }}
//                 animate={inView ? { opacity: 1 } : {}}
//                 transition={{ delay: 0.5 + i * 0.05 }}
//                 className="font-orbitron text-sm font-bold text-gray-600 hover:text-yellow-400 transition-colors cursor-default tracking-widest"
//               >
//                 {logo}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Code2, BarChart3, ServerCog } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    text: 'Hands-on experience building prediction models, computer vision projects, deep learning experiments, and AI applications through coursework and practical projects.',
    points: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'AI Applications',
    ],
    color: 'yellow',
  },
  {
    icon: Code2,
    title: 'Web Development',
    text: 'Building responsive websites, dashboards, and web applications with a focus on practical functionality, clean interfaces, and user-friendly experiences.',
    points: [
      'React Applications',
      'Responsive Websites',
      'Frontend Development',
      'API Integration',
    ],
    color: 'blue',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    text: 'Working with datasets to clean, analyze, visualize, and understand patterns through graphs, tables, exploratory analysis, and predictive models.',
    points: [
      'Data Cleaning',
      'Data Analysis',
      'Data Visualization',
      'Prediction Models',
    ],
    color: 'yellow',
  },
  {
    icon: ServerCog,
    title: 'Infrastructure & Tools',
    text: 'Hands-on experience with technical environments involving networking, Docker, VirtualBox, monitoring systems, APIs, and application infrastructure.',
    points: [
      'Docker & VirtualBox',
      'Networking',
      'Monitoring Systems',
      'System Integration',
    ],
    color: 'blue',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 section-gradient overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/8 mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />

            <span className="font-rajdhani text-sm text-yellow-400 tracking-widest font-semibold">
              WHAT I BRING
            </span>
          </div>

          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Skills Into{' '}
            <span className="text-gold-gradient">Practice</span>
          </h2>

          <div className="neon-line w-32 mx-auto mb-6" />

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A practical mix of development, AI, data, and technical
            problem-solving built through projects, coursework, and
            hands-on experimentation.
          </p>
        </motion.div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.1,
                }}
                className="group relative rounded-3xl p-7 navbar-glass border border-white/10 hover:border-yellow-400/40 transition-all duration-300 card-hover"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    item.color === 'yellow'
                      ? 'bg-yellow-400/15 border border-yellow-400/30 text-yellow-400'
                      : 'bg-blue-400/15 border border-blue-400/30 text-blue-400'
                  }`}
                >
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-rajdhani text-sm text-gray-400 leading-relaxed mb-6">
                  {item.text}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 font-rajdhani text-xs text-gray-400"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.color === 'yellow'
                            ? 'bg-yellow-400'
                            : 'bg-blue-400'
                        }`}
                      />

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Glow */}
                <div
                  className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                    item.color === 'yellow'
                      ? 'bg-yellow-400'
                      : 'bg-blue-400'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-rajdhani text-gray-500 text-sm">
            Learning continuously. Building practically. Improving with every
            project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}