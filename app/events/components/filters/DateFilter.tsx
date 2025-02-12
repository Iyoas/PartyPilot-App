'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaCalendar } from 'react-icons/fa6';
import styles from '../styles/FilterMenu.module.css';

const DateFilter = ({ activeFilter, toggleFilter, selectedDates, setSelectedDates }) => {
  const [localSelectedDates, setLocalSelectedDates] = useState<Date[]>(selectedDates || []);

  const handleDateChange = (date: Date) => {
    // Voeg een datum toe als deze nog niet is geselecteerd
    if (localSelectedDates.some((d) => d.getTime() === date.getTime())) {
      // Verwijder de datum als deze al is geselecteerd
      setLocalSelectedDates(localSelectedDates.filter((d) => d.getTime() !== date.getTime()));
    } else {
      setLocalSelectedDates([...localSelectedDates, date]);
    }

    // Synchroniseer met de globale state
    setSelectedDates(localSelectedDates);
  };

  const handleFilterToggle = () => {
    toggleFilter('Datum');
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Datum' ? styles.active : ''}`}
        onClick={handleFilterToggle}
      >
      <div className={styles.FilterInfo}>
        <div className={styles.TagArrow}>
        <FaCalendar className={styles.filterIcon} />
          <span>Datum</span>
          </div>
          <span className={styles.dateFilterText} >Filter events op jouw beschikbare datum</span>
        </div>
        {activeFilter === 'Datum' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
      </div>
      {activeFilter === 'Datum' && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <DatePicker
            inline
            selected={localSelectedDates[0] || null} // Toon de eerste geselecteerde datum (of geen)
            onChange={handleDateChange} // Bijwerken van geselecteerde datums
            highlightDates={localSelectedDates} // Gemarkeerde datums
            calendarClassName={styles.datePicker}
            dayClassName={(date) =>
              localSelectedDates.some((d) => d.getTime() === date.getTime())
                ? styles.selectedDate
                : ''
            }
          />
        </div>
      )}
    </div>
  );
};

export default DateFilter;
