import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../../data/mockData';

const CategoryExplorer = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="min-h-screen bg-midnight text-champagne py-24 md:py-32 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row gap-8 md:gap-16 max-w-7xl mx-auto">
      
      {/* Desktop Left List */}
      <div className="hidden md:flex w-full md:w-1/2 flex-col justify-center relative z-10 ios-card p-12">
        <p className="text-gold font-sans uppercase tracking-[0.3em] text-[10px] mb-12 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10 w-max">The Archives</p>
        <ul className="space-y-6">
          {categories.map((cat) => (
            <li 
              key={cat.id}
              className="relative group w-max"
              onMouseEnter={() => setActiveCategory(cat)}
            >
              <div className="overflow-hidden">
                <motion.span 
                  className={`block font-serif text-4xl md:text-6xl transition-colors duration-700 hover-target cursor-none ${
                    activeCategory.id === cat.id ? 'text-champagne italic' : 'text-white/20'
                  }`}
                >
                  {cat.name}
                </motion.span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Right Preview */}
      <div className="hidden md:block w-full md:w-1/2 h-[60vh] md:h-[70vh] sticky top-[15vh] overflow-hidden relative ios-card group cursor-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeCategory.id}
            src={activeCategory.image}
            alt={activeCategory.name}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent flex flex-col justify-end p-8">
          <div className="bg-[#141a23]/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-gold font-sans uppercase tracking-[0.3em] text-[10px] mb-2">Explore</p>
            <h3 className="text-champagne font-serif text-3xl">{activeCategory.name} Collection</h3>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Version */}
      <div className="block md:hidden w-full">
        <div className="mb-8">
          <p className="text-gold font-sans uppercase tracking-[0.3em] text-[10px] mb-4 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10">The Archives</p>
          <h2 className="font-serif text-4xl text-champagne leading-none">Categories.</h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="ios-card p-2 relative h-[30vh] overflow-hidden group">
              <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-champagne font-serif text-2xl italic">{cat.name}</h3>
                  <p className="text-gold font-sans uppercase tracking-[0.2em] text-[10px] mt-1">View Collection &rarr;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default CategoryExplorer;
