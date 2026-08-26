import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../../data/mockData';

const CategoryExplorer = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="min-h-screen bg-midnight text-champagne py-32 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row gap-16 max-w-7xl mx-auto">
      
      {/* Left List */}
      <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10 ios-card p-12">
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

      {/* Right Preview */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-[70vh] sticky top-[15vh] overflow-hidden relative ios-card group cursor-none">
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
        
        {/* Detail Overlay Curved */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent flex flex-col justify-end p-8">
          <div className="bg-[#141a23]/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-gold font-sans uppercase tracking-[0.3em] text-[10px] mb-2">Explore</p>
            <h3 className="text-champagne font-serif text-3xl">{activeCategory.name} Collection</h3>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default CategoryExplorer;
