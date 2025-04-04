
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Star, Users } from 'lucide-react';

// Event data interface
interface Event {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: number;
  featured: boolean;
}

// Demo event data
const events: Event[] = [
  {
    id: 1,
    title: "Neon Dreams Music Festival",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800",
    date: "June 15-17, 2025",
    time: "4:00 PM - 2:00 AM",
    location: "Sunset Park, Los Angeles",
    category: "Music",
    attendees: 5000,
    featured: true
  },
  {
    id: 2,
    title: "Digital Art Exposition",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    date: "July 8-10, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Modern Gallery, New York",
    category: "Art",
    attendees: 2000,
    featured: true
  },
  {
    id: 3,
    title: "Summer Lights Festival",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800",
    date: "August 20-22, 2025",
    time: "6:00 PM - 12:00 AM",
    location: "Riverside Park, Chicago",
    category: "Music",
    attendees: 3500,
    featured: true
  }
];

const FeaturedEvents = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"] 
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-festival-dark/80" id="events">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-festival-purple/10 rounded-full filter blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-festival-blue/10 rounded-full filter blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-festival-blue to-festival-purple"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Events
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover exciting festivals and events happening soon around the world.
          </motion.p>
        </div>
        
        {/* Events Timeline */}
        <motion.div 
          className="relative mt-8 pl-8 border-l-2 border-festival-purple/30 space-y-16 md:space-y-24 md:ml-8"
          style={{ y, opacity }}
        >
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-gradient-to-r from-festival-purple to-festival-pink flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
              </div>
              
              {/* Event date label */}
              <div className="absolute -left-40 top-0 w-32 text-right hidden md:block">
                <span className="text-festival-purple font-bold">{event.date.split('-')[0]}</span>
              </div>
              
              {/* Event card */}
              <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-festival-purple/30 transition-colors overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Event image */}
                    <div className="w-full md:w-2/5 aspect-video md:aspect-auto">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Event details */}
                    <div className="w-full md:w-3/5 p-6">
                      <div className="flex justify-between mb-3">
                        <Badge className="bg-festival-purple/80 hover:bg-festival-purple text-white">
                          {event.category}
                        </Badge>
                        
                        {event.featured && (
                          <Badge variant="outline" className="border-festival-pink/50 text-festival-pink flex items-center gap-1">
                            <Star size={12} className="fill-festival-pink" /> Featured
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar size={16} className="text-festival-blue" />
                          <span>{event.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-300">
                          <Clock size={16} className="text-festival-blue" />
                          <span>{event.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin size={16} className="text-festival-blue" />
                          <span>{event.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-300">
                          <Users size={16} className="text-festival-blue" />
                          <span>{event.attendees.toLocaleString()} attendees</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="bg-festival-purple hover:bg-festival-purple/90 text-white">
                          Get Tickets
                        </Button>
                        <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-16">
          <Button className="bg-gradient-to-r from-festival-blue to-festival-purple hover:opacity-90 transition-opacity px-8 py-6 text-white text-lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
