
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarClock, MapPin, Music } from 'lucide-react';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  eventDate: Date;
}

const EventCard = ({ title, date, location, imageUrl, eventDate }: EventCardProps) => {
  const [countdown, setCountdown] = useState<CountdownValues>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setCountdown({ days, hours, minutes, seconds });
    };
    
    // Calculate immediately
    calculateCountdown();
    
    // Then set up interval
    const interval = setInterval(calculateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [eventDate]);
  
  const countdownBoxVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  return (
    <Card className="overflow-hidden border-none shadow-lg poster-card h-full">
      <motion.div 
        className="h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-64 overflow-hidden">
          <motion.img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          {/* Countdown Timer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-2">
            <motion.div
              variants={countdownBoxVariants}
              animate="pulse"
              className="bg-festival-purple/80 backdrop-blur-sm text-white px-3 py-2 rounded-md flex flex-col items-center"
            >
              <span className="text-2xl font-bold">{countdown.days}</span>
              <span className="text-xs">Days</span>
            </motion.div>
            
            <motion.div
              variants={countdownBoxVariants}
              animate="pulse"
              className="bg-festival-blue/80 backdrop-blur-sm text-white px-3 py-2 rounded-md flex flex-col items-center"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-2xl font-bold">{countdown.hours}</span>
              <span className="text-xs">Hours</span>
            </motion.div>
            
            <motion.div
              variants={countdownBoxVariants}
              animate="pulse"
              className="bg-festival-pink/80 backdrop-blur-sm text-white px-3 py-2 rounded-md flex flex-col items-center"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-2xl font-bold">{countdown.minutes}</span>
              <span className="text-xs">Mins</span>
            </motion.div>
            
            <motion.div
              variants={countdownBoxVariants}
              animate="pulse"
              className="bg-gray-800/80 backdrop-blur-sm text-white px-3 py-2 rounded-md flex flex-col items-center"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="text-2xl font-bold">{countdown.seconds}</span>
              <span className="text-xs">Secs</span>
            </motion.div>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-center text-gray-300 mb-2">
            <CalendarClock className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </CardContent>
      </motion.div>
    </Card>
  );
};

export default EventCard;
