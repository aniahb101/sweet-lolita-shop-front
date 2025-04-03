import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white text-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://statics.devilinspired.com/image/cache/2025/0226/0/a7364551-03c6-4e2b-0f7b-483b8e83e853-750x1000.jpg.webp)',
          backgroundPosition: 'center 30%' 
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-2xl px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif">
          Discover the World of Lolita Fashion
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Elegant, whimsical designs for the modern princess
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/shop" 
            className="btn-primary"
          >
            Shop Now
          </Link>
          <Link 
            to="/collections" 
            className="btn-outline"
          >
            Explore Collections
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
