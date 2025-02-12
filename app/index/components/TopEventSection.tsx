'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles/TopEventSection.module.css';
import eventsData from '@/app/events'; // Zorg dat dit de juiste import is

const TopEventSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Alleen de eerste 10 evenementen inladen
    const limitedEvents = eventsData.slice(0, 10);
    setEvents(limitedEvents);
  }, []);

  return (
    <div className={styles.TopEventSection}>
      <h2 className={styles.sectionTitle}>Top 10 Feestjes</h2>
      <div className={styles.eventContainer}>
        {events.map((event) => (
          <div key={event.id} className={styles.event}>
            <Image
              src={event.flyer}
              alt={event.naam}
              layout="intrinsic"
              className={styles.eventImage}
              width={300}
              height={150}
            />
            <div className={styles.eventDetails}>
              <h2 className={styles.eventName}>{event.naam}</h2>
              <p className={styles.eventLocation}>
                {event.datum1}, {event.stad}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopEventSection;
