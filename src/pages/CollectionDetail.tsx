import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { featuredCollections } from '@/data/products';

const CollectionDetail: React.FC = () => {
  const { id } = useParams();
  const collection = featuredCollections.find((c) => c.id === id);

  if (!collection) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h2 className="text-3xl mb-4">Collection Not Found</h2>
          <Link to="/collections" className="text-pink-600 underline">
            Back to Collections
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="collection-detail text-center py-20 px-4">
        <img
          src={collection.image}
          alt={collection.name}
          className="max-w-sm mx-auto rounded-lg mb-8 shadow-lg"
        />
        <h1 className="text-4xl font-serif mb-4">{collection.name}</h1>
        <p className="text-base max-w-xl mx-auto">{collection.description}</p>
        <div className="mt-10">
          <Link to="/shop" className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full">
            Shop {collection.name}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CollectionDetail;
