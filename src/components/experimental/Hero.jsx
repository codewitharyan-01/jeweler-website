import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full flex flex-col justify-center bg-midnight pt-24 pb-12 px-4 md:px-8">
      
      {/* Background iOS Float */}
      <motion.div style={{ y: y1, opacity }} className="w-full h-full max-w-7xl mx-auto relative rounded-[40px] overflow-hidden glass-card">
        <motion.div style={{ scale }} className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/20 to-midnight/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Indian Jewelry" 
            className="w-full h-[70vh] md:h-[80vh] object-cover object-center"
          />
        </motion.div>

        {/* Foreground Content inside the curved card */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-midnight/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-8"
          >
            <p className="text-gold font-sans tracking-[0.4em] uppercase text-[10px] md:text-xs">
              High Jewelry Collection
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] text-champagne mb-8 drop-shadow-xl"
          >
            ETERNAL <br className="hidden md:block" /> BRILLIANCE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a href="#collections" className="btn-outline">Discover Masterpieces</a>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
