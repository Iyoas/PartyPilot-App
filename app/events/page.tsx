"use client";
import Layout from '../layout'; 
import FilterSection from './components/FilterSection';
import ActiveFilters from './components/ActiveFilters';
import Events from './components/Events'; 
import TopEventSection from '@/src/components/TopEventSection';
import styles from '../index/components/styles/Page.module.css'; 
import BlogSection from '@/src/components/BlogSection';
import SocialCard from '@/src/components/SocialCard';
import { useState } from 'react';
import HeroSection from './components/HeroSection';

export default function EventsPage() {
  const [searchTerms, setSearchTerms] = useState([]);
  const [selectedDateRanges, setSelectedDateRanges] = useState([]);
  const [selectedAgeRanges, setSelectedAgeRanges] = useState([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedHolidays, setSelectedHolidays] = useState([]);

  const handleApplyFilters = (appliedFilters) => {
    if (appliedFilters.dates) setSelectedDateRanges(appliedFilters.dates);
    if (appliedFilters.ages) setSelectedAgeRanges(appliedFilters.ages);
    if (appliedFilters.eventTypes) setSelectedEventTypes(appliedFilters.eventTypes);
    if (appliedFilters.genres) setSelectedGenres(appliedFilters.genres);
    if (appliedFilters.locations) setSelectedLocations(appliedFilters.locations);
    if (appliedFilters.holidays) setSelectedHolidays(appliedFilters.holidays);

  };

  const handleRemoveFilter = (filterType, value) => {
    switch (filterType) {
      case 'Zoekterm':
        setSearchTerms((prev) => prev.filter((term) => term !== value));
        break;
      case 'Datum':
        setSelectedDateRanges((prev) => prev.filter((item) => item !== value));
        break;
      case 'Leeftijd':
        setSelectedAgeRanges((prev) => prev.filter((item) => item !== value));
        break;
      case 'Type Event':
        setSelectedEventTypes((prev) => prev.filter((item) => item !== value));
        break;
      case 'Genre':
        setSelectedGenres((prev) => prev.filter((item) => item !== value));
        break;
      case 'Locatie':
        setSelectedLocations((prev) => prev.filter((item) => item !== value));
        break;
      case 'Feestdag':
        setSelectedHolidays((prev) => prev.filter((item) => item !== value));
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <div className={styles.Container}>
        <HeroSection 
          onSearch={(searchTerm) => setSearchTerms([...searchTerms, searchTerm])}
          onApplyFilters={handleApplyFilters} 
        />
        <ActiveFilters
          filters={{
            searchTerms,
            selectedDateRanges,
            selectedAgeRanges,
            selectedEventTypes,
            selectedGenres,
            selectedLocations,
            selectedHolidays
          }}
          onRemoveFilter={handleRemoveFilter}
        />
        <TopEventSection />
        <Events />  
        <BlogSection />
        <SocialCard />
      </div>
    </Layout>
  );
}
