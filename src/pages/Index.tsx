
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Collections from '@/components/home/Collections';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Collections />
      <Newsletter />
    </Layout>
  );
};

export default Index;
