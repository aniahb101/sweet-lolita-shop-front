
import { Product } from '@/components/products/ProductCard';

export const products: Product[] = [
  {
    id: "1",
    name: "Sweet Lolita Bow Dress",
    price: 89.99,
    image: "https://statics.devilinspired.com/image/cache/2025/0402/0/6a98b3e5-d94c-c5be-39fe-58791828a1f6-750x1000.png.webp",
    category: "Dresses",
    isNew: true
  },
  {
    id: "2",
    name: "Classic Lolita Blouse",
    price: 49.99,
    image: "https://statics.devilinspired.com/image/cache/catalog/products/202211/699d034bgy1gwie89ftcbj215o7a67wm-fuben-4_2ba4cb0d0f1789b05e87d5a5d6fd0eec-750x1000.jpg.webp",
    category: "Tops"
  },
  {
    id: "3",
    name: "Victorian Lace Skirt",
    price: 69.99,
    image: "https://statics.devilinspired.com/image/cache/2024/0924/0/bcc2c325-7a12-513a-25cc-a4fee0b211ee-750x1000.jpg.webp",
    category: "Bottoms",
    isSale: true,
    salePrice: 49.99
  },
  {
    id: "4",
    name: "Elegant Lolita Headband",
    price: 24.99,
    image: "https://statics.devilinspired.com/image/cache/catalog/products/202212/weixintupian-20221223141750_1cde5ac41526e3765e481fb3826d8497-750x1000.jpg.webp",
    category: "Accessories"
  },
  {
    id: "5",
    name: "Pearl Decorated JSK",
    price: 119.99,
    image: "https://statics.devilinspired.com/image/cache/catalog/products/UC-002/-19-750x1000.jpg.webp",
    category: "Dresses",
    isNew: true
  },
  {
    id: "6",
    name: "Frilled Ankle Socks",
    price: 12.99,
    image: "https://statics.devilinspired.com/image/cache/2025/0122/0/dd891727-3e71-7a96-c9c5-367696cf851a-750x1000.jpg.webp",
    category: "Accessories"
  },
  {
    id: "7",
    name: "Gothic Lolita OP Dress",
    price: 129.99,
    image: "https://statics.devilinspired.com/image/cache/catalog/products/BSP-108/-06-750x1000.jpg.webp",
    category: "Dresses",
    isSale: true,
    salePrice: 99.99
  },
  {
    id: "8",
    name: "Lace Trim Cardigan",
    price: 59.99,
    image: "https://statics.devilinspired.com/image/cache/2025/0310/0/046ef5ba-cd20-e2d2-c751-7ebdd7ca2c51-750x1000.jpg.webp",
    category: "Tops"
  }
];


export const featuredCollections = [
  {
    id: 'sweet-lolita',
    name: 'Sweet Lolita',
    description: 'Soft pastels, lace, and cute motifs to brighten your day.',
    image: 'https://statics.devilinspired.com/image/cache/2024/0424/0/94560599-b1f7-84bb-f0cd-9b2f3773902c-750x1000.jpg.webp',
  },
  {
    id: 'classic-lolita',
    name: 'Classic Lolita',
    description: 'Elegant and timeless styles inspired by Victorian fashion.',
    image: 'https://statics.devilinspired.com/image/cache/catalog/products/SEG-007/vvv-750x1000.jpg.webp',
  },
  {
    id: 'gothic-lolita',
    name: 'Gothic Lolita',
    description: 'Dark, romantic, and mysterious vibes in rich fabrics.',
    image: 'https://statics.devilinspired.com/image/cache/2023/0721/02/0/9ed58874-c59d-73e4-cb96-3215baa12342-750x1000.jpg.webp',
  },
];
