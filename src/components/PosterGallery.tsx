
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Heart, Info, MapPin } from 'lucide-react';

// Poster data interface
interface Poster {
  id: number;
  title: string;
  image: string;
  date: string;
  location: string;
  category: string;
  likes: number;
}

// Demo poster data with Indian festivals and tech events
const posters: Poster[] = [
  {
    id: 1,
    title: "Diwali Festival of Lights",
    image: "https://images.unsplash.com/photo-1605198988864-b47451cc95c2?w=800&auto=format&fit=crop",
    date: "October 15-17, 2025",
    location: "Mumbai, India",
    category: "Festival",
    likes: 348
  },
  {
    id: 2,
    title: "TechCon India 2025",
    image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=800&auto=format&fit=crop",
    date: "March 22-24, 2025",
    location: "Bangalore, India",
    category: "Tech",
    likes: 276
  },
  {
    id: 3,
    title: "Holi Color Festival",
    image: "https://images.unsplash.com/photo-1576398289164-c94debf99ecd?w=800&auto=format&fit=crop",
    date: "March 8-10, 2025",
    location: "Jaipur, India",
    category: "Festival",
    likes: 412
  },
  {
    id: 4,
    title: "Web Summit Delhi",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
    date: "August 19-21, 2025",
    location: "New Delhi, India",
    category: "Tech",
    likes: 249
  },
  {
    id: 5,
    title: "Navratri Dance Festival",
    image: "https://images.unsplash.com/photo-1660651868158-40880f594c0b?w=800&auto=format&fit=crop",
    date: "September 25-October 3, 2025",
    location: "Gujarat, India",
    category: "Festival",
    likes: 318
  },
  {
    id: 6,
    title: "Hackathon 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    date: "July 12-14, 2025",
    location: "Hyderabad, India",
    category: "Tech",
    likes: 185
  },
  {
    id: 7,
    title: "Ganesh Chaturthi",
    image: "https://images.unsplash.com/photo-1600181982031-7f8e8d1a8f67?w=800&auto=format&fit=crop",
    date: "September 2-11, 2025",
    location: "Pune, India",
    category: "Festival",
    likes: 275
  },
  {
    id: 8,
    title: "AI Conference India",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop",
    date: "April 5-7, 2025",
    location: "Chennai, India",
    category: "Tech",
    likes: 196
  },
  {
    id: 9,
    title: "Durga Puja Celebration",
    image: "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?w=800&auto=format&fit=crop",
    date: "October 7-15, 2025",
    location: "Kolkata, India",
    category: "Festival",
    likes: 327
  }
];

// Filter categories
const categories = ["All", "Festival", "Tech", "Music", "Art", "Dance"];

const PosterGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredPosters = selectedCategory === "All" 
    ? posters 
    : posters.filter(poster => poster.category === selectedCategory);

  return (
    <section className="py-24 relative overflow-hidden" id="gallery">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--festival-purple)]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--festival-blue)]/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--festival-purple)] to-[var(--festival-pink)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Posters
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Browse our curated collection of stunning Indian festival and tech event posters celebrating culture and innovation.
          </motion.p>
          
          {/* Filter Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-[var(--festival-purple)] hover:bg-[var(--festival-purple)]/90 text-white" 
                  : "border-white/20 hover:bg-white/10 text-white"
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
        
        {/* Posters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosters.map((poster) => (
              <motion.div
                key={poster.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="poster-card"
                onMouseEnter={() => setHoveredId(poster.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
                  <img 
                    src={poster.image} 
                    alt={poster.title} 
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  
                  {/* Category badge */}
                  <Badge className={`absolute top-4 left-4 ${
                    poster.category === 'Festival' 
                      ? 'bg-[var(--festival-pink)]/80 hover:bg-[var(--festival-pink)]' 
                      : 'bg-[var(--festival-blue)]/80 hover:bg-[var(--festival-blue)]'
                  } text-white`}>
                    {poster.category}
                  </Badge>
                  
                  {/* Info overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === poster.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{poster.title}</h3>
                    
                    <div className="flex items-center gap-2 text-white/90 mb-1">
                      <CalendarDays size={16} />
                      <span>{poster.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/90 mb-4">
                      <MapPin size={16} />
                      <span>{poster.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                        <Info size={16} className="mr-1" />
                        Details
                      </Button>
                      
                      <div className="flex items-center gap-1 text-white/90">
                        <Heart size={16} className="text-[var(--festival-pink)]" />
                        <span>{poster.likes}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-16">
          <Button className="bg-gradient-to-r from-[var(--festival-purple)] to-[var(--festival-blue)] hover:opacity-90 transition-opacity px-8 py-6 text-white text-lg font-display">
            View All Posters
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PosterGallery;
