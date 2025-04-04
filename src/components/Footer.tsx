
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Zap, Mail, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-festival-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-festival-purple/20 rounded-full filter blur-3xl animate-float opacity-30"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-festival-blue/20 rounded-full filter blur-3xl animate-float-reverse opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and about */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Zap size={24} className="text-festival-purple" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-festival-purple via-festival-blue to-festival-pink">
                FestiFlow
              </span>
            </Link>
            <p className="text-gray-400">
              The premier destination for festival and event poster designs, showcasing the most creative promotional artwork from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-festival-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-festival-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-festival-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-festival-purple transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/posters" className="text-gray-400 hover:text-festival-purple transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Browse Posters</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-festival-purple transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Upcoming Events</span>
                </Link>
              </li>
              <li>
                <Link to="/artists" className="text-gray-400 hover:text-festival-purple transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Featured Artists</span>
                </Link>
              </li>
              <li>
                <Link to="/submissions" className="text-gray-400 hover:text-festival-purple transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Submit Your Work</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>hello@festiflow.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest events and poster releases.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-muted/50 border-muted hover:border-festival-purple transition-colors"
              />
              <Button className="bg-gradient-to-r from-festival-purple to-festival-pink hover:opacity-90 transition-opacity">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} FestiFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
