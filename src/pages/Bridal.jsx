import React from 'react';
import { motion } from 'framer-motion';

const Bridal = () => {
  return (
    <div className="w-full bg-midnight text-champagne pt-32 min-h-screen">
      <section className="px-8 md:px-16 lg:px-24 py-16 text-center max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gold font-sans uppercase tracking-[0.4em] text-[10px] mb-6 bg-white/5 inline-block px-6 py-2 rounded-full border border-white/10 backdrop-blur-md"
        >
          For Eternity
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-[clamp(3.5rem,6vw,6rem)] leading-none italic"
        >
          The Bridal Edit.
        </motion.h1>
      </section>

      <section className="px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="ios-card p-4 group hover-target">
            <div className="h-[70vh] rounded-[24px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent opacity-80 z-10 pointer-events-none" />
              <img src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute bottom-8 left-8 z-20 bg-[#141a23]/80 backdrop-blur-xl p-6 rounded-[24px] border border-white/10">
                <h2 className="font-serif text-3xl text-champagne mb-2">Heritage Kundan</h2>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-500">
                  View Collection &rarr;
                </p>
              </div>
            </div>
          </div>

          <div className="ios-card p-4 group hover-target">
            <div className="h-[70vh] rounded-[24px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent opacity-80 z-10 pointer-events-none" />
              <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute bottom-8 left-8 z-20 bg-[#141a23]/80 backdrop-blur-xl p-6 rounded-[24px] border border-white/10">
                <h2 className="font-serif text-3xl text-champagne mb-2">Temple Gold</h2>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-500">
                  View Collection &rarr;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Bridal;
