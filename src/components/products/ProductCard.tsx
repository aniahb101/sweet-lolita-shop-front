
import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { id, name, price, image, isNew, isSale, salePrice, category } = product;

  return (
    <div className={cn("lolita-card group", className)}>
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Product badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && (
            <span className="inline-block bg-lolita-blue text-blue-800 text-xs font-medium py-1 px-2 rounded-full">
              New
            </span>
          )}
          {isSale && (
            <span className="inline-block bg-lolita-pink text-primary-foreground text-xs font-medium py-1 px-2 rounded-full">
              Sale
            </span>
          )}
        </div>
        
        {/* Wishlist button */}
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          <Heart size={18} className="text-foreground hover:text-red-500 transition-colors" />
        </button>
        
        {/* Quick add to cart */}
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <button className="w-full py-2 bg-lolita-pink text-primary-foreground font-medium rounded-full hover:bg-opacity-90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <span className="text-xs text-muted-foreground">{category}</span>
        <Link to={`/product/${id}`}>
          <h3 className="font-serif text-lg mt-1 mb-2 hover:text-primary-foreground transition-colors">{name}</h3>
        </Link>
        <div className="flex items-center space-x-2">
          {isSale && salePrice ? (
            <>
              <span className="font-medium">${salePrice.toFixed(2)}</span>
              <span className="text-muted-foreground line-through">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-medium">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
