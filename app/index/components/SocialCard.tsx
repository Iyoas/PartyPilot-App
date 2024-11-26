'use client';

import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import styles from './styles/SocialCard.module.css'; 
import { SlUserFollow } from 'react-icons/sl';

const SocialCard: React.FC = () => {
  return (
    <div className={styles.socialCard}>
      <div className={styles.header}>
        <h2 className={styles.title}>Volg ons op Social media!</h2>
        <span className={styles.iconContainer}>
        <SlUserFollow />
        </span>
      </div>
      <p className={styles.description}>
        Op de socials van PartyPilot posten we elke week de heetste events van
        die week. Zorg dat je ons volgt op onze socials zodat je altijd
        up-to-date bent!
      </p>
      <div className={styles.socialIcons}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
