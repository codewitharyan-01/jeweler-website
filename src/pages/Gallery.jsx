import React from 'react';
import Reveal from '../components/Reveal';
import { motion } from 'framer-motion';

const galleryImages = [
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800",
];

const Gallery = () => {
  return (
    <div className="w-full pt-24 bg-ivory min-h-screen pb-20">
      <div className="container mx-auto px-6 py-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-serif text-espresso mb-6">Gallery</h1>
            <p className="text-gray-600 font-light text-lg">
              A glimpse into the artistry, our showrooms, and the moments we help make special.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-8"></div>
          </div>
        </Reveal>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="break-inside-avoid overflow-hidden group mb-6 relative">
                <img 
                  src={src} 
                  alt={`Gallery item ${index + 1}`} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-500"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
