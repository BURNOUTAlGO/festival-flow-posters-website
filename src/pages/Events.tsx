
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedEvents from '@/components/FeaturedEvents';
import EventCard from '@/components/EventCard';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { images, preloadImages } from '@/utils/imageData';

const upcomingEvents = [
  {
    id: 1,
    title: "Diwali Celebration 2025",
    date: "October 15-17, 2025",
    location: "Mumbai, India",
    imageUrl: images.diwali,
    eventDate: new Date("2025-10-15T18:00:00")
  },
  {
    id: 2,
    title: "Web Summit India",
    date: "March 22-24, 2025",
    location: "Bangalore, India",
    imageUrl: images.webSummit,
    eventDate: new Date("2025-03-22T09:00:00")
  },
  {
    id: 3,
    title: "Holi Festival 2025",
    date: "March 8-10, 2025",
    location: "Jaipur, India",
    imageUrl: images.holi,
    eventDate: new Date("2025-03-08T10:30:00")
  },
  {
    id: 4,
    title: "AI Conference India",
    date: "April 5-7, 2025",
    location: "Chennai, India",
    imageUrl: images.aiConference,
    eventDate: new Date("2025-04-05T09:00:00")
  }
];

const Events = () => {
  useEffect(() => {
    // Preload images for better user experience
    preloadImages();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-background text-foreground relative"
    >
      <Navbar />
      <ThemeSwitcher />
      
      <main className="pt-32 pb-20 relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-40 left-1/4 w-72 h-72 bg-[var(--festival-purple)]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[var(--festival-blue)]/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--festival-purple)] via-[var(--festival-blue)] to-[var(--festival-pink)]">
            Upcoming Events
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-16">
            Discover exciting Indian festivals and tech events happening soon, featuring amazing cultural experiences and innovative showcases.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  imageUrl={event.imageUrl}
                  eventDate={event.eventDate}
                />
              </motion.div>
            ))}
          </div>
          
          <h2 className="text-3xl font-bold font-display text-center mb-8 mt-16 text-white">More Exciting Events</h2>
          <FeaturedEvents />
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Events;
