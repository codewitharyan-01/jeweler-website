import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    title: "Design",
    desc: "Every masterpiece begins as a thought, sketched intricately onto paper by our visionary designers.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Handcrafting",
    desc: "Generations-old techniques are employed. Gold is melted, shaped, and coaxed into forms.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hallmarking",
    desc: "Precious stones are meticulously set, and the final piece undergoes rigorous purity tests.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800"
  }
];

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-midnight text-champagne relative px-4 md:px-0">
      
      <div className="text-center md:mb-24 mb-16 max-w-3xl mx-auto">
        <p className="text-gold font-sans uppercase tracking-[0.3em] text-[10px] mb-4 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">Craftsmanship</p>
        <h2 className="font-serif text-[clamp(3rem,6vw,5rem)] text-champagne italic">The Process.</h2>
      </div>

      <div className="max-w-5xl mx-auto relative px-4 md:px-0">
        {/* The Progress Line (Left on mobile, center on desktop) */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[4px] bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
          <motion.div style={{ height: lineHeight }} className="w-full bg-gold origin-top" />
        </div>

        {steps.map((step, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 pl-8 md:pl-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className="absolute left-[17px] md:left-[calc(50%-7px)] top-[10%] md:top-auto w-4 h-4 bg-[#141a23] border-[3px] border-gold rounded-full z-10 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />

              {/* Content Box */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`w-full md:w-[45%] group cursor-none hover-target`}
              >
                <div className="ios-card p-2 md:p-4 mb-6">
                  <div className="relative overflow-hidden rounded-[24px]">
                    <div className="absolute inset-0 bg-midnight/30 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
                    <img src={step.image} alt={step.title} className="w-full h-48 md:h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                  </div>
                </div>
                <div className={`px-2 md:px-4 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-gold font-sans uppercase tracking-[0.3em] text-[10px] mb-2 block">Phase 0{idx + 1}</span>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2 text-champagne">{step.title}</h3>
                  <p className="font-sans font-light text-xs text-white/50 leading-relaxed max-w-sm inline-block">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
              
              <div className="hidden md:block w-[45%]" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
