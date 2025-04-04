
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PosterGallery from '@/components/PosterGallery';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Posters = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-background text-foreground relative"
    >
      <Navbar />
      <ThemeSwitcher />
      
      <main className="pt-32 pb-20 relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-40 left-1/4 w-72 h-72 bg-[var(--festival-purple)]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[var(--festival-blue)]/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--festival-purple)] via-[var(--festival-blue)] to-[var(--festival-pink)]">
            Festival Posters Gallery
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-16">
            Browse our collection of stunning Indian festival and tech event posters, showcasing exceptional design and creativity.
          </p>
          
          <PosterGallery />
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Posters;
