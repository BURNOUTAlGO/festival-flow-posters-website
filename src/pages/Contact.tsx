
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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
            Contact Us
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-16">
            Have questions or feedback? We'd love to hear from you! Reach out to our team using the form below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
              
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-muted/50 border-muted"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="bg-muted/50 border-muted h-40"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-festival-purple to-festival-pink hover:opacity-90 transition-opacity">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-festival-purple/20 p-3 rounded-full">
                    <Mail className="text-festival-purple" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">hello@festiflow.com</p>
                    <p className="text-gray-400">support@festiflow.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-festival-blue/20 p-3 rounded-full">
                    <MapPin className="text-festival-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Address</h3>
                    <p className="text-gray-400">123 Festival Avenue</p>
                    <p className="text-gray-400">Design District, Creative City, 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-festival-pink/20 p-3 rounded-full">
                    <Phone className="text-festival-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Contact;
