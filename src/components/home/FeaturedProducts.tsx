
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { products } from '@/data/products';

const FeaturedProducts: React.FC = () => {
  // Take first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of the most enchanting Lolita fashion pieces for your wardrobe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/shop" 
            className="lolita-button inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
