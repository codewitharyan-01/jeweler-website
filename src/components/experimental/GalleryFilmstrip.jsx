import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800",
];

const GalleryFilmstrip = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="py-24 bg-midnight text-champagne overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24 mb-16 text-center">
        <p className="text-gold font-sans uppercase tracking-[0.3em] text-[10px] mb-4 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">Visuals</p>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] italic">The Archive.</h2>
      </div>

      <motion.div ref={carousel} className="cursor-grab overflow-hidden active:cursor-grabbing px-8 md:px-16 lg:px-24">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-8"
        >
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx} 
              className="min-w-[75vw] md:min-w-[40vw] lg:min-w-[30vw] h-[50vh] md:h-[60vh] relative group p-2 ios-card"
            >
              <div className="w-full h-full overflow-hidden rounded-[24px] relative">
                <div className="absolute inset-0 bg-midnight/30 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover pointer-events-none opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GalleryFilmstrip;
