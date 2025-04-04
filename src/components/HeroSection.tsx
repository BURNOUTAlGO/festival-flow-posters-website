
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Image, Users } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0');
        const xOffset = (x - 0.5) * speed * 50; // Adjust the multiplier for stronger/weaker effect
        const yOffset = (y - 0.5) * speed * 50;
        
        (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-festival-purple/20 rounded-full filter blur-3xl parallax-element" data-speed="-0.5"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-festival-blue/20 rounded-full filter blur-3xl parallax-element" data-speed="0.8"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-festival-pink/20 rounded-full filter blur-3xl parallax-element" data-speed="0.6"></div>
      </div>

      {/* Floating poster elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[10%] parallax-element" data-speed="0.3">
          <div className="w-40 h-56 bg-gradient-to-br from-festival-purple to-festival-blue rounded-lg shadow-lg rotate-6 animate-float opacity-80"></div>
        </div>
        <div className="absolute top-[50%] left-[8%] parallax-element" data-speed="-0.2">
          <div className="w-48 h-64 bg-gradient-to-tr from-festival-blue to-festival-pink rounded-lg shadow-lg -rotate-12 animate-float-reverse opacity-80"></div>
        </div>
        <div className="absolute bottom-[20%] right-[15%] parallax-element" data-speed="0.5">
          <div className="w-36 h-52 bg-gradient-to-br from-festival-pink to-festival-purple rounded-lg shadow-lg rotate-12 animate-float delay-200 opacity-80"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Amazing Event Posters
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the world's most creative festival and event posters in one vibrant, animated showcase.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="bg-gradient-to-r from-festival-purple to-festival-blue hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg">
              Explore Posters
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg">
              Submit Your Work
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-festival-purple/20 flex items-center justify-center mb-3 animate-pulse-glow">
                <Image className="w-8 h-8 text-festival-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white">5,000+</h3>
              <p className="text-gray-400">Poster Designs</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-festival-blue/20 flex items-center justify-center mb-3 animate-pulse-glow">
                <CalendarDays className="w-8 h-8 text-festival-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white">1,200+</h3>
              <p className="text-gray-400">Events Featured</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-festival-pink/20 flex items-center justify-center mb-3 animate-pulse-glow">
                <Users className="w-8 h-8 text-festival-pink" />
              </div>
              <h3 className="text-2xl font-bold text-white">800+</h3>
              <p className="text-gray-400">Artists Showcased</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
