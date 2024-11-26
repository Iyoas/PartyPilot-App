'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BiParty } from "react-icons/bi";
import styles from './styles/HeroSection.module.css';

const HeroSection = () => {

  return (
<div className={styles.HeroSection}>
  <div className={styles.HeroSection2}>
    <h1 className={styles.HeroTitle}>De party agenda van Nederland</h1>
    <h6 className={styles.HeroSubtitle}>Vind de leukste events dichtbij jouw met onze zoekfilters!</h6>
    </div>
    <Link href="/events">
      <button className={styles.EventButton}>
        Party Agenda <BiParty />
      </button>
    </Link>

</div>
  );
};

export default HeroSection;
