import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles/Filters.module.css'; 
import { MdDateRange, MdOutlineFestival } from "react-icons/md";
import { IoLocationOutline, IoFilterSharp } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Filters = () => {
  const [filters, setFilters] = useState({
    dateFrom: null,
    dateTo: null,
    location: '',
    genre: '',
    eventType: '',
    age: ''
  });

  const [visibleFilter, setVisibleFilter] = useState<string | null>(null);

  const updateFilters = (newFilters: any) => {
    setFilters(newFilters);
    console.log('Current Filters:', newFilters);
  };

  const locations = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag'];
  const genres = ['Techno', 'House', 'Hip-hop', 'Pop', 'EDM'];
  const eventTypes = ['Club', 'Festival', 'Concert', 'Rave'];
  const ages = ['18+', '21+', 'All Ages'];

  return (
    <div className={styles.filtersContainer}>
      <IoFilterSharp  className={styles.FilterStripes}/> 
      <div className={styles.filter}>
        <button
          type="button"
          className={`${styles.filterButton} ${visibleFilter === 'date' ? styles.filterButtonSelected : ''}`}
          onClick={() => setVisibleFilter(visibleFilter === 'date' ? null : 'date')}
        >
          <MdDateRange className={styles.FilterIcon}/> 
          {filters.dateFrom && filters.dateTo
            ? `${filters.dateFrom.toDateString()} - ${filters.dateTo.toDateString()}`
            : 'Datum'}
        </button>
        {visibleFilter === 'date' && (
          <div className={styles.dropdown}>
            <DatePicker
              selected={filters.dateFrom}
              onChange={(dates) => {
                const [start, end] = dates || [];
                updateFilters({ ...filters, dateFrom: start, dateTo: end });
              }}
              startDate={filters.dateFrom}
              endDate={filters.dateTo}
              selectsRange
              inline
              dateFormat="yyyy/MM/dd"
            />
          </div>
        )}
      </div>

      <div className={styles.filter}>
        <button
          type="button"
          className={`${styles.filterButton} ${visibleFilter === 'location' ? styles.filterButtonSelected : ''}`}
          onClick={() => setVisibleFilter(visibleFilter === 'location' ? null : 'location')}
        >
          <IoLocationOutline className={styles.FilterIcon}/> 
          {filters.location || 'Locatie'}
        </button>
        {visibleFilter === 'location' && (
          <div className={styles.dropdown}>
            {locations.map((location) => (
              <div
                key={location}
                className={styles.option}
                onClick={() => updateFilters({ ...filters, location })}
              >
                {location}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filter}>
        <button
          type="button"
          className={`${styles.filterButton} ${visibleFilter === 'genre' ? styles.filterButtonSelected : ''}`}
          onClick={() => setVisibleFilter(visibleFilter === 'genre' ? null : 'genre')}
        >
          <IoIosMusicalNotes className={styles.FilterIcon}/> 
          {filters.genre || 'Genre'}
        </button>
        {visibleFilter === 'genre' && (
          <div className={styles.dropdown}>
            {genres.map((genre) => (
              <div
                key={genre}
                className={styles.option}
                onClick={() => updateFilters({ ...filters, genre })}
              >
                {genre}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filter}>
        <button
          type="button"
          className={`${styles.filterButton} ${visibleFilter === 'eventType' ? styles.filterButtonSelected : ''}`}
          onClick={() => setVisibleFilter(visibleFilter === 'eventType' ? null : 'eventType')}
        >
          <MdOutlineFestival className={styles.FilterIcon}/> 
          {filters.eventType || 'Type Event'}
        </button>
        {visibleFilter === 'eventType' && (
          <div className={styles.dropdown}>
            {eventTypes.map((type) => (
              <div
                key={type}
                className={styles.option}
                onClick={() => updateFilters({ ...filters, eventType: type })}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filter}>
        <button
          type="button"
          className={`${styles.filterButton} ${visibleFilter === 'age' ? styles.filterButtonSelected : ''}`}
          onClick={() => setVisibleFilter(visibleFilter === 'age' ? null : 'age')}
        >
          <AiOutlineSafetyCertificate className={styles.FilterIcon}/> 
          {filters.age || 'Leeftijd'}
        </button>
        {visibleFilter === 'age' && (
          <div className={styles.dropdown}>
            {ages.map((age) => (
              <div
                key={age}
                className={styles.option}
                onClick={() => updateFilters({ ...filters, age })}
              >
                {age}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
