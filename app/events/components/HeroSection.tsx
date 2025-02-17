'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import styles from './styles/HeroSection.module.css';
import events from '@/app/events';
import FilterMenu from './FilterMenu';

interface HeroSectionProps {
  onSearch: (searchTerm: string) => void;
  onApplyFilters: (filters: string[]) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onApplyFilters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isSticky, setIsSticky] = useState(false);
  const eventCount = events.length;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) { // Sticky wordt geactiveerd na 100px scrollen
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleApplyFilters = (appliedFilters: string[]) => {
    setSelectedFilters(appliedFilters);
    onApplyFilters(appliedFilters);
  };

  return (
    <div className={styles.HeroSection}>
      <p className={styles.EventCount}><strong>{eventCount}</strong> aankomende feesten</p> 
      <div className={styles.HeroSection2}>
        <h1 className={styles.HeroTitle}>De party agenda van Nederland</h1>
        <h6 className={styles.HeroSubtitle}>Vind de leukste events dichtbij jou met onze zoekfilters!</h6>
      </div>

      {/* Zoekbalk en filterknop */}
      <form className={`${styles.FilterContainer} ${isSticky ? styles.sticky : ''}`} onSubmit={handleSearchSubmit}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Zoek op stad, event, artiest..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filterknop met badge */}
        <div className={styles.FilterBox} onClick={toggleMenu}>
          <IoFilter className={styles.FilterIcon} />
          {selectedFilters.length > 0 && (
            <span className={styles.FilterBadge}>{selectedFilters.length}</span>
          )}
        </div>
      </form>

      {/* FilterMenu */}
      {isOpen && (
        <FilterMenu 
          isOpen={isOpen} 
          closeMenu={() => setIsOpen(false)} 
          onApplyFilters={handleApplyFilters} 
          selectedFilters={selectedFilters} 
        />
      )}
    </div>
  );
};

export default HeroSection;
