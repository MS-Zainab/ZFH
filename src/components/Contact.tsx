import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={22} />,
    title: 'Email Us',
    value: 'zenithforgehub@gmail.com',
    sub: 'Response within 24 hours',
    color: 'yellow',
  },
  {
    icon: <Phone size={22} />,
    title: 'Call Us',
    value: '0324 3214033',
    sub: 'Mon-Fri, 9AM - 6PM EST',
    color: 'blue',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Headquarters',
    value: 'Remote',
    sub: 'Pakistan ,Hyderabad',
    color: 'yellow',
  },
  {
    icon: <Clock size={22} />,
    title: 'Working Hours',
    value: '24/7 Support Available',
    sub: 'Emergency response: 1 hour',
    color: 'blue',
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/zenith-forge-hub/?viewAsMember=true",
  },
  {
    name: "GitHub",
    url: "#",
  },
  {
    name: "YouTube",
    url: "#",
  },
  {
    name: "Facebook",
    url: "#",
  },
];


export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A1628 0%, #020810 100%)' }}>
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/8 mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="font-rajdhani text-sm text-yellow-400 tracking-widest font-semibold">GET IN TOUCH</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-gold-gradient">Forge</span> Something
            <br />
            <span className="text-blue-gradient">Amazing Together</span>
          </h2>
          <div className="neon-line w-32 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology?
            Our team is standing by to forge your vision into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="mb-8">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-3">Contact Information</h3>
              <p className="font-rajdhani text-gray-400">
                Reach out through any channel. We respond to all inquiries within 24 hours.
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`flex items-start gap-4 p-4 rounded-xl navbar-glass border transition-all hover:scale-[1.02] ${info.color === 'yellow' ? 'border-yellow-400/20 hover:border-yellow-400/40' : 'border-blue-400/20 hover:border-blue-400/40'
                  }`}
              >
                <div className={`p-2.5 rounded-lg shrink-0 ${info.color === 'yellow' ? 'bg-yellow-400/15 text-yellow-400' : 'bg-blue-400/15 text-blue-400'
                  }`}>
                  {info.icon}
                </div>
                <div>
                  <div className="font-rajdhani text-xs text-gray-500 tracking-widest mb-0.5">{info.title}</div>
                  <div className="font-rajdhani text-white font-semibold">{info.value}</div>
                  <div className="font-rajdhani text-xs text-gray-500">{info.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <div className="pt-4">
              <p className="font-rajdhani text-xs text-gray-500 tracking-widest mb-3">
                FOLLOW US
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-yellow-400/40 text-gray-400 hover:text-yellow-400 font-rajdhani text-xs transition-all hover:bg-yellow-400/8"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[500px] text-center rounded-2xl gold-border navbar-glass p-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="text-yellow-400 mb-6"
                >
                  <CheckCircle size={80} />
                </motion.div>
                <h3 className="font-orbitron text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="font-rajdhani text-gray-400 text-lg mb-8">
                  Thank you for reaching out to Zenith Forge Hub. Our team will contact you within 24 hours to discuss your project.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' }); }}
                  className="btn-secondary px-8 py-3 rounded-full font-orbitron text-xs font-bold tracking-widest"
                >
                  SEND ANOTHER
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl gold-border navbar-glass p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare size={20} className="text-yellow-400" />
                  <h3 className="font-orbitron text-xl font-bold text-white">Start Your Project</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-rajdhani text-xs text-gray-400 tracking-widest block mb-1.5">YOUR NAME *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 font-rajdhani text-white placeholder-gray-600 focus:outline-none transition-all ${errors.name ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-yellow-400/60'
                        }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1 font-rajdhani">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="font-rajdhani text-xs text-gray-400 tracking-widest block mb-1.5">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 font-rajdhani text-white placeholder-gray-600 focus:outline-none transition-all ${errors.email ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-yellow-400/60'
                        }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 font-rajdhani">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-rajdhani text-xs text-gray-400 tracking-widest block mb-1.5">COMPANY</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-rajdhani text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/60 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-rajdhani text-xs text-gray-400 tracking-widest block mb-1.5">SERVICE NEEDED</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#0A1628] border border-white/10 rounded-xl px-4 py-3 font-rajdhani text-white focus:outline-none focus:border-yellow-400/60 transition-all"
                    >
                      <option value="" className="bg-[#0A1628]">Select a service</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="software">Custom Software Dev</option>
                      <option value="cloud">Cloud & DevOps</option>
                      <option value="security">Cybersecurity</option>
                      <option value="analytics">Data Analytics</option>
                      <option value="mobile">Mobile App Development</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="font-rajdhani text-xs text-gray-400 tracking-widest block mb-1.5">PROJECT BUDGET</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[#0A1628] border border-white/10 rounded-xl px-4 py-3 font-rajdhani text-white focus:outline-none focus:border-yellow-400/60 transition-all"
                  >
                    <option value="" className="bg-[#0A1628]">Select budget range</option>
                    <option value="10k">$10K - $25K</option>
                    <option value="25k">$25K - $50K</option>
                    <option value="50k">$50K - $100K</option>
                    <option value="100k">$100K - $500K</option>
                    <option value="500k">$500K+</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="font-rajdhani text-xs text-gray-400 tracking-widest block mb-1.5">PROJECT DETAILS *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 font-rajdhani text-white placeholder-gray-600 focus:outline-none transition-all resize-none ${errors.message ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-yellow-400/60'
                      }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 font-rajdhani">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full btn-primary py-4 rounded-xl font-orbitron text-sm font-bold tracking-widest flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#050d1a]/30 border-t-[#050d1a] rounded-full animate-spin" />
                      SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      SEND MESSAGE
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
