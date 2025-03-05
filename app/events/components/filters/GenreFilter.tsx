'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaMusic } from 'react-icons/fa6';
import styles from '../styles/FilterMenu.module.css';

const GenreFilter = ({ activeFilter, toggleFilter, selectedGenres, setSelectedGenres }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedGenres, setLocalSelectedGenres] = useState<string[]>([]);

  useEffect(() => {
    if (selectedGenres) {
      setLocalSelectedGenres(selectedGenres);
    }
  }, [selectedGenres]);

  const toggleGenre = (genre: string) => {
    setLocalSelectedGenres((prev) => {
      const updatedSelectedGenres = prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre];

      setSelectedGenres(updatedSelectedGenres);
      return updatedSelectedGenres;
    });
  };

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
    toggleFilter('Genre');
  };

  // Uitgebreide en alfabetisch gesorteerde lijst van genres
  const genres = [
    '00s', '70s', '80s', '90s', 'Acid Techno', 'Afro', 'Afro House', 'Afro Tech', 'Afrobeat', 'Amapiano',
    'Bachata', 'Baile Funk', 'Carribean', 'Classical', 'Classics', 'Dancehall', 'Deep House', 'Disco',
    'Disco House', 'Drum & Bass', 'Early Hardcore', 'Early Hardstyle', 'Early Rave', 'Early Terror',
    'EDM', 'Electric', 'Electro', 'Electronic', 'Eurodance', 'Freestyle', 'Funk', 'Garage House', 'Groove',
    'Guilty Pleasures', 'Hard Techno', 'Hard Trance', 'Hardcore', 'Hip-Hop', 'Hits', 'House', 'Jazz',
    'Latin', 'Latin House', 'Melodic Techno', 'Nederlands', 'Oldschool', 'Pop', 'R&B', 'Reggae', 'Tech House',
    'Techno', 'Trance', 'UK Garage'
  ].sort();

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Genre' ? styles.active : ''}`}
        onClick={handleFilterToggle}
      >
        <div className={styles.FilterRow}>
          <div className={styles.TagArrow}>
            <FaMusic className={styles.filterIcon} />
            <span>Genre</span>
          </div>
          {activeFilter === 'Genre' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
        </div>
        <span className={styles.dateFilterText}>
          Filter events op jouw favoriete genres van house en techno tot afro en amapiano
        </span>
      </div>

      {activeFilter === 'Genre' && isOpen && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <div className={styles.optionsWrapper}>
            {genres.map((genre) => (
              <span
                key={genre}
                className={`${styles.option} ${localSelectedGenres.includes(genre) ? styles.selected : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleGenre(genre);
                }}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreFilter;
