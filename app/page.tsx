'use client';

import React, { useEffect, useState } from 'react';
import Layout from './layout';
import HeroSection from '../components/HeroSection';
import TopEventSection from '../components/TopEventSection';
import './globals.css';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Layout>
      <div className="bodyContainer">
        <HeroSection />
        <TopEventSection />
      </div>
    </Layout>
  );
}
