'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { MdFestival } from 'react-icons/md';
import styles from '../styles/FilterMenu.module.css';

const EventTypeFilter = ({ activeFilter, toggleFilter, selectedEventTypes, setSelectedEventTypes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedEventTypes, setLocalSelectedEventTypes] = useState<string[]>([]);

  useEffect(() => {
    if (selectedEventTypes) {
      setLocalSelectedEventTypes(selectedEventTypes);
    }
  }, [selectedEventTypes]);

  const toggleEventType = (eventType: string) => {
    setLocalSelectedEventTypes((prev) => {
      const updatedSelectedEventTypes = prev.includes(eventType)
        ? prev.filter((type) => type !== eventType)
        : [...prev, eventType];

      setSelectedEventTypes(updatedSelectedEventTypes);
      return updatedSelectedEventTypes;
    });
  };

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
    toggleFilter('Type Event');
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Type Event' ? styles.active : ''}`}
        onClick={handleFilterToggle}
      >
        <div className={styles.FilterRow}>
          <div className={styles.TagArrow}>
            <MdFestival className={styles.filterIcon} />
            <span>Type Event</span>
          </div>
          {activeFilter === 'Type Event' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
        </div>
        <span className={styles.dateFilterText}>
          Filter evenementen op type (bijv. concerten, festivals, etc.)
        </span>
      </div>

      {activeFilter === 'Type Event' && isOpen && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <div className={styles.optionsWrapper}>
            {['club', 'festival', 'rave', 'concert', 'boatparty', 'beachparty', 'blockparty', 'outdoor', 'rooftop'].map((eventType) => (
              <span
                key={eventType}
                className={`${styles.option} ${localSelectedEventTypes.includes(eventType) ? styles.selected : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleEventType(eventType);
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
