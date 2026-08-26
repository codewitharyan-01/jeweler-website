import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/experimental/Timeline';
import BentoWhy from '../components/experimental/BentoWhy';

const About = () => {
  return (
    <div className="w-full bg-midnight text-champagne pt-32">
      {/* Header */}
      <section className="px-8 md:px-16 lg:px-24 py-24 text-center border-b border-white/5">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gold font-sans uppercase tracking-[0.4em] text-[10px] mb-8"
        >
          Our Heritage
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-[clamp(3.5rem,7vw,8rem)] leading-none italic mb-12"
        >
          The Maison.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans font-light text-sm md:text-base text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          Since 1985, Man Mandir has stood as a beacon of unparalleled craftsmanship and devotion. Our artisans weave stories into gold, creating timeless heirlooms that transcend generations.
        </motion.p>
      </section>

      {/* Craftsmanship Timeline */}
      <Timeline />

      {/* Bento Trust Grid */}
      <BentoWhy />
    </div>
  );
};

export default About;
