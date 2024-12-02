'use client';

import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { FaCalendar, FaLocationDot, FaMusic, FaPassport } from "react-icons/fa6";
import { MdFestival } from "react-icons/md";
import styles from './styles/FilterMenu.module.css';

interface FilterMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  onApplyFilters: (filters: string[]) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ isOpen, closeMenu, onApplyFilters }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const toggleAgeRange = (ageRange: string) => {
    setSelectedAgeRanges((prev) => {
      if (prev.includes(ageRange)) {
        return prev.filter((range) => range !== ageRange);
      } else {
        return [...prev, ageRange];
      }
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedAgeRanges);
    closeMenu();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.menu}>
        <div className={styles.header}>
          <h2 className={styles.title}>Filter op:</h2>
          <button className={styles.closeButton} onClick={closeMenu}>
            <RxCross2 className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.filters}>
          <div className={styles.filterContainer}>
            <div
              className={`${styles.filterOption} ${activeFilter === 'Datum' ? styles.active : ''}`}
              style={{
                borderBottomLeftRadius: activeFilter === 'Datum' ? '0' : '',
                borderBottomRightRadius: activeFilter === 'Datum' ? '0' : '',
              }}
              onClick={() => toggleFilter('Datum')}
            >
              <div className={styles.TagArrow}>
                <span>Datum</span>
                {activeFilter === 'Datum' ? (
                  <IoIosArrowUp className={styles.arrowIcon} />
                ) : (
                  <IoIosArrowDown className={styles.arrowIcon} />
                )}
              </div>
              <FaCalendar className={styles.filterIcon} />
            </div>
            {activeFilter === 'Datum' && (
              <div className={`${styles.filterContent} ${styles.active}`}>
                Inhoud voor Datum
              </div>
            )}
          </div>

          <div className={styles.filterContainer}>
            <div
              className={`${styles.filterOption} ${activeFilter === 'Plaats' ? styles.active : ''}`}
              style={{
                borderBottomLeftRadius: activeFilter === 'Plaats' ? '0' : '',
                borderBottomRightRadius: activeFilter === 'Plaats' ? '0' : '',
              }}
              onClick={() => toggleFilter('Plaats')}
            >
              <div className={styles.TagArrow}>
                <span>Plaats</span>
                {activeFilter === 'Plaats' ? (
                  <IoIosArrowUp className={styles.arrowIcon} />
                ) : (
                  <IoIosArrowDown className={styles.arrowIcon} />
                )}
              </div>
              <FaLocationDot className={styles.filterIcon} />
            </div>
            {activeFilter === 'Plaats' && (
              <div className={`${styles.filterContent} ${styles.active}`}>
                Inhoud voor Plaats
              </div>
            )}
          </div>

          <div className={styles.filterContainer}>
            <div
              className={`${styles.filterOption} ${activeFilter === 'Genre' ? styles.active : ''}`}
              style={{
                borderBottomLeftRadius: activeFilter === 'Genre' ? '0' : '',
                borderBottomRightRadius: activeFilter === 'Genre' ? '0' : '',
              }}
              onClick={() => toggleFilter('Genre')}
            >
              <div className={styles.TagArrow}>
                <span>Genre</span>
                {activeFilter === 'Genre' ? (
                  <IoIosArrowUp className={styles.arrowIcon} />
                ) : (
                  <IoIosArrowDown className={styles.arrowIcon} />
                )}
              </div>
              <FaMusic className={styles.filterIcon} />
            </div>
            {activeFilter === 'Genre' && (
              <div className={`${styles.filterContent} ${styles.active}`}>
                Inhoud voor Genre
              </div>
            )}
          </div>

          <div className={styles.filterContainer}>
            <div
              className={`${styles.filterOption} ${activeFilter === 'Type Event' ? styles.active : ''}`}
              style={{
                borderBottomLeftRadius: activeFilter === 'Type Event' ? '0' : '',
                borderBottomRightRadius: activeFilter === 'Type Event' ? '0' : '',
              }}
              onClick={() => toggleFilter('Type Event')}
            >
              <div className={styles.TagArrow}>
                <span>Type Event</span>
                {activeFilter === 'Type Event' ? (
                  <IoIosArrowUp className={styles.arrowIcon} />
                ) : (
                  <IoIosArrowDown className={styles.arrowIcon} />
                )}
              </div>
              <MdFestival className={styles.filterIcon} />
            </div>
            {activeFilter === 'Type Event' && (
              <div className={`${styles.filterContent} ${styles.active}`}>
                Inhoud voor Type Event
              </div>
            )}
          </div>
          

          <div className={styles.filterContainer}>
            <div
              className={`${styles.filterOption} ${activeFilter === 'Leeftijd' ? styles.active : ''}`}
              onClick={() => toggleFilter('Leeftijd')}
              style={{
                borderBottomLeftRadius: activeFilter === 'Leeftijd' ? '0' : '',
                borderBottomRightRadius: activeFilter === 'Leeftijd' ? '0' : '',
              }}
            >
              <div className={styles.TagArrow}>
                <span>Leeftijd</span>
                {activeFilter === 'Leeftijd' ? (
                  <IoIosArrowUp className={styles.arrowIcon} />
                ) : (
                  <IoIosArrowDown className={styles.arrowIcon} />
                )}
              </div>
              <FaPassport className={styles.filterIcon} />
            </div>
            {activeFilter === 'Leeftijd' && (
              <div className={`${styles.filterContent} ${styles.active}`}>
                <div className={styles.optionsWrapper}>
                  {['16+', '18+', '21+', '23+', '30+', '40+'].map((ageRange) => (
                    <span
                      key={ageRange}
                      className={`${styles.option} ${selectedAgeRanges.includes(ageRange) ? styles.selected : ''}`}
                      onClick={() => toggleAgeRange(ageRange)}
                    >
                      {ageRange}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <button className={styles.applyButton}>
          <BsStars className={styles.starsIcon} />
          Toepassen
        </button>
        
      </div>
    </div>
  );
};

export default FilterMenu;
