
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedEvents from '@/components/FeaturedEvents';
import EventCard from '@/components/EventCard';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const upcomingEvents = [
  {
    id: 1,
    title: "Neon Nights Music Festival",
    date: "June 15-17, 2025",
    location: "Dreamland Arena, Los Angeles",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    eventDate: new Date("2025-06-15T18:00:00")
  },
  {
    id: 2,
    title: "Digital Dreams Convention",
    date: "August 22-24, 2025",
    location: "Tech Center, San Francisco",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    eventDate: new Date("2025-08-22T09:00:00")
  },
  {
    id: 3,
    title: "Nature's Harmony Festival",
    date: "July 8-10, 2025",
    location: "Green Valley Park, Portland",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    eventDate: new Date("2025-07-08T16:30:00")
  },
  {
    id: 4,
    title: "Starlight Cinema Festival",
    date: "September 5-7, 2025",
    location: "Moonlight Gardens, Seattle",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    eventDate: new Date("2025-09-05T20:00:00")
  }
];

const Events = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />
      <ThemeSwitcher />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--festival-purple)] via-[var(--festival-blue)] to-[var(--festival-pink)]">
            Upcoming Events
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-16">
            Discover exciting festivals and events happening soon, featuring amazing lineups, experiences, and artistic showcases.
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
          
          <h2 className="text-3xl font-bold text-center mb-8 mt-16">More Events</h2>
          <FeaturedEvents />
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Events;
