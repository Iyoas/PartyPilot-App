'use client';

import React from 'react';
import Image from 'next/image';
import styles from './styles/TopEventSection.module.css';

const events = [
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
  {
    image: '/images/csc.jpg',
    name: 'CSC Festival',
    location: 'di 31 dec, Amsterdam',
  },
  {
    image: '/images/7fest2022.jpg',
    name: '7 Fest 2023',
    location: 'ma 24 mei, Rotterdam',
  }
];

const TopEventSection = () => {
  return (
    <div className={styles.TopEventSection}>
      <h2 className={styles.sectionTitle}>Top 10 Feestjes</h2>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopEventSection;