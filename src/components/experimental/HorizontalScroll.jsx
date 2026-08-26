import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { collections } from '../../data/mockData';

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section className="bg-midnight">
      
      {/* Desktop Version (Scroll-jacked) */}
      <div ref={targetRef} className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          <div className="px-8 md:px-16 lg:px-24 mb-12">
            <p className="text-gold font-sans tracking-[0.3em] uppercase text-[10px] mb-4 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">Curated</p>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-champagne leading-none">
              The Collections.
            </h2>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-8 md:px-16 lg:px-24 pb-24 items-center">
            {collections.map((item, idx) => (
              <div 
                key={item.id} 
                className="relative w-[35vw] h-[55vh] flex-shrink-0 group cursor-none"
              >
                <div className="w-full h-full overflow-hidden ios-card relative">
                  <motion.img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <div className="bg-midnight/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-gold font-sans uppercase tracking-[0.2em] text-[10px] mb-2">
                        No. 0{idx + 1}
                      </p>
                      <h3 className="font-serif text-3xl md:text-4xl text-champagne">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Version (Native horizontal scroll) */}
      <div className="block md:hidden py-24">
        <div className="px-6 mb-8">
          <p className="text-gold font-sans tracking-[0.3em] uppercase text-[10px] mb-4 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">Curated</p>
          <h2 className="font-serif text-4xl text-champagne leading-none">
            The Collections.
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 gap-4 pb-8">
          {collections.map((item, idx) => (
            <div 
              key={item.id} 
              className="relative w-[85vw] h-[60vh] flex-shrink-0 snap-center ios-card p-2"
            >
              <div className="w-full h-full overflow-hidden rounded-[24px] relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent flex flex-col justify-end p-6">
                  <div className="bg-[#141a23]/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-6">
                    <p className="text-gold font-sans uppercase tracking-[0.2em] text-[10px] mb-2">
                      No. 0{idx + 1}
                    </p>
                    <h3 className="font-serif text-3xl text-champagne">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
