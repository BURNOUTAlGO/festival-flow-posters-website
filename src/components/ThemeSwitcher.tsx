
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

interface ThemeOption {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  className: string;
}

const themes: ThemeOption[] = [
  { 
    name: 'Default', 
    primary: '#8B5CF6',
    secondary: '#0EA5E9',
    accent: '#D946EF',
    className: 'theme-default' 
  },
  { 
    name: 'Holi', 
    primary: '#FC5C9C',
    secondary: '#5EFCE8',
    accent: '#FFB344',
    className: 'theme-holi' 
  },
  { 
    name: 'Diwali', 
    primary: '#FFB21E',
    secondary: '#FF4D6D',
    accent: '#FCD757',
    className: 'theme-diwali' 
  },
  { 
    name: 'Tech', 
    primary: '#3A86FF',
    secondary: '#00C6FF',
    accent: '#9D4EDD',
    className: 'theme-tech' 
  },
  { 
    name: 'Neon', 
    primary: '#00FF66',
    secondary: '#FF00FF',
    accent: '#FFFF00',
    className: 'theme-neon' 
  },
  { 
    name: 'Sunset', 
    primary: '#FF6B6B',
    secondary: '#FFD93D',
    accent: '#FF8E3C',
    className: 'theme-sunset' 
  },
  { 
    name: 'Ocean', 
    primary: '#2C73D2',
    secondary: '#0ABDE3',
    accent: '#48DBFB',
    className: 'theme-ocean' 
  },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(themes[0]);

  const handleThemeChange = (theme: ThemeOption) => {
    setCurrentTheme(theme);
    document.documentElement.className = '';
    document.documentElement.classList.add(theme.className);
    
    // Update CSS variables
    document.documentElement.style.setProperty('--festival-purple', theme.primary);
    document.documentElement.style.setProperty('--festival-blue', theme.secondary);
    document.documentElement.style.setProperty('--festival-pink', theme.accent);
    
    setIsOpen(false);
  };

  return (
    <div className="fixed right-5 top-24 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-lg bg-muted hover:bg-muted/80"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Palette className="h-5 w-5" />
      </Button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-14 right-0 p-3 rounded-lg shadow-lg bg-card border"
        >
          <div className="space-y-2 w-48">
            <h3 className="text-sm font-medium mb-2">Select Theme</h3>
            {themes.map((theme) => (
              <div 
                key={theme.name}
                className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
                  currentTheme.name === theme.name ? 'bg-muted' : 'hover:bg-muted/50'
                }`}
                onClick={() => handleThemeChange(theme)}
              >
                <div className="flex space-x-1 mr-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: theme.primary }}
                  />
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: theme.secondary }}
                  />
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: theme.accent }}
                  />
                </div>
                <span className="text-sm">{theme.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
