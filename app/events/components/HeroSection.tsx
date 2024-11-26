'use client';

import React from 'react';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import styles from './styles/HeroSection.module.css';
import events from '@/app/events'; 
const HeroSection = () => {
  // Aantal evenementen berekenen
  const eventCount = events.length;

  return (
    <div className={styles.HeroSection}>
      <p className={styles.EventCount}><strong>{eventCount}</strong> aankomende feesten</p> 
      <div className={styles.HeroSection2}>
        <h1 className={styles.HeroTitle}>De party agenda van Nederland</h1>
        <h6 className={styles.HeroSubtitle}>Vind de leukste events dichtbij jouw met onze zoekfilters!</h6>
      </div>
      <div className={styles.FilterContainer}>
        <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input 
            type="text" 
            placeholder="Zoek op stad, event, artiest..." 
            className={styles.searchInput} 
        />
        </div>
        <div className={styles.FilterBox}><IoFilter className={styles.FilterIcon} /></div>
        </div>

    </div>
  );
};

export default HeroSection;
