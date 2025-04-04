
// Festival and cultural events images
export const images = {
  // Festival images
  diwali: "https://images.unsplash.com/photo-1605198988864-b47451cc95c2?w=800&auto=format&fit=crop",
  holi: "https://images.unsplash.com/photo-1576398289164-c94debf99ecd?w=800&auto=format&fit=crop",
  navratri: "https://images.unsplash.com/photo-1660651868158-40880f594c0b?w=800&auto=format&fit=crop",
  ganeshChaturthi: "https://images.unsplash.com/photo-1600181982031-7f8e8d1a8f67?w=800&auto=format&fit=crop",
  durgaPuja: "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?w=800&auto=format&fit=crop",
  
  // Tech event images
  techConference: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=800&auto=format&fit=crop",
  webSummit: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
  hackathon: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
  aiConference: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop",
  
  // Fallback and placeholder images
  placeholder: "/placeholder.svg",
  eventDefault: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop",
  posterDefault: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop",
};

// For preloading important images
export const preloadImages = () => {
  Object.values(images).forEach(src => {
    if (src.startsWith('http')) {
      const img = new Image();
      img.src = src;
    }
  });
};
