import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="min-h-screen bg-midnight text-champagne flex flex-col items-center justify-center py-24 px-4 md:px-8">
      
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Left side: Minimal Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full ios-card p-12 md:p-16"
          >
            <h2 className="font-serif text-4xl mb-4 text-champagne">Connect.</h2>
            <p className="font-sans font-light text-[10px] text-white/50 mb-12 uppercase tracking-[0.3em] bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">Book a Private Viewing</p>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-gold transition-colors font-sans font-light text-sm text-champagne placeholder-white/30" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-gold transition-colors font-sans font-light text-sm text-champagne placeholder-white/30" />
              </div>
              <div>
                <textarea placeholder="Message" rows="3" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-gold transition-colors font-sans font-light text-sm text-champagne placeholder-white/30 resize-none"></textarea>
              </div>
              <button type="submit" className="w-full border border-gold text-gold py-4 rounded-full uppercase tracking-[0.3em] text-[10px] font-sans hover:bg-gold hover:text-midnight transition-colors duration-500 hover-target mt-4 shadow-[0_4px_20px_rgba(212,175,55,0.1)]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Right side: Curved Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto p-4 group cursor-none hover-target">
          <div className="w-full h-full ios-card p-2 relative overflow-hidden">
            <div className="w-full h-full rounded-[24px] overflow-hidden relative">
              <div className="absolute inset-0 bg-midnight/30 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                alt="Contact"
              />
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-6 right-6 bg-[#141a23]/80 backdrop-blur-xl border border-white/10 p-6 rounded-[24px] hidden md:block z-20"
              >
                <h3 className="font-serif text-3xl text-gold mb-6 italic">Man Mandir</h3>
                <p className="font-sans font-light text-[10px] uppercase tracking-widest text-white/50 leading-relaxed mb-6">
                  123 Luxury Avenue,<br/>
                  Heritage District,<br/>
                  Mumbai, MH 400001
                </p>
                <p className="font-sans font-light text-[10px] uppercase tracking-widest text-white/50">
                  <a href="tel:+919023668571" className="hover:text-gold block mb-2 hover-target transition-colors">+91 90236 68571</a>
                  <a href="mailto:happier.aryan@gmail.com" className="hover:text-gold block mb-2 hover-target transition-colors">happier.aryan@gmail.com</a>
                  Mon-Sat, 11 AM - 8 PM
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
