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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={styles.heartIcon}
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
              </svg> */}
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
