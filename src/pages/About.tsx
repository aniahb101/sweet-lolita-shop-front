import React from 'react';
import Layout from '@/components/layout/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="about-section">
        <div className="container text-center py-20 px-4">
          <h1 className="text-4xl font-serif mb-6">About Lolita Elegance</h1>
          <p className="text-base max-w-2xl mx-auto mb-6">
            This site was built with love, passion, and inspiration from the beautiful images on <a href="https://devilinspired.com" target="_blank" rel="noopener noreferrer" className="underline">devilinspired.com</a>.
          </p>
          <p className="text-base max-w-2xl mx-auto mb-6">
            I've always adored Lolita fashion — the elegance, the bows, the lace, and the rich styles that range from sweet to gothic. This past year, I've dreamed of creating a Lolita fashion shop page where I could showcase those aesthetics in my own way.
          </p>
          <p className="text-base max-w-2xl mx-auto">
            Lolita Elegance is my creative space where I bring together the pieces I love most and present them through a dreamy, feminine lens. Thank you for stopping by and exploring my boutique!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
