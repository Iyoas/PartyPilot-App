'use client';

import React from 'react';
import Link from 'next/link';
import { BiParty } from "react-icons/bi";
import { useRouter } from 'next/navigation'; // let op: niet next/router in app dir
import styles from './styles/HeroSection.module.css';

const HeroSection = () => {
  const router = useRouter();
  // Controleer of locale gelijk is aan 'nl', zo ja, zet het naar 'nl-NL'
  const locale = router.locale === 'nl' ? 'nl-NL' : router.locale ?? 'nl-NL';

  return (
    <div className={styles.HeroSection}>
      <div className={styles.HeroSection2}>
        <h1 className={styles.HeroTitle}>De party agenda van Nederland</h1>
        <h6 className={styles.HeroSubtitle}>Vind de leukste events dichtbij jouw met onze zoekfilters!</h6>
      </div>
      <Link href={`/${locale}/events`}>
        <button className={styles.EventButton}>
          Party Agenda <BiParty />
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
