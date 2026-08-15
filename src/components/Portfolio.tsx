import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = [
  'All',
  'AI/ML',
  'Web App',
  'Computer Vision',
  'Data Analytics',
  'VR / Unity',
];

const projects = [
  {
    title: 'Smart IV Drip Monitoring System',
    category: 'Web App',
    desc: 'A web-based monitoring system designed to help track IV drip sessions, patients, devices, readings, alerts, nurses, and ward activity through a centralized dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    image:'/images/IV.jpg',
    color: 'blue',
    result: 'FYP Project',
  },

  {
    title: 'VR Campus Digital Twin',
    category: 'VR / Unity',
    desc: 'An interactive virtual campus experience designed to provide a digital representation of the university environment with immersive navigation and an AI assistant.',
    tech: ['Unity', 'C#', 'VR', 'AI Assistant'],
    image:'/images/VR.jpg',
    color: 'yellow',
    result: 'FYP Project',
  },

  {
    title: 'Smart Recruitment System',
    category: 'AI/ML',
    desc: 'An AI-assisted recruitment system that works with resumes and interview information to help analyze candidates, match skills, and generate useful recruitment insights.',
    tech: ['Python', 'NLP', 'spaCy', 'TF-IDF', 'NLTK'],
    image:'/images/SRS.jpg',
    color: 'blue',
    result: 'AI / NLP',
  },

  {
    title: 'IP Camera Monitoring System',
    category: 'Cloud',
    desc: 'A camera monitoring project focused on connecting and managing IP-based office camera streams, tracking camera sources, and running the monitoring environment inside a virtualized Docker setup.',
    tech: ['IP Cameras', 'Docker', 'VirtualBox', 'Networking'],
    image: '/images/CPA.jpg',
    color: 'blue',
    result: 'Monitoring System',
  },

  {
    title: 'Real-Time Order Tracking App',
    category: 'Web App',
    desc: 'A delivery tracking application designed to let users follow an order journey on a map, view its current progress, and understand where the order is and how close it is to the destination.',
    tech: ['JavaScript', 'Google Maps', 'Maps API', 'Web Development'],
    image: 'https://thumbs.wbm.im/pw/medium/76c5d99667f12ee507ba19c8c9cb6400.jpg',
    color: 'yellow',
    result: 'Location Tracking',
  },

  {
    title: 'Smart Attendance System',
    category: 'Computer Vision',
    desc: 'A computer vision based attendance project using face recognition concepts to identify registered individuals and support automated attendance recording.',
    tech: ['Python', 'OpenCV', 'Face Recognition', 'Computer Vision'],
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'yellow',
    result: 'Computer Vision',
  },

  {
    title: 'Disease Prediction System',
    category: 'AI/ML',
    desc: 'A machine learning project developed to explore disease prediction using structured health-related data, preprocessing, model training, and prediction.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    image:
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'blue',
    result: 'ML Project',
  },

  {
    title: 'Crop Yield Prediction',
    category: 'AI/ML',
    desc: 'A machine learning prediction project focused on analyzing agricultural data and estimating crop yield using data preprocessing, model training, and evaluation.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis'],
    image:
      'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'yellow',
    result: 'Prediction Model',
  },

  {
    title: 'Cat vs Dog Image Classifier',
    category: 'Computer Vision',
    desc: 'A deep learning image classification project that analyzes an input image and predicts whether the image contains a cat or a dog.',
    tech: ['Python', 'Deep Learning', 'CNN', 'Image Classification'],
    image:
      'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'blue',
    result: 'Deep Learning',
  },

  {
    title: 'Azaadi Chatbot',
    category: 'AI/ML',
    desc: 'An AI chatbot project created around the theme of Pakistan’s independence, designed to provide an interactive conversational experience around the topic.',
    tech: ['Python', 'AI', 'NLP', 'Chatbot'],
    image: '/images/AC.jpg',
    color: 'yellow',
    result: 'AI Project',
  },

  {
    title: 'Travel Agency Website',
    category: 'Web App',
    desc: 'A responsive business website concept for a travel and tourism agency with service information, destination content, contact options, testimonials, and customer-focused sections.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image:
      'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'blue',
    result: 'Web Project',
  },

  {
    title: 'Titanic Dataset Analysis',
    category: 'Data Analytics',
    desc: 'A data analysis project using the Titanic dataset to explore passenger survival, deaths, demographics, and relationships between different variables through data cleaning and visualization.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    image:
      'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'yellow',
    result: 'Data Analysis',
  },

  {
    title: 'Dataset Cleaning & Visualization',
    category: 'Data Analytics',
    desc: 'Hands-on data analytics work involving dataset cleaning, preprocessing, exploratory analysis, creating tables, adding and updating data, and building graphs to understand patterns and insights.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    image:
      'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'blue',
    result: 'Data Analytics',
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative py-24 section-gradient overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl" />

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/8 mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="font-rajdhani text-sm text-yellow-400 tracking-widest font-semibold">
              SELECTED WORK
            </span>
          </div>

          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gold-gradient">Projects</span>
          </h2>

          <div className="neon-line w-32 mx-auto mb-6" />

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects developed through academic work, practical
            learning, AI/ML exploration, and web development.
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
              className={`px-5 py-2 rounded-full font-rajdhani font-semibold text-sm tracking-wider transition-all duration-300 ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'
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

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-orbitron font-bold ${project.color === 'yellow'
                      ? 'bg-yellow-400/20 border border-yellow-400/50 text-yellow-400'
                      : 'bg-blue-400/20 border border-blue-400/50 text-blue-400'
                      }`}
                  >
                    {project.category}
                  </div>

                  {/* Project Type / Result Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-rajdhani font-bold bg-white/10 border border-white/20 text-white">
                    {project.result}
                  </div>

                  {/* Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-yellow-400 text-[#050d1a]"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-white/20 text-white backdrop-blur-sm"
                      aria-label={`Open ${project.title} details`}
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

                  <p className="font-rajdhani text-sm text-gray-400 leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-rajdhani text-gray-400 border border-white/10 bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects */}
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