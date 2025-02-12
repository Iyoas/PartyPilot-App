'use client';

import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaPassport } from 'react-icons/fa6';
import styles from '../styles/FilterMenu.module.css';

const AgeFilter = ({ activeFilter, toggleFilter, selectedAgeRanges, setSelectedAgeRanges }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedAgeRanges, setLocalSelectedAgeRanges] = useState(selectedAgeRanges); // Lokale state voor geselecteerde leeftijdsopties

  const toggleAgeRange = (ageRange) => {
    setLocalSelectedAgeRanges((prev) => {
      const updatedSelectedRanges = prev.includes(ageRange)
        ? prev.filter((range) => range !== ageRange) // Verwijder als het al geselecteerd is
        : [...prev, ageRange]; // Voeg toe als het niet geselecteerd is

      // Synchroniseer de lokale geselecteerde opties met de globale state
      setSelectedAgeRanges(updatedSelectedRanges);

      return updatedSelectedRanges; // Update de lokale state
    });
  };

  const handleFilterToggle = () => {
    setIsOpen(!isOpen); // Toggle het filter open/close
    toggleFilter('Leeftijd'); // Update de externe filterstatus
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Leeftijd' ? styles.active : ''}`}
        onClick={handleFilterToggle}
      >
        
      <div className={styles.FilterInfo}>
        <div className={styles.TagArrow}>
        <FaPassport className={styles.filterIcon} />
          <span>Leeftijd</span>
        </div>
        <span className={styles.dateFilterText} >Filter events op leeftijd en feest met jouw leeftijdsgenoten</span>
        </div>

        {activeFilter === 'Leeftijd' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
      </div>

      {activeFilter === 'Leeftijd' && isOpen && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <div className={styles.optionsWrapper}>
            {['16+', '18+', '21+', '23+', '30+', '40+'].map((ageRange) => (
              <span
                key={ageRange}
                className={`${styles.option} ${localSelectedAgeRanges.includes(ageRange) ? styles.selected : ''}`}
                onClick={(e) => {
                  e.stopPropagation(); // Voorkom dat het filter zelf sluit
                  toggleAgeRange(ageRange); // Pas de selectie aan
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

