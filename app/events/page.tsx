'use client';

import { useState } from 'react';
import Layout from '../layout';
import Events from './components/Events';
import TopEventSection from '../index/components/TopEventSection';
import styles from '../index/components/styles/Page.module.css';
import BlogSection from '../index/components/BlogSection';
import SocialCard from '../index/components/SocialCard';
import ModernEventFilter from '@/src/components/ModernEventFilter';

export default function EventsPage() {
  const [filters, setFilters] = useState({
    search: "",
    dates: [],
    ages: [],
    eventTypes: [],
    genres: [],
    locations: [],
    holidays: []
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log('Filters updated:', newFilters);
  };

  const handleSearch = (searchTerm) => {
    setFilters(prev => ({
      ...prev,
      search: searchTerm
    }));
  };

  return (
    <Layout>
      <div className={styles.Container}>
        <TopEventSection />
        <div className={styles.filterSection}>
          <ModernEventFilter 
            onFilterChange={handleFilterChange} 
            onSearch={handleSearch} 
          />
        </div>
        <Events filters={filters} />
        <BlogSection />
        <SocialCard />
      </div>
    </Layout>
  );
}
