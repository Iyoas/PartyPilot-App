import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaCalendar } from 'react-icons/fa6';
import DatePickerComponent from './DatePicker'; // Zorg ervoor dat je de juiste pad gebruikt
import dayjs from 'dayjs';
import 'dayjs/locale/nl'; // Locale Nederlands
import styles from '../styles/FilterMenu.module.css';

const DateFilter = ({ activeFilter, toggleFilter, selectedDateRanges, setSelectedDateRanges }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false); // Track if the button was clicked

  // Set locale to Dutch
  dayjs.locale('nl'); // Locale instellen op Nederlands

  useEffect(() => {
    if (selectedDateRanges?.length === 2) {
      setStartDate(dayjs(selectedDateRanges[0]));
      setEndDate(dayjs(selectedDateRanges[1]));
    }
  }, [selectedDateRanges]);

  const handleDateRangeChange = (dates) => {
    const [start, end] = dates;
    if (start && end) {
      setSelectedDateRanges([start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')]);
    }
  };

  const handleSelectDateClick = () => {
    setIsButtonClicked(true); // Show the input field instead of the button
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Datum' ? styles.active : ''}`}
        onClick={() => {
          setIsOpen(!isOpen);
          toggleFilter('Datum');
        }}
      >
        <div className={styles.FilterRow}>
          <div className={styles.TagArrow}>
            <FaCalendar className={styles.filterIcon} />
            <span>Datum</span>
          </div>
          {activeFilter === 'Datum' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
        </div>
        <span className={styles.dateFilterText}>Filter evenementen op datum</span>
      </div>

      {activeFilter === 'Datum' && isOpen && (
        <div className={styles.filterContent}>
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
                className={`${styles.option} ${selectedDateRanges.includes(dateRange) ? styles.selected : ''}`}
                onClick={() => setSelectedDateRanges([dateRange])}
              >
                {dateRange}
              </span>
            ))}
            {isButtonClicked ? (
              <form
                className={styles.inputForm} // Add your CSS class here
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="text"
                  value={selectedDateRanges.length === 2 ? `${selectedDateRanges[0]} - ${selectedDateRanges[1]}` : 'Selecteer datum...'}
                  className={styles.inputField}
                  readOnly
                  onClick={() => setShowDatePicker(!showDatePicker)}
                />
              </form>
            ) : (
              <span
                className={styles.option}
                onClick={handleSelectDateClick}
              >
                Selecteer datum
              </span>
            )}
          </div>

          {showDatePicker && (
            <div className={styles.datePickerWrapper}>
              <DatePickerComponent
                startDate={selectedDateRanges[0] ? dayjs(selectedDateRanges[0]) : null}
                endDate={selectedDateRanges[1] ? dayjs(selectedDateRanges[1]) : null}
                onChange={handleDateRangeChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DateFilter;
