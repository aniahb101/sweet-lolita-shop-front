
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-lolita-pink bg-opacity-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Mailing List</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive updates on new arrivals, special offers, and styling tips.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="lolita-input flex-grow"
              required
            />
            <button
              type="submit"
              className="lolita-button whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
