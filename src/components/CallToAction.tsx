
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-festival-purple/20 to-festival-blue/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10 relative overflow-hidden">
          {/* Animated orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-festival-purple/30 rounded-full filter blur-3xl animate-pulse-glow"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-festival-blue/30 rounded-full filter blur-3xl animate-pulse-glow"></div>
          
          <div className="relative text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Share Your Creative Poster Designs
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join our community of artists and showcase your festival poster designs to a global audience of event organizers and art lovers.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button className="bg-gradient-to-r from-festival-purple to-festival-pink hover:opacity-90 transition-opacity px-8 py-6 text-white text-lg">
                <Upload className="mr-2" />
                Submit Your Poster
              </Button>
              
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg">
                Learn More
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
