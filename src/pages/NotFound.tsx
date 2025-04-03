
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-5xl font-serif mb-6">404</h1>
          <p className="text-2xl font-medium mb-8">Page Not Found</p>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you were looking for. Perhaps you mistyped the URL or the page has moved.
          </p>
          <Link to="/" className="lolita-button inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
