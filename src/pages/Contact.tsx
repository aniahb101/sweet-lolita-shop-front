import React from 'react';
import Layout from '@/components/layout/Layout';

const Contact: React.FC = () => {
  return (
    <Layout>
      <section className="contact-section text-center py-20 px-4">
        <h1 className="text-4xl font-serif mb-6">Get in Touch</h1>
        <p className="text-base max-w-xl mx-auto mb-6">
          I'm Aniah Brown, a passionate full-stack developer from Baltimore, Maryland. I love building elegant, responsive websites and apps with strong frontend and backend skills.
        </p>
        <p className="text-base max-w-xl mx-auto mb-6">
          Feel free to reach out if you want to collaborate, share ideas, or talk fashion-tech!
        </p>

        <div className="mt-10 space-y-4">
          <p><strong>Email:</strong> <a href="mailto:aniah.brown01@gmail.com" className="text-pink-600 underline">aniah6767@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:4438038717" className="text-pink-600 underline">443-803-8717</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/aniahb101" target="_blank" className="text-pink-600 underline">github.com/aniahb101</a></p>
          <p><strong>Portfolio:</strong> <a href="https://aniahb101.github.io/my-website/" target="_blank" className="text-pink-600 underline">aniahb101.github.io/my-website</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aniah-brown-06554ab9/" target="_blank" className="text-pink-600 underline">linkedin.com/in/aniah-brown-06554ab9</a></p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
