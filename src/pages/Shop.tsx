
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { Search, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || '');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Extract unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // Filter products based on search, category, and price
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Our Collection</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our enchanting Lolita fashion pieces, from elegant dresses to charming accessories.
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="lolita-input w-full pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </div>
            
            <button 
              onClick={toggleFilters}
              className="md:hidden lolita-button flex items-center justify-center gap-2"
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>
          </div>
          
          {/* Filters - Desktop (always visible) and Mobile (toggleable) */}
          <div className={`grid md:grid-cols-[250px,1fr] gap-6 ${showFilters ? 'block' : 'hidden md:grid'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-lolita-pink">
              <h3 className="font-serif text-lg mb-4">Filters</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="form-radio text-lolita-pink focus:ring-lolita-pink"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-lolita-pink"
                  />
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
                <select className="lolita-input text-sm py-1">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
