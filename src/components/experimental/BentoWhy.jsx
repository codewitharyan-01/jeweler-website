import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaHandHoldingHeart, FaCrown, FaCheckCircle } from 'react-icons/fa';

const BentoWhy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
  };

  return (
    <section className="py-16 md:py-32 bg-midnight text-champagne px-4 md:px-12 lg:px-24">
      <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
        <p className="text-gold font-sans uppercase tracking-[0.3em] text-[10px] mb-4 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">Excellence</p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-4xl md:text-[clamp(3rem,6vw,5rem)] text-champagne leading-none"
        >
          A Legacy of <br/><span className="italic text-white/50">Trust.</span>
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 max-w-6xl mx-auto"
      >
        {/* Large Tile */}
        <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 ios-card p-12 flex flex-col justify-end min-h-[400px] relative overflow-hidden group hover-target">
          <div className="absolute top-8 right-8 w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-gold border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <FaCertificate size={28} />
          </div>
          <h3 className="font-serif text-4xl md:text-5xl mb-6 z-10 text-champagne group-hover:text-gold transition-colors duration-500">100% Hallmarked</h3>
          <p className="font-sans font-light text-xs text-white/50 z-10 leading-relaxed max-w-sm tracking-wide">
            Every piece of gold is BIS hallmarked, and all diamonds are certified. We guarantee absolute transparency in every transaction.
          </p>
        </motion.div>

        {/* Medium Tile 1 */}
        <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 ios-card p-8 flex flex-col justify-center items-center text-center group hover-target">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-gold border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
            <FaHandHoldingHeart size={28} />
          </div>
          <h3 className="font-serif text-2xl mb-2 text-champagne">Handcrafted</h3>
          <p className="font-sans font-light text-[10px] uppercase tracking-widest text-white/50">Artisan expertise</p>
        </motion.div>

        {/* Medium Tile 2 */}
        <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 ios-card relative overflow-hidden group hover-target p-2">
          <div className="w-full h-full relative overflow-hidden rounded-[24px]">
            <div className="absolute inset-0 bg-midnight/30 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
            <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=400" alt="Craft" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
          </div>
        </motion.div>

        {/* Wide Tile */}
        <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1 ios-card p-8 flex items-center gap-8 group hover-target">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-gold border border-white/10 shrink-0 group-hover:scale-110 transition-transform duration-500">
            <FaCrown size={28} />
          </div>
          <div>
            <h3 className="font-serif text-3xl mb-2 text-champagne">Heritage</h3>
            <p className="font-sans font-light text-xs tracking-wide text-white/50">Serving generations of families with devotion since 1985.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BentoWhy;
