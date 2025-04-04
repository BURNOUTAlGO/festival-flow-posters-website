
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileCheck, FileWarning, Info } from 'lucide-react';

const Submissions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-festival-purple via-festival-blue to-festival-pink">
            Submit Your Poster
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-16">
            Share your festival or event poster design with our community and get recognized for your creative work.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold mb-6 text-white">Poster Submission Form</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-muted/50 border-muted"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="bg-muted/50 border-muted"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="event" className="block text-sm font-medium text-gray-300 mb-2">
                    Event Name
                  </label>
                  <Input
                    id="event"
                    placeholder="e.g., ElectroFlow Festival 2023"
                    className="bg-muted/50 border-muted"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                    Poster Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your design concept, inspiration, and the event it was created for..."
                    className="bg-muted/50 border-muted h-32"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Poster Image
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-festival-purple transition-colors">
                    <Upload className="mx-auto text-gray-400 mb-4" size={40} />
                    <p className="text-gray-400 mb-2">Drag and drop your poster file here, or click to browse</p>
                    <p className="text-gray-500 text-sm">Supported formats: JPG, PNG, PDF (Max 10MB)</p>
                    <input type="file" className="hidden" id="poster-upload" />
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('poster-upload')?.click();
                      }}
                      variant="outline" 
                      className="mt-4 border-gray-600"
                    >
                      Select File
                    </Button>
                  </div>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-lg flex items-start gap-3 text-sm">
                  <Info className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-gray-300 mb-1">Submission Guidelines:</p>
                    <ul className="text-gray-400 list-disc list-inside space-y-1">
                      <li>Ensure your submission is your original work</li>
                      <li>High-resolution images are preferred (300 DPI minimum)</li>
                      <li>Include accurate event details in your description</li>
                      <li>Allow up to 48 hours for review and approval</li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-festival-purple to-festival-pink hover:opacity-90 transition-opacity">
                  Submit Poster
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Submissions;
