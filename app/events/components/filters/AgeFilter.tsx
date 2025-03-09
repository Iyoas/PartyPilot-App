'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaPassport } from 'react-icons/fa6';
import styles from '../styles/FilterMenu.module.css';
import { useRouter } from 'next/navigation';

const AgeFilter = ({ activeFilter, toggleFilter, selectedAgeRanges, setSelectedAgeRanges }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedAgeRanges, setLocalSelectedAgeRanges] = useState(selectedAgeRanges);
  const router = useRouter();

  // Functie om de leeftijdsselecties naar de URL door te sturen
  const updateURL = () => {
    const query = [];

    // Voeg de leeftijdsfilters toe aan de query als er geselecteerde leeftijdsbereiken zijn
    if (localSelectedAgeRanges.length > 0) {
      query.push(localSelectedAgeRanges.join('/'));
    }

    const newUrl = `/events/${query.join('/')}`;
    router.push(newUrl);
  };

  useEffect(() => {
    // Update de URL als de geselecteerde leeftijdsbereiken veranderen
    if (localSelectedAgeRanges !== selectedAgeRanges) {
      updateURL();
    }
  }, [localSelectedAgeRanges]);

  const toggleAgeRange = (ageRange) => {
    setLocalSelectedAgeRanges((prev) => {
      const updatedSelectedRanges = prev.includes(ageRange)
        ? prev.filter((range) => range !== ageRange)
        : [...prev, ageRange];

      setSelectedAgeRanges(updatedSelectedRanges);
      return updatedSelectedRanges;
    });
  };

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
    toggleFilter('Leeftijd');
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Leeftijd' ? styles.active : ''}`}
        onClick={handleFilterToggle}
      >
        <div className={styles.FilterRow}>
          <div className={styles.TagArrow}>
            <FaPassport className={styles.filterIcon} />
            <span>Leeftijd</span>
          </div>
          {activeFilter === 'Leeftijd' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
        </div>
        <span className={styles.dateFilterText}>
          Filter events op leeftijd en feest met jouw leeftijdsgenoten
        </span>
      </div>

      {activeFilter === 'Leeftijd' && isOpen && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <div className={styles.optionsWrapper}>
            {['16+', '18+', '21+', '23+', '30+', '40+'].map((ageRange) => (
              <span
                key={ageRange}
                className={`${styles.option} ${localSelectedAgeRanges.includes(ageRange) ? styles.selected : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAgeRange(ageRange);
                }}
              >
                {ageRange}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeFilter;
