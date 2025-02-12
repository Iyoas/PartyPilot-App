'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/TopEventSection.module.css';
import eventsData from '@/app/events'; 
import { IoTicket } from "react-icons/io5";

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
          <Link key={event.id} href={`/event/${event.id}`} passHref legacyBehavior>
            <a className={styles.eventLink}>
              <div className={styles.event}>
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
                  {event.ticket && (
                 <button className={styles.TicketButton}>
                  Ticket <IoTicket className={styles.TicketIcon} />
                </button>
                  )}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopEventSection;
