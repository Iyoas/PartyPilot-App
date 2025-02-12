'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { MdFestival } from 'react-icons/md';
import styles from '../styles/FilterMenu.module.css';

const EventTypeFilter = ({ activeFilter, toggleFilter, selectedEventTypes, setSelectedEventTypes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedEventTypes, setLocalSelectedEventTypes] = useState<string[]>([]);

  // Gebruik useEffect om de lokale state bij te werken op basis van de geselecteerde eventtypes
  useEffect(() => {
    console.log("useEffect triggered: syncing local selected event types with props");
    console.log("selectedEventTypes (props):", selectedEventTypes);

    if (selectedEventTypes) {
      setLocalSelectedEventTypes(selectedEventTypes); // Synchroniseer met de props
    }
  }, [selectedEventTypes]);  // Afhankelijk van selectedEventTypes van bovenliggende component

  const toggleEventType = (eventType: string) => {
    setLocalSelectedEventTypes((prev) => {
      const updatedSelectedEventTypes = prev.includes(eventType)
        ? prev.filter((type) => type !== eventType) // Verwijder als het al geselecteerd is
        : [...prev, eventType]; // Voeg toe als het niet geselecteerd is

      // Synchroniseer de lokale geselecteerde opties met de globale state
      setSelectedEventTypes(updatedSelectedEventTypes);

      return updatedSelectedEventTypes; // Update de lokale state
    });
  };

  const handleFilterToggle = () => {
    setIsOpen(!isOpen); // Toggle het filter open/close
    toggleFilter('Type Event'); // Update de externe filterstatus
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Type Event' ? styles.active : ''}`}
        onClick={handleFilterToggle}
      >
      <div className={styles.FilterInfo}>
        <div className={styles.TagArrow}>
        <MdFestival className={styles.filterIcon} />
          <span>Type Event</span>
        </div>
        <span className={styles.dateFilterText}>Filter evenementen op type (bijv. concerten, festivals, etc.)</span>

        </div>
        {activeFilter === 'Type Event' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
      </div>

      {activeFilter === 'Type Event' && isOpen && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <div className={styles.optionsWrapper}>
            {['club', 'festival', 'rave','concert', 'boatparty', 'beachparty', 'blockparty', 'outdoor', 'rooftop'].map((eventType) => (
              <span
                key={eventType}
                className={`${styles.option} ${localSelectedEventTypes.includes(eventType) ? styles.selected : ''}`}
                onClick={(e) => {
                  e.stopPropagation(); // Voorkom dat het filter zelf sluit
                  toggleEventType(eventType); // Pas de selectie aan
                }}
              >
                {eventType}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTypeFilter;
