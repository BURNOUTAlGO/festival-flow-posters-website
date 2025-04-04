
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-lg shadow-lg py-3 border-b border-white/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div 
            onClick={() => handleNavigation('/')} 
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5
              }}
            >
              <Zap size={30} className="text-[var(--festival-purple)] drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]" />
            </motion.div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--festival-purple)] via-[var(--festival-blue)] to-[var(--festival-pink)]">
              FestiFlow
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation with dropdown */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => handleNavigation('/')}
                  className="group inline-flex items-center text-white hover:text-[var(--festival-purple)] transition-colors ease-out font-medium cursor-pointer"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:bg-[var(--festival-purple)] after:h-[2px] after:w-0 group-hover:after:w-full after:transition-all after:duration-300">Home</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[var(--festival-purple)] hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[var(--festival-purple)]">
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[var(--festival-purple)/20] to-[var(--festival-pink)/20] p-6 no-underline outline-none focus:shadow-md hover:bg-[var(--festival-purple)/30] transition-colors duration-300"
                          onClick={() => handleNavigation('/events')}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            All Events
                          </div>
                          <p className="text-sm leading-tight text-white/70">
                            Browse all upcoming festivals and tech conferences.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem 
                      onClick={() => handleNavigation('/events?category=festival')} 
                      title="Festival Events"
                      icon="🪔"
                    >
                      Vibrant cultural celebrations across India
                    </ListItem>
                    <ListItem 
                      onClick={() => handleNavigation('/events?category=tech')} 
                      title="Tech Events"
                      icon="💻"
                    >
                      Innovation showcases and technology conferences
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => handleNavigation('/posters')}
                  className="group inline-flex items-center text-white hover:text-[var(--festival-purple)] transition-colors ease-out font-medium cursor-pointer"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:bg-[var(--festival-purple)] after:h-[2px] after:w-0 group-hover:after:w-full after:transition-all after:duration-300">Posters</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => handleNavigation('/artists')}
                  className="group inline-flex items-center text-white hover:text-[var(--festival-purple)] transition-colors ease-out font-medium cursor-pointer"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:bg-[var(--festival-purple)] after:h-[2px] after:w-0 group-hover:after:w-full after:transition-all after:duration-300">Artists</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => handleNavigation('/contact')}
                  className="group inline-flex items-center text-white hover:text-[var(--festival-purple)] transition-colors ease-out font-medium cursor-pointer"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:bg-[var(--festival-purple)] after:h-[2px] after:w-0 group-hover:after:w-full after:transition-all after:duration-300">Contact</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Button 
            onClick={() => handleNavigation('/submissions')}
            className="bg-gradient-to-r from-[var(--festival-purple)] to-[var(--festival-pink)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Submit Poster
          </Button>
        </div>

        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-5">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => handleNavigation('/')} 
                className="text-white font-medium py-2 hover:text-[var(--festival-purple)] transition-colors cursor-pointer"
              >
                Home
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => handleNavigation('/events')} 
                className="text-white font-medium py-2 hover:text-[var(--festival-purple)] transition-colors cursor-pointer"
              >
                Events
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleNavigation('/posters')} 
                className="text-white font-medium py-2 hover:text-[var(--festival-purple)] transition-colors cursor-pointer"
              >
                Posters
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavigation('/artists')} 
                className="text-white font-medium py-2 hover:text-[var(--festival-purple)] transition-colors cursor-pointer"
              >
                Artists
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => handleNavigation('/contact')} 
                className="text-white font-medium py-2 hover:text-[var(--festival-purple)] transition-colors cursor-pointer"
              >
                Contact
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-2"
              >
                <Button 
                  onClick={() => handleNavigation('/submissions')}
                  className="bg-gradient-to-r from-[var(--festival-purple)] to-[var(--festival-pink)] hover:opacity-90 transition-opacity w-full"
                >
                  Submit Poster
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon?: string; }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon && <span>{icon}</span>}
            <span>{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
