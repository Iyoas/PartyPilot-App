'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Gebruik Next.js Link voor navigatie
import styles from './styles/Footer.module.css';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.svg"
            alt="Site Logo"
            width={225}
            height={225}
            priority
          />
        </div>
      </div>
      <div className={styles.linkSections}>
        {/* Socials Section */}
        <div className={styles.linkColumn}>
          <h4 className={styles.columnTitle}>Socials</h4>
          <ul className={styles.socialIcons}>
            <li>
              <Link href="https://www.youtube.com" target="_blank">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" target="_blank">
                <FaTiktok />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" target="_blank">
                <FaWhatsapp />
              </Link>
            </li>
          </ul>
        </div>
        {/* Feesten Section */}
        <div className={styles.linkColumn}>
          <h4 className={styles.columnTitle}>Feesten</h4>
          <ul className={styles.List}>
            <li>
              <Link href="https://www.youtube.com" target="_blank">Amsterdam</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" target="_blank">Rotterdam</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" target="_blank">Den Haag</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" target="_blank">Eindhoven</Link>
            </li>
          </ul>
        </div>
        
        <div className={styles.linkColumn}>
          <h4 className={styles.columnTitle}>Zakelijk</h4>
          <ul className={styles.List}>
            <li>
              <Link href="https://www.youtube.com" target="_blank">Event toevoegen</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" target="_blank">Contact opnemen</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" target="_blank">Over ons</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
