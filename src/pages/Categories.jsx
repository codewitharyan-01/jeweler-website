import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import Reveal from '../components/Reveal';
import { products, categories } from '../data/mockData';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <Reveal>
          <h1 className="text-4xl font-serif text-espresso text-center mb-10">Product Categories</h1>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full font-serif text-sm transition-colors duration-300 ${activeCategory === 'all' ? 'bg-espresso text-ivory' : 'bg-white text-espresso border border-gray-200 hover:border-espresso'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-serif text-sm transition-colors duration-300 ${activeCategory === cat.id ? 'bg-espresso text-ivory' : 'bg-white text-espresso border border-gray-200 hover:border-espresso'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer bg-white p-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="overflow-hidden relative h-64 mb-4">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-lg font-serif text-espresso truncate">{product.name}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{product.material}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-ivory w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-espresso hover:text-gold z-10"
              >
                <HiX size={28} />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-serif text-espresso mb-2">{selectedProduct.name}</h2>
                <p className="text-gold font-light uppercase tracking-widest text-sm mb-8">{selectedProduct.collection} Collection</p>
                
                <div className="space-y-4 text-gray-700 font-light text-sm">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Material</span>
                    <span className="font-medium">{selectedProduct.material}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Approx Weight</span>
                    <span className="font-medium">{selectedProduct.weight}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Category</span>
                    <span className="font-medium capitalize">{selectedProduct.category}</span>
                  </div>
                </div>
                
                <p className="mt-8 text-gray-500 text-xs italic">
                  * Note: Actual weight and design may slightly vary. Visit our store to view the exact piece.
                </p>
                
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="btn-outline mt-8 self-start"
                >
                  Close Detail
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Categories;
