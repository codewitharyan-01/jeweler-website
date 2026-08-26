import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Bridal Set', img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Solitaires', img: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Temple Art', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Polki Necklaces', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800' },
];

const AsymmetricGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-midnight text-champagne px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 text-center md:text-left">
        <div>
          <p className="text-gold font-sans tracking-[0.3em] uppercase text-[10px] mb-4 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">Highlights</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none text-champagne">
            Signature Pieces.
          </h2>
        </div>
        <a href="/collections" className="btn-outline mt-6 md:mt-0">
          View Masterpieces
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large item taking up 7 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 relative group cursor-none hover-target h-[50vh] md:h-[70vh] ios-card overflow-hidden"
        >
          <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
          <img src={items[0].img} alt={items[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" />
          
          <div className="absolute bottom-6 right-6 bg-[#141a23]/80 backdrop-blur-xl p-6 rounded-[24px] z-20 border border-white/10">
            <h3 className="font-serif italic text-3xl md:text-4xl text-champagne">{items[0].title}</h3>
          </div>
        </motion.div>

        {/* Column of two smaller items taking up 5 cols */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group h-[24vh] md:h-[34vh] ios-card overflow-hidden cursor-none hover-target"
          >
            <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
            <img src={items[1].img} alt={items[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" />
            
            <div className="absolute top-6 left-6 bg-[#141a23]/80 backdrop-blur-xl p-4 rounded-[20px] z-20 border border-white/10">
              <h3 className="font-serif text-2xl text-champagne">{items[1].title}</h3>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group h-[24vh] md:h-[34vh] ios-card overflow-hidden cursor-none hover-target"
          >
            <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
            <img src={items[2].img} alt={items[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" />
            
            <div className="absolute bottom-6 left-6 bg-[#141a23]/80 backdrop-blur-xl p-4 rounded-[20px] z-20 border border-white/10">
              <h3 className="font-serif text-3xl text-champagne">{items[2].title}</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AsymmetricGrid;
