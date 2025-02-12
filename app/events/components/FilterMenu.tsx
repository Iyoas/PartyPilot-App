'use client';

import React, { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { BsStars } from 'react-icons/bs';
import AgeFilter from './filters/AgeFilter';
import EventTypeFilter from './filters/EventTypeFilter';
import LocationFilter from './filters/LocationFilter';
import DateFilter from './filters/DateFilter';
import GenreFilter from './filters/GenreFilter';
import styles from './styles/FilterMenu.module.css';

const FilterMenu = ({ isOpen, closeMenu, onApplyFilters }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const handleApplyFilters = () => {
    const appliedFilters = [
      ...selectedAgeRanges,
      ...selectedEventTypes,
      ...selectedGenres,
      ...selectedLocations,
    ];
    onApplyFilters(appliedFilters);
    closeMenu();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
    <div className={styles.menu}>
      <div className={styles.menuContent}>
        <div className={styles.header}>
          <h2 className={styles.title}>Filter op:</h2>
          <button className={styles.closeButton} onClick={closeMenu}>
            <RxCross2 className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.filters}>
          <DateFilter activeFilter={activeFilter} toggleFilter={toggleFilter} />
          <LocationFilter
            activeFilter={activeFilter}
            toggleFilter={toggleFilter}
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
          />
          <GenreFilter
            activeFilter={activeFilter}
            toggleFilter={toggleFilter}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
          <EventTypeFilter
            activeFilter={activeFilter}
            toggleFilter={toggleFilter}
            selectedEventTypes={selectedEventTypes}
            setSelectedEventTypes={setSelectedEventTypes}
          />
          <AgeFilter
            activeFilter={activeFilter}
            toggleFilter={toggleFilter}
            selectedAgeRanges={selectedAgeRanges}
            setSelectedAgeRanges={setSelectedAgeRanges}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.applyButton} onClick={handleApplyFilters}>
          <BsStars className={styles.starsIcon} />
          Toepassen
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default FilterMenu;
