import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { featuredCollections } from '@/data/products';

const Collections: React.FC = () => {
  return (
    <Layout>
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl font-serif mb-6">Our Collections</h1>
        <p className="text-base max-w-xl mx-auto mb-10">
          Discover the beauty of Sweet, Classic, and Gothic Lolita fashion.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          {featuredCollections.map((collection) => (
            <Link
              to={`/collections/${collection.id}`}
              key={collection.id}
              className="group block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif mb-2">{collection.name}</h3>
                <p className="text-sm text-gray-600">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
