
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

// Demo poster data
const posters: Poster[] = [
  {
    id: 1,
    title: "Electric Sky Festival",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800",
    date: "May 15-17, 2025",
    location: "Los Angeles, CA",
    category: "Music",
    likes: 284
  },
  {
    id: 2,
    title: "Digital Dreams Expo",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    date: "June 22-24, 2025",
    location: "New York, NY",
    category: "Tech",
    likes: 176
  },
  {
    id: 3,
    title: "Starlight Gathering",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800",
    date: "July 8-10, 2025",
    location: "Austin, TX",
    category: "Music",
    likes: 312
  },
  {
    id: 4,
    title: "Forest Illumination",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800",
    date: "August 19-21, 2025",
    location: "Portland, OR",
    category: "Art",
    likes: 249
  },
  {
    id: 5,
    title: "Rhythm & Beats",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800",
    date: "September 5-7, 2025",
    location: "Miami, FL",
    category: "Music",
    likes: 198
  },
  {
    id: 6,
    title: "Future Cinema Fest",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    date: "October 12-14, 2025",
    location: "Chicago, IL",
    category: "Film",
    likes: 165
  }
];

// Filter categories
const categories = ["All", "Music", "Art", "Tech", "Film", "Dance"];

const PosterGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredPosters = selectedCategory === "All" 
    ? posters 
    : posters.filter(poster => poster.category === selectedCategory);

  return (
    <section className="py-24 relative overflow-hidden" id="gallery">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-festival-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-festival-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-festival-purple to-festival-pink"
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
            Browse our curated collection of stunning festival and event posters from around the world.
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
                  ? "bg-festival-purple hover:bg-festival-purple/90 text-white" 
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
                  <Badge className="absolute top-4 left-4 bg-festival-purple/80 hover:bg-festival-purple text-white">
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
                        <Heart size={16} className="text-festival-pink" />
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
          <Button className="bg-gradient-to-r from-festival-purple to-festival-blue hover:opacity-90 transition-opacity px-8 py-6 text-white text-lg">
            View All Posters
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PosterGallery;
