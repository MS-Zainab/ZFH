import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Loading screen
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background:
          'linear-gradient(135deg, #020810 0%, #050d1a 50%, #020810 100%)',
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 200,
          }}
          className="mb-6"
        >
          <img
            src="/images/logo.png"
            alt="ZFH Logo"
            className="w-28 h-28 object-contain logo-glow"
          />
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="font-orbitron text-3xl font-black mb-1">
            <span className="text-gold-gradient">ZENITH </span>
            <span className="text-white">FORGE </span>
            <span className="text-blue-gradient">HUB</span>
          </div>

          <div className="font-rajdhani text-sm tracking-[0.5em] text-gray-500">
            ZFH TECHNOLOGIES
          </div>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-64 h-1 bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              delay: 0.9,
              duration: 1.6,
              ease: 'easeInOut',
            }}
            className="h-full rounded-full"
            style={{
              background:
                'linear-gradient(90deg, #C9A84C, #3B82F6, #C9A84C)',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 font-rajdhani text-xs text-gray-500 tracking-widest"
        >
          INITIALIZING SYSTEMS...
        </motion.div>

        {/* Decorative rings */}
        <div className="absolute -z-10 w-48 h-48 rounded-full border border-yellow-400/10 rotate-ring" />
        <div className="absolute -z-10 w-72 h-72 rounded-full border border-blue-400/5 rotate-ring-reverse" />
      </div>
    </motion.div>
  );
}

// Scroll to top button
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full btn-primary flex items-center justify-center shadow-2xl pulse-gold"
          title="Scroll to top"
        >
          <span className="font-orbitron text-lg font-bold text-[#050d1a]">
            ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Chat widget
function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<
    Array<{ from: 'bot' | 'user'; text: string }>
  >([
    {
      from: 'bot',
      text: '👋 Hi! Welcome to Zenith Forge Hub. How can I help you today?',
    },
  ]);

  const [input, setInput] = useState('');

  // WhatsApp number in international format
  const WHATSAPP_NUMBER = '923243214033';

  const handleSend = () => {
    const message = input.trim();

    if (!message) {
      return;
    }

    // Add user's message to the chat window
    setMessages((prev) => [
      ...prev,
      {
        from: 'user',
        text: message,
      },
    ]);

    // Clear input
    setInput('');

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hi Zenith Forge Hub! 👋\n\n${message}`
    );

    // Open WhatsApp with the message ready to send
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            className="mb-4 w-80 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              border: '1px solid rgba(201, 168, 76, 0.3)',
              background: '#0A1628',
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{
                background:
                  'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(59,130,246,0.2))',
              }}
            >
              <img
                src="/images/logo.png"
                alt="ZFH"
                className="w-8 h-8 object-contain"
              />

              <div>
                <div className="font-orbitron text-xs font-bold text-white">
                  ZFH Support
                </div>

                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />

                  <span className="font-rajdhani text-xs text-green-400">
                    Online
                  </span>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-gray-400 hover:text-white text-lg"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === 'user'
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl font-rajdhani text-sm ${
                      msg.from === 'user'
                        ? 'bg-yellow-400 text-[#050d1a] rounded-br-none'
                        : 'bg-white/10 text-gray-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();
                  }
                }}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 font-rajdhani text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/60"
              />

              <button
                onClick={handleSend}
                className="btn-primary px-3 py-2 rounded-xl font-bold text-xs"
                aria-label="Send message on WhatsApp"
                title="Send on WhatsApp"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full btn-primary flex items-center justify-center shadow-2xl relative"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <span className="text-2xl">
          {open ? '×' : '💬'}
        </span>

        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <Navbar />

          <main>
            <Hero />
            <About />
            <Services />
            <Process />
            <Portfolio />
            <Team />
            <Testimonials />
            <Contact />
          </main>

          <Footer />

          <ScrollToTop />

          <ChatWidget />
        </motion.div>
      )}
    </>
  );
}