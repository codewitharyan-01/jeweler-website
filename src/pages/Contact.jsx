import React from 'react';
import Reveal from '../components/Reveal';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-serif text-espresso mb-6">Contact Us</h1>
            <p className="text-gray-600 font-light text-lg">
              We look forward to welcoming you at our showroom or assisting you with any inquiries.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-8"></div>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 space-y-12">
            <Reveal direction="right" delay={0.1}>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-espresso text-gold rounded-full flex items-center justify-center shrink-0 mr-6">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-espresso mb-2">Visit Our Showroom</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    123 Luxury Avenue,<br />
                    Heritage District,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-espresso text-gold rounded-full flex items-center justify-center shrink-0 mr-6">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-espresso mb-2">Call Us</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91 98765 43210</a><br/>
                    <a href="tel:+912224567890" className="hover:text-gold transition-colors">+91 22 2456 7890</a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-espresso text-gold rounded-full flex items-center justify-center shrink-0 mr-6">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-espresso mb-2">Email Us</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    <a href="mailto:info@manmandir.com" className="hover:text-gold transition-colors">info@manmandir.com</a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <Reveal direction="left" delay={0.2}>
              <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-serif text-espresso mb-8">Send an Inquiry</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-gray-700 mb-2">Email Address</label>
                      <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">Message / Inquiry Details</label>
                    <textarea rows="4" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors resize-none"></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full md:w-auto">Submit Inquiry</button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
