'use client';

import React from 'react';
import Image from 'next/image';
import styles from './styles/TopEventSection.module.css';

const events = [
  {
    image: '/images/7fest2022.jpg',
    name: '7 Fest 2022',
    location: 'za 19 okt, Den Haag',
  },
  {
    image: '/images/csc.jpg',
    name: 'CSC Festival',
    location: 'di 31 dec, Amsterdam',
  },
  {
    image: '/images/7fest2022.jpg',
    name: '7 Fest 2023',
    location: 'ma 24 mei, Rotterdam',
  },
];

const TopEventSection = () => {
  return (
    <div className={styles.topEventSection}>
      <h1 className={styles.sectionTitle}>Top 10 Feestjes</h1>
      <div className={styles.eventContainer}>
        {events.map((event, index) => (
          <div key={index} className={styles.event}>
            <Image
              src={event.image}
              alt={event.name}
              layout="intrinsic"
              className={styles.eventImage}
              width={200}
              height={400}
            />
            <div className={styles.eventDetails}>
              <div>
                <h2>{event.name}</h2>
                <p>{event.location}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" viewBox="0 0 24 24" className={styles.heartIcon}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopEventSection;
