import React from 'react';
import { motion } from 'framer-motion';

const HighJewelry = () => {
  return (
    <div className="w-full bg-midnight text-champagne pt-32 min-h-screen">
      <section className="h-[60vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 mx-4 md:mx-12 my-4 ios-card overflow-hidden">
          <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 bg-[#141a23]/60 backdrop-blur-md p-12 rounded-[40px] border border-white/10 shadow-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gold font-sans uppercase tracking-[0.5em] text-[10px] mb-6 inline-block bg-white/5 px-6 py-2 rounded-full border border-white/10"
          >
            Exclusive
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[clamp(3.5rem,7vw,8rem)] leading-none italic"
          >
            High Jewelry.
          </motion.h1>
        </div>
      </section>

      <section className="px-4 md:px-12 py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center gap-12 group hover-target ios-card p-6"
          >
            <div className="w-full md:w-1/2 h-[60vh] rounded-[24px] overflow-hidden relative">
               <div className="absolute inset-0 bg-midnight/30 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
               <img src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
            </div>
            <div className="w-full md:w-1/2 md:px-8 py-8">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">The Imperial Solitaire</h2>
              <p className="font-sans font-light text-sm text-white/50 leading-relaxed max-w-md mb-8">
                A masterpiece of symmetry and brilliance. The Imperial Solitaire represents the pinnacle of our diamond collection, featuring a flawless 5-carat center stone surrounded by a halo of pavé diamonds set in platinum.
              </p>
              <a href="#inquire" className="btn-outline">Inquire Now</a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default HighJewelry;
