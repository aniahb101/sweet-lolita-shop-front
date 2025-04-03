
import React from 'react';
import { Link } from 'react-router-dom';
import { featuredCollections } from '@/data/products';

const Collections: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-lolita-soft">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Our Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of Lolita fashion styles, each with its own unique charm and aesthetic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCollections.map((collection) => (
            <div key={collection.id} className="relative group overflow-hidden rounded-lg shadow-md decorative-border">
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">{collection.name}</h3>
                <p className="text-sm mb-4 opacity-90">{collection.description}</p>
                <Link
                  to={`/collections/${collection.id}`}
                  className="inline-block px-6 py-2 bg-white text-primary-foreground rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
