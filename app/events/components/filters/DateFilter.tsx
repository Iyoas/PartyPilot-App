'use client';

import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaCalendar } from 'react-icons/fa6';
import { Datepicker } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css'; // Zorg ervoor dat je de CSS laadt
import styles from '../styles/FilterMenu.module.css';

const DateFilter = ({ activeFilter, toggleFilter, selectedDates, setSelectedDates }) => {
  const [localSelectedDates, setLocalSelectedDates] = useState(selectedDates || { from: null, to: null });

  const handleDateChange = (date) => {
    setLocalSelectedDates(date);
    setSelectedDates(date);
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
          <span className={styles.dateFilterText}>
            Filter events op jouw beschikbare datum
          </span>
        </div>
        {activeFilter === 'Datum' ? (
          <IoIosArrowUp className={styles.arrowIcon} />
        ) : (
          <IoIosArrowDown className={styles.arrowIcon} />
        )}
      </div>
      {activeFilter === 'Datum' && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <Datepicker
            selected={localSelectedDates}
            onChange={handleDateChange}
            controls={['calendar']} // Alleen de calendar-weergave tonen
            min="1920-01-01"
            max="2050-01-01"
            range
            calendarClassName={styles.datePicker}
          />
        </div>
      )}
    </div>
  );
};

export default DateFilter;
