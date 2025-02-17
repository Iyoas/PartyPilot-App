'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { BiSolidParty } from "react-icons/bi";
import styles from '../styles/FilterMenu.module.css';

const HolidayFilter = ({ activeFilter, toggleFilter, selectedHolidays, setSelectedHolidays }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedHolidays, setLocalSelectedHolidays] = useState<string[]>([]);

  useEffect(() => {
    if (selectedHolidays) {
      setLocalSelectedHolidays(selectedHolidays);
    }
  }, [selectedHolidays]);

  const toggleHoliday = (holiday: string) => {
    setLocalSelectedHolidays((prev) => {
      const updatedSelectedHolidays = prev.includes(holiday)
        ? prev.filter((h) => h !== holiday)
        : [...prev, holiday];

      setSelectedHolidays(updatedSelectedHolidays);
      return updatedSelectedHolidays;
    });
  };

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
    toggleFilter('Holiday');
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Holiday' ? styles.active : ''}`}
        onClick={handleFilterToggle}
      >
        <div className={styles.FilterRow}>
          <div className={styles.TagArrow}>
            <BiSolidParty className={styles.filterIcon} />
            <span>Feestdagen</span>
          </div>
          {activeFilter === 'Holiday' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
        </div>
        <span className={styles.dateFilterText}>
          Filter evenementen op feestdagen zoals Koningsdag en Oudjaarsavond
        </span>
      </div>

      {activeFilter === 'Holiday' && isOpen && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <div className={styles.optionsWrapper}>
            {[
                'Koningsdag', 'Nieuwjaarsdag', 'Pasen', 'Kerstmis', 'Oudjaarsavond', 'Carnaval', 'Bevrijdingsdag', 'Pinksteren', 'Hemelvaart', 'Goede Vrijdag', 'Halloween'
            ]
              .map((holiday) => (
                <span
                  key={holiday}
                  className={`${styles.option} ${localSelectedHolidays.includes(holiday) ? styles.selected : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleHoliday(holiday);
                  }}
                >
                  {holiday}
                </span>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HolidayFilter;
