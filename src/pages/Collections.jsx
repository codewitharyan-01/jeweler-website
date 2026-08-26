import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/mockData';

const Collections = () => {
  return (
    <div className="w-full bg-midnight text-champagne pt-32 min-h-screen">
      {/* Header */}
      <section className="px-8 md:px-16 lg:px-24 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gold font-sans uppercase tracking-[0.4em] text-[10px] mb-6 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
        >
          All Masterpieces
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between items-end">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[clamp(3rem,5vw,5rem)] leading-none"
          >
            Collections.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-4 mt-8 md:mt-0 font-sans text-[10px] uppercase tracking-widest text-white/50"
          >
            <button className="hover:text-gold transition-colors text-gold bg-white/5 px-4 py-2 rounded-full border border-gold">All</button>
            <button className="hover:text-gold transition-colors bg-white/5 px-4 py-2 rounded-full border border-transparent hover:border-white/10">Gold</button>
            <button className="hover:text-gold transition-colors bg-white/5 px-4 py-2 rounded-full border border-transparent hover:border-white/10">Diamond</button>
            <button className="hover:text-gold transition-colors bg-white/5 px-4 py-2 rounded-full border border-transparent hover:border-white/10">Polki</button>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.2 }}
              key={item.id}
              className="group cursor-none hover-target ios-card p-4"
            >
              <div className="w-full h-[50vh] overflow-hidden rounded-[24px] relative mb-6">
                <div className="absolute inset-0 bg-midnight/30 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                />
              </div>
              <div className="px-2">
                <h3 className="font-serif text-2xl mb-2 text-champagne">{item.name}</h3>
                <div className="flex justify-between items-center font-sans text-[10px] uppercase tracking-widest text-white/50">
                  <p>{item.material}</p>
                  <p>{item.weight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
