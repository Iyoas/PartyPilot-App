'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaCalendar } from 'react-icons/fa6';
import DatePicker from 'react-datepicker'; // Importeer de DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Importeer de styling
import styles from '../styles/FilterMenu.module.css';

const DateFilter = ({ activeFilter, toggleFilter, selectedDateRanges, setSelectedDateRanges }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedDateRanges, setLocalSelectedDateRanges] = useState<string[]>([]);
  const [showDatePicker, setShowDatePicker] = useState(false); // Staat de datepicker weergeven

  useEffect(() => {
    if (selectedDateRanges) {
      setLocalSelectedDateRanges(selectedDateRanges); // Synchroniseer met de props
    }
  }, [selectedDateRanges]);

  const toggleDateRange = (dateRange: string) => {
    setLocalSelectedDateRanges((prev) => {
      const updatedSelectedDateRanges = prev.includes(dateRange)
        ? prev.filter((date) => date !== dateRange)
        : [...prev, dateRange];

      setSelectedDateRanges(updatedSelectedDateRanges); // Synchroniseer met de bovenliggende component
      return updatedSelectedDateRanges;
    });
  };

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
    toggleFilter('Datum');
  };

  const handleSelectDate = (date: Date) => {
    setLocalSelectedDateRanges([date.toLocaleDateString()]);
    setSelectedDateRanges([date.toLocaleDateString()]);
    setShowDatePicker(false); // Sluit de datepicker af na selectie
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
          <span className={styles.dateFilterText}>Filter evenementen op datum</span>
        </div>

        {activeFilter === 'Datum' ? (
          <IoIosArrowUp className={styles.arrowIcon} />
        ) : (
          <IoIosArrowDown className={styles.arrowIcon} />
        )}
      </div>

      {activeFilter === 'Datum' && isOpen && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <div className={styles.optionsWrapper}>
            {[
              'Vandaag',
              'Morgen',
              'Dit weekend',
              'Deze week',
              'Volgende week',
              'Deze maand',
              'Volgende maand',
            ].map((dateRange) => (
              <span
                key={dateRange}
                className={`${styles.option} ${localSelectedDateRanges.includes(dateRange) ? styles.selected : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDateRange(dateRange);
                }}
              >
                {dateRange}
              </span>
            ))}
            <span
              key="Selecteer datum..."
              className={`${styles.option} ${localSelectedDateRanges.includes('Selecteer datum...') ? styles.selected : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setShowDatePicker(!showDatePicker); // Toggle de datepicker
              }}
            >
              Selecteer datum...
            </span>
          </div>

          {/* Toon de DatePicker als de gebruiker "Selecteer datum..." kiest */}
          {showDatePicker && (
            <div className={styles.datePickerWrapper}>
              <DatePicker
                selected={localSelectedDateRanges.length > 0 ? new Date(localSelectedDateRanges[0]) : null}
                onChange={(date: Date) => handleSelectDate(date)}
                inline
                dateFormat="dd/MM/yyyy"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DateFilter;
