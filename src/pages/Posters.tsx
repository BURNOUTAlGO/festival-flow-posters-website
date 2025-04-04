
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
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />
      <ThemeSwitcher />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--festival-purple)] via-[var(--festival-blue)] to-[var(--festival-pink)]">
            Festival Posters Gallery
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-16">
            Browse our collection of stunning festival and event posters from around the world, showcasing exceptional design and creativity.
          </p>
          
          <PosterGallery />
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Posters;
