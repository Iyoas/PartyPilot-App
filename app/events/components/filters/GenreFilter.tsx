'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaMusic } from 'react-icons/fa6';
import styles from '../styles/FilterMenu.module.css';

const GenreFilter = ({ activeFilter, toggleFilter, selectedGenres, setSelectedGenres }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedGenres, setLocalSelectedGenres] = useState<string[]>([]);

  // Gebruik useEffect om de lokale state bij te werken op basis van de geselecteerde genres
  useEffect(() => {
    if (selectedGenres) {
      setLocalSelectedGenres(selectedGenres); // Synchroniseer met de props
    }
  }, [selectedGenres]);  // Afhankelijk van selectedGenres van bovenliggende component

  const toggleGenre = (genre: string) => {
    setLocalSelectedGenres((prev) => {
      const updatedSelectedGenres = prev.includes(genre)
        ? prev.filter((g) => g !== genre) // Verwijder als het al geselecteerd is
        : [...prev, genre]; // Voeg toe als het niet geselecteerd is

      // Synchroniseer de lokale geselecteerde opties met de globale state
      setSelectedGenres(updatedSelectedGenres);

      return updatedSelectedGenres; // Update de lokale state
    });
  };

  const handleFilterToggle = () => {
    setIsOpen(!isOpen); // Toggle het filter open/close
    toggleFilter('Genre'); // Update de externe filterstatus
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${activeFilter === 'Genre' ? styles.active : ''}`}
        onClick={handleFilterToggle}
      >
       <div className={styles.FilterInfo}>
        <div className={styles.TagArrow}>
        <FaMusic className={styles.filterIcon} />
          <span>Genre</span>
        </div>
        <span className={styles.dateFilterText} >Filter events op jouw favoriete genres van house en techno tot afro en amapiano</span>
        </div>
                 
        {activeFilter === 'Genre' ? (
            <IoIosArrowUp className={styles.arrowIcon} />
          ) : (
            <IoIosArrowDown className={styles.arrowIcon} />
          )}
      </div>

      {activeFilter === 'Genre' && isOpen && (
        <div className={`${styles.filterContent} ${styles.active}`}>
          <div className={styles.optionsWrapper}>
            {['Afro', 'Amapiano', 'House', 'Techno', 'Pop', 'Rock', 'Hip-Hop', 'Jazz', 'R&B', 'Classical', 'Reggae', 'Electronic', 'Blues'].sort().map((genre) => (
              <span
                key={genre}
                className={`${styles.option} ${localSelectedGenres.includes(genre) ? styles.selected : ''}`}
                onClick={(e) => {
                  e.stopPropagation(); // Voorkom dat het filter zelf sluit
                  toggleGenre(genre); // Pas de selectie aan
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
