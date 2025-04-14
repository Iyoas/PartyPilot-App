'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import styles from './styles/HeroSection.module.css';
import ModernEventFilter from '@/src/components/ModernEventFilter';
import ActiveFilters from '@/src/components/ActiveFilters';

interface HeroSectionProps {
  onSearch: (searchTerm: string) => void;
  onApplyFilters: (filters: string[]) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onApplyFilters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState<any[]>([]);

  // States for selected filters
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  const [selectedDateRanges, setSelectedDateRanges] = useState<string[]>([]);
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedHolidays, setSelectedHolidays] = useState<string[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/fetchEvents");
        if (!res.ok) throw new Error("Kan data niet laden");
        const data = await res.json();
        setFetchedEvents(data.evenementen);
      } catch (err) {
        console.error("Fout bij ophalen van evenementen:", err);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    }
  };

  const handleApplyFilters = (appliedFilters: string[]) => {
    onApplyFilters(appliedFilters);
    // Update state for active filters
    setSearchTerms(appliedFilters.filter(f => f.includes('searchTerm')));
    setSelectedDateRanges(appliedFilters.filter(f => f.includes('Datum')));
    setSelectedAgeRanges(appliedFilters.filter(f => f.includes('Leeftijd')));
    setSelectedEventTypes(appliedFilters.filter(f => f.includes('Type Event')));
    setSelectedGenres(appliedFilters.filter(f => f.includes('Genre')));
    setSelectedLocations(appliedFilters.filter(f => f.includes('Locatie')));
    setSelectedHolidays(appliedFilters.filter(f => f.includes('Feestdag')));
  };

  const eventCount = fetchedEvents.length;

  return (
    <div className={styles.HeroSection}>
      <p className={styles.EventCount}><strong>{eventCount}</strong> aankomende feesten</p> 
      <div className={styles.HeroSection2}>
        <h1 className={styles.HeroTitle}>De party agenda van Nederland</h1>
        <h6 className={styles.HeroSubtitle}>Vind de leukste events dichtbij jou met onze zoekfilters!</h6>
      </div>

      {/* Zoekbalk en filterknop */}
      <form className={`${styles.FilterContainer} ${isSticky ? styles.sticky : ''}`} onSubmit={handleSearchSubmit}>
        <ModernEventFilter
          key="unique-key"
          onSearch={onSearch}
          onApplyFilters={handleApplyFilters}
        />
      </form>
    </div>
  );
};

export default HeroSection;
