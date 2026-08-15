import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Play, Zap, Shield, Globe } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; alpha: number; life: number;
    }> = [];

    const colors = ['#C9A84C', '#F0D080', '#3B82F6', '#60A5FA', '#1E40AF'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        life: Math.random() * 100,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.5;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw connections
        particles.forEach((p2, j) => {
          if (j === i) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        ctx.globalAlpha = p.alpha * (0.5 + 0.5 * Math.sin(p.life * 0.05));
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: <Zap size={20} />, value: '10+', label: 'Projects Delivered' },
    { icon: <Shield size={20} />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Globe size={20} />, value: 'Multiple', label: 'Projects Served' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-bg opacity-30" />

      {/* Radial gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 mb-6"
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="font-rajdhani text-sm text-yellow-400 tracking-widest font-semibold">
                NEXT-GEN IT & AI SOLUTIONS
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4"
            >
              <span className="text-gold-gradient glow-text-gold block">ZENITH</span>
              <span className="text-white block">FORGE</span>
              <span className="text-blue-gradient block">HUB</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-rajdhani text-xl md:text-2xl text-gray-300 mb-6 min-h-[40px]"
            >
              <span className="text-yellow-400">We Build </span>
              <TypeAnimation
                sequence={[
                  'Intelligent AI Systems', 2000,
                  'Custom Software Solutions', 2000,
                  'Cloud Infrastructure', 2000,
                  'Cybersecurity Platforms', 2000,
                  'Data Analytics Engines', 2000,
                  'Digital Transformation', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-400 font-bold"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Zenith Forge Hub (ZFH) is a premier IT & AI software Team forging tomorrow's technology today. 
              We deliver cutting-edge solutions that empower businesses to reach the <span className="text-yellow-400 font-semibold">zenith of innovation</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary px-8 py-4 rounded-full font-orbitron text-sm font-bold tracking-widest"
              >
                START YOUR PROJECT
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary px-8 py-4 rounded-full font-orbitron text-sm font-bold tracking-widest flex items-center gap-2"
              >
                <Play size={16} fill="currentColor" />
                VIEW WORK
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-yellow-400">{stat.icon}</div>
                  <div>
                    <div className="font-orbitron text-2xl font-bold text-gold-gradient">{stat.value}</div>
                    <div className="font-rajdhani text-xs text-gray-400 tracking-wider">{stat.label}</div>
                  </div>
                  {i < stats.length - 1 && <div className="w-px h-10 bg-gray-700 ml-3" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Outer rotating ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-yellow-400/20 rotate-ring">
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateX(205px) translateY(-50%)`,
                  }}
                />
              ))}
            </div>

            {/* Inner rotating ring */}
            <div className="absolute w-[320px] h-[320px] rounded-full border border-blue-500/30 rotate-ring-reverse">
              {[0, 90, 180, 270].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateX(155px) translateY(-50%)`,
                  }}
                />
              ))}
            </div>

            {/* Glowing ring */}
            <div className="absolute w-[260px] h-[260px] rounded-full border-2 border-yellow-400/40 glow-gold" />

            {/* Logo */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <img src="/images/logo.png" alt="ZFH Logo" className="w-52 h-52 object-contain logo-glow" />
            </motion.div>

            {/* Floating tech tags */}
            {[
              { text: 'AI', top: '10%', right: '5%', color: 'yellow' },
              { text: 'ML', top: '30%', left: '0%', color: 'blue' },
              { text: 'IoT', bottom: '20%', right: '0%', color: 'yellow' },
              { text: 'Cloud', bottom: '10%', left: '10%', color: 'blue' },
            ].map((tag, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                className={`absolute px-3 py-1.5 rounded-lg border font-orbitron text-xs font-bold ${
                  tag.color === 'yellow'
                    ? 'border-yellow-400/50 bg-yellow-400/10 text-yellow-400'
                    : 'border-blue-400/50 bg-blue-400/10 text-blue-400'
                }`}
                style={{ top: tag.top, right: tag.right, bottom: tag.bottom, left: tag.left }}
              >
                {tag.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors z-10"
      >
        <span className="font-rajdhani text-xs tracking-widest">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
