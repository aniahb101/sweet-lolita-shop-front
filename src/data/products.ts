
import { Product } from '@/components/products/ProductCard';

export const products: Product[] = [
  {
    id: "1",
    name: "Sweet Lolita Bow Dress",
    price: 89.99,
    image: "https://source.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "Dresses",
    isNew: true
  },
  {
    id: "2",
    name: "Classic Lolita Blouse",
    price: 49.99,
    image: "https://source.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Tops"
  },
  {
    id: "3",
    name: "Victorian Lace Skirt",
    price: 69.99,
    image: "https://source.unsplash.com/photo-1535268647677-300dbf3d78d1",
    category: "Bottoms",
    isSale: true,
    salePrice: 49.99
  },
  {
    id: "4",
    name: "Elegant Lolita Headband",
    price: 24.99,
    image: "https://source.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "Accessories"
  },
  {
    id: "5",
    name: "Pearl Decorated JSK",
    price: 119.99,
    image: "https://source.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Dresses",
    isNew: true
  },
  {
    id: "6",
    name: "Frilled Ankle Socks",
    price: 12.99,
    image: "https://source.unsplash.com/photo-1535268647677-300dbf3d78d1",
    category: "Accessories"
  },
  {
    id: "7",
    name: "Gothic Lolita OP Dress",
    price: 129.99,
    image: "https://source.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "Dresses",
    isSale: true,
    salePrice: 99.99
  },
  {
    id: "8",
    name: "Lace Trim Cardigan",
    price: 59.99,
    image: "https://source.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Tops"
  }
];

export const featuredCollections = [
  {
    id: "1",
    name: "Sweet Lolita",
    description: "Cute and adorable styles featuring bows, frills, and pastels",
    image: "https://source.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: "2",
    name: "Classic Lolita",
    description: "Elegant and mature styles inspired by Victorian fashion",
    image: "https://source.unsplash.com/photo-1582562124811-c09040d0a901"
  },
  {
    id: "3",
    name: "Gothic Lolita",
    description: "Dark and mysterious styles with dramatic silhouettes",
    image: "https://source.unsplash.com/photo-1535268647677-300dbf3d78d1"
  }
];
