
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://source.unsplash.com/photo-1582562124811-c09040d0a901)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 animate-fade-in">
            Discover the World of Lolita Fashion
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
            Elegant, whimsical designs for the modern princess
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link 
              to="/shop" 
              className="px-8 py-3 bg-white text-primary-foreground rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Shop Now
            </Link>
            <Link 
              to="/collections" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
