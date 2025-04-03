
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/products';
import { Heart, ShoppingCart, ChevronDown, ChevronUp, Share2 } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { toast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [openTab, setOpenTab] = useState('description');
  
  // Get similar products (same category but exclude current product)
  const similarProducts = products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <p className="mb-8">The product you are looking for does not exist.</p>
          <button 
            onClick={() => navigate('/shop')}
            className="lolita-button"
          >
            Return to Shop
          </button>
        </div>
      </Layout>
    );
  }
  
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const addToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Added to Cart",
      description: `${product.name} (${selectedSize}) has been added to your cart`
    });
    
    // Here you would typically add the product to the cart state/context
    console.log('Added to cart:', { ...product, quantity, size: selectedSize });
  };
  
  const addToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist`
    });
    
    // Here you would typically add the product to the wishlist state/context
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="lolita-card p-4">
            <div className="aspect-w-4 aspect-h-5 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                {product.isSale && product.salePrice ? (
                  <>
                    <span className="text-2xl font-medium">${product.salePrice.toFixed(2)}</span>
                    <span className="text-xl text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                    <span className="bg-lolita-pink text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              <p className="text-muted-foreground mb-6">
                A beautiful piece from our {product.category.toLowerCase()} collection. Perfect for adding elegance to your Lolita ensemble.
              </p>
              
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className={`w-12 h-12 rounded-full border ${
                        selectedSize === size
                          ? 'border-lolita-pink bg-lolita-pink bg-opacity-10'
                          : 'border-gray-300 hover:border-lolita-pink'
                      } flex items-center justify-center`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-l-full"
                  >
                    <ChevronDown size={18} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-16 h-10 border-t border-b border-gray-300 text-center"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r-full"
                  >
                    <ChevronUp size={18} />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={addToCart}
                  className="flex-1 lolita-button flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button
                  onClick={addToWishlist}
                  className="flex-1 px-6 py-2 rounded-full border border-lolita-pink text-primary-foreground bg-white hover:bg-lolita-pink hover:bg-opacity-10 transition-colors flex items-center justify-center gap-2"
                >
                  <Heart size={18} />
                  Add to Wishlist
                </button>
              </div>
              
              {/* Share */}
              <div className="mb-8">
                <button className="text-sm flex items-center gap-2 text-muted-foreground hover:text-primary-foreground transition-colors">
                  <Share2 size={16} />
                  Share this product
                </button>
              </div>
              
              {/* Tabs */}
              <div className="border-t border-b border-lolita-pink py-4">
                <div className="flex flex-col gap-4">
                  <button
                    className={`text-left px-4 py-2 flex justify-between items-center ${
                      openTab === 'description' ? 'bg-lolita-pink bg-opacity-10 rounded-lg' : ''
                    }`}
                    onClick={() => setOpenTab(openTab === 'description' ? '' : 'description')}
                  >
                    <span className="font-medium">Description</span>
                    {openTab === 'description' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  
                  {openTab === 'description' && (
                    <div className="px-4 pb-2 text-muted-foreground">
                      <p>
                        This exquisite {product.name.toLowerCase()} showcases the intricate details and high-quality craftsmanship that defines Lolita fashion. Made with premium materials for comfort and durability, it features delicate embroidery and elegant design elements that add a touch of whimsy to your wardrobe.
                      </p>
                    </div>
                  )}
                  
                  <button
                    className={`text-left px-4 py-2 flex justify-between items-center ${
                      openTab === 'details' ? 'bg-lolita-pink bg-opacity-10 rounded-lg' : ''
                    }`}
                    onClick={() => setOpenTab(openTab === 'details' ? '' : 'details')}
                  >
                    <span className="font-medium">Details & Care</span>
                    {openTab === 'details' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  
                  {openTab === 'details' && (
                    <div className="px-4 pb-2 text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Material: 100% high-quality cotton</li>
                        <li>Hand wash cold, line dry</li>
                        <li>Imported</li>
                        <li>Model is wearing size M</li>
                      </ul>
                    </div>
                  )}
                  
                  <button
                    className={`text-left px-4 py-2 flex justify-between items-center ${
                      openTab === 'shipping' ? 'bg-lolita-pink bg-opacity-10 rounded-lg' : ''
                    }`}
                    onClick={() => setOpenTab(openTab === 'shipping' ? '' : 'shipping')}
                  >
                    <span className="font-medium">Shipping & Returns</span>
                    {openTab === 'shipping' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  
                  {openTab === 'shipping' && (
                    <div className="px-4 pb-2 text-muted-foreground">
                      <p className="mb-2">
                        Free standard shipping on all orders over $75. Expedited and international shipping options available at checkout.
                      </p>
                      <p>
                        We accept returns within 30 days of delivery. Items must be unworn, unwashed, and with original tags attached.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
