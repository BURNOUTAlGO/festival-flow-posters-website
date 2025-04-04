
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Zap size={30} className="text-festival-purple animate-pulse-glow" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-festival-purple via-festival-blue to-festival-pink">
              FestiFlow
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover-lift font-medium">Home</Link>
          <Link to="/posters" className="text-white hover-lift font-medium">Posters</Link>
          <Link to="/events" className="text-white hover-lift font-medium">Events</Link>
          <Link to="/artists" className="text-white hover-lift font-medium">Artists</Link>
          <Link to="/contact" className="text-white hover-lift font-medium">Contact</Link>
        </div>

        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-festival-purple to-festival-pink hover:opacity-90 transition-opacity">
            Submit Poster
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg animate-slide-up">
          <div className="container mx-auto px-4 py-5 flex flex-col gap-5">
            <Link to="/" className="text-white font-medium py-2 hover:text-festival-purple transition-colors">Home</Link>
            <Link to="/posters" className="text-white font-medium py-2 hover:text-festival-purple transition-colors">Posters</Link>
            <Link to="/events" className="text-white font-medium py-2 hover:text-festival-purple transition-colors">Events</Link>
            <Link to="/artists" className="text-white font-medium py-2 hover:text-festival-purple transition-colors">Artists</Link>
            <Link to="/contact" className="text-white font-medium py-2 hover:text-festival-purple transition-colors">Contact</Link>
            <Button className="bg-gradient-to-r from-festival-purple to-festival-pink hover:opacity-90 transition-opacity w-full">
              Submit Poster
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
