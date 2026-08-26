import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-midnight text-champagne pt-32 pb-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/5 pb-16 mb-12">
        
        {/* Brand */}
        <div className="space-y-8 md:col-span-1">
          <h2 className="text-2xl font-serif tracking-[0.3em] text-gold hover-target">MAN MANDIR</h2>
          <p className="text-[10px] uppercase tracking-widest font-light leading-relaxed text-white/50">
            Crafting legacy through exquisite jewelry since 1985.
          </p>
          <div className="flex space-x-6 pt-4">
            <a href="https://www.instagram.com/1.aryaan/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors hover-target"><FaInstagram size={16} /></a>
            <a href="https://wa.me/919023668571" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors hover-target"><FaWhatsapp size={16} /></a>
            <a href="https://github.com/codewitharyan-01" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors hover-target"><FaGithub size={16} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors hover-target"><FaLinkedin size={16} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Navigation</h3>
          <ul className="space-y-4 text-sm font-serif font-light text-champagne/80">
            <li><Link to="/about" className="hover:text-gold transition-colors hover-target italic">The Maison</Link></li>
            <li><Link to="/collections" className="hover:text-gold transition-colors hover-target italic">Collections</Link></li>
            <li><Link to="/high-jewelry" className="hover:text-gold transition-colors hover-target italic">High Jewelry</Link></li>
            <li><Link to="/bridal" className="hover:text-gold transition-colors hover-target italic">Bridal</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Boutique</h3>
          <address className="not-italic text-[10px] uppercase tracking-widest font-light space-y-4 text-white/50">
            <p>123 Luxury Avenue,<br />Heritage District,<br />Mumbai, MH 400001</p>
            <p className="pt-4">
              <a href="tel:+919023668571" className="hover:text-gold transition-colors hover-target">
                +91 90236 68571
              </a>
            </p>
            <p>
              <a href="mailto:happier.aryan@gmail.com" className="hover:text-gold transition-colors hover-target">
                happier.aryan@gmail.com
              </a>
            </p>
            <p>Mon - Sat, 11 AM - 8 PM</p>
          </address>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-light text-white/30">
        <p>&copy; {new Date().getFullYear()} MAN MANDIR JEWELLERS.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 items-center">
          <span className="text-white/20">|</span>
          <span>Developed by <a href="https://codewitharyan-01.github.io/Aryaan.Portfolio/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors hover-target">Aryan Patel</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
