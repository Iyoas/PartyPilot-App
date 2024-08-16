'use client';

import React, { useState } from 'react';

import FlyerSection from '../components/FlyerSection';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import styles from './styles/HeroSection.module.css';

const HeroSection = () => {

  return (
    <div className={styles.HeroSection}> 
      <FlyerSection />
    <div className={styles.HeroSection2}> 
      <SearchBar />
      <Filters />
      </div>
    </div>
  );
};

export default HeroSection;
