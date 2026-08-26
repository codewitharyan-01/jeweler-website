import React from 'react';
import Hero from '../components/experimental/Hero';
import HorizontalScroll from '../components/experimental/HorizontalScroll';
import AsymmetricGrid from '../components/experimental/AsymmetricGrid';
import CategoryExplorer from '../components/experimental/CategoryExplorer';
import Contact from '../components/experimental/Contact';

const Home = () => {
  return (
    <div className="w-full bg-midnight text-champagne">
      {/* 1. Hero with Kinetic Text & Ken Burns Image */}
      <Hero />
      
      {/* 2. Pinned Horizontal Scroll collections filmstrip */}
      <HorizontalScroll />
      
      {/* 3. Asymmetric Masonry Grid for Featured Collections */}
      <AsymmetricGrid />
      
      {/* Parallax Banner separator */}
      <section className="relative h-[60vh] bg-midnight overflow-hidden flex items-center justify-center border-y border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20 fixed attachment grayscale" />
        </div>
        <h2 className="relative z-10 font-serif text-[clamp(2.5rem,5vw,5rem)] text-champagne text-center max-w-5xl px-8 leading-tight">
          "Elegance is not about being noticed, <br/><span className="text-gold italic">it's about being remembered.</span>"
        </h2>
      </section>

      {/* 4. Hover-to-preview Category Explorer */}
      <CategoryExplorer />
      
      {/* 5. Split layout Contact Form */}
      <Contact />
    </div>
  );
};

export default Home;
