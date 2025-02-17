'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import styles from '../styles/FilterMenu.module.css';

const LocationFilter = ({ activeFilter, toggleFilter, selectedLocations, setSelectedLocations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedLocations, setLocalSelectedLocations] = useState<string[]>([]);

  useEffect(() => {
    if (selectedLocations) {
      setLocalSelectedLocations(selectedLocations);
    }
  }, [selectedLocations]);

  const toggleLocation = (location: string) => {
    setLocalSelectedLocations((prev) => {
      const updatedSelectedLocations = prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location];

      setSelectedLocations(updatedSelectedLocations);
      return updatedSelectedLocations;
    });
  };

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
    toggleFilter('Plaats');
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Plaats' ? styles.active : ''}`}
        onClick={handleFilterToggle}
      >
        <div className={styles.FilterRow}>
          <div className={styles.TagArrow}>
            <FaLocationDot className={styles.filterIcon} />
            <span>Plaats</span>
          </div>
          {activeFilter === 'Plaats' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
        </div>
        <span className={styles.dateFilterText}>Vind events bij jou in de buurt</span>
      </div>

      {activeFilter === 'Plaats' && isOpen && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <div className={styles.optionsWrapper}>
            {[
              'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven', 'Groningen', 'Maastricht', 'Tilburg',
              'Leiden', 'Delft', 'Arnhem', 'Nijmegen', 'Haarlem', 'Breda', 'Almere', 'Zwolle', 'Gouda',
              'Haarlemmermeer', 'Dordrecht', 'Enschede'
            ].sort().map((location) => (
              <span
                key={location}
                className={`${styles.option} ${localSelectedLocations.includes(location) ? styles.selected : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLocation(location);
                }}
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationFilter;
