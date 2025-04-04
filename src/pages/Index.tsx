
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PosterGallery from '@/components/PosterGallery';
import FeaturedEvents from '@/components/FeaturedEvents';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animations when component mounts
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="min-h-screen bg-background text-foreground overflow-hidden"
    >
      <Navbar />
      
      <main>
        <HeroSection />
        <PosterGallery />
        <FeaturedEvents />
        <CallToAction />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
