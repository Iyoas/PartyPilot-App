'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/TopEventSection.module.css';
import { IoTicket } from "react-icons/io5";

const BASE_IMAGE_URL = "https://partypilot.nl/";

type Props = {
  locale: string;
};

const TopEventSection = ({ locale }: Props) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDateForDayHeader = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('nl-NL', options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/${locale}/api/fetchEvents`);
        if (!res.ok) throw new Error(`Kan evenementen niet laden, status: ${res.status}`);

        const data = await res.json();
        const evenementen = data.evenementen || [];
        setEvents(evenementen.slice(0, 10));
      } catch (err) {
        console.error("Fout bij ophalen van evenementen:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [locale]);

  return (
    <div className={styles.TopEventSection}>
      <h2 className={styles.sectionTitle}>Top 10 Feestjes</h2>

      {loading ? (
        <p className={styles.LoadingText}>Evenementen laden...</p>
      ) : (
        <div className={styles.eventContainer}>
          {events.length > 0 ? (
            events.map((event) => (
              <Link key={event.evenement_id} href={`/event/${event.evenement_id}`} passHref legacyBehavior>
                <a className={styles.eventLink}>
                  <div className={styles.event}>
                    <Image
                      src={`${BASE_IMAGE_URL}${event.event_image}`}
                      alt={event.evenement_naam}
                      layout="intrinsic"
                      className={styles.eventImage}
                      width={300}
                      height={150}
                      unoptimized
                    />
                    <div className={styles.eventDetails}>
                      <h2 className={styles.eventName}>{event.evenement_naam}</h2>
                      <p className={styles.eventLocation}>
                        {formatDateForDayHeader(event.datum)}, {event.stad}
                      </p>
                    </div>
                  </div>
                  {event.ticketlink && (
                    <button className={styles.TicketButton}>
                      Ticket <IoTicket className={styles.TicketIcon} />
                    </button>
                  )}
                </a>
              </Link>
            ))
          ) : (
            <p className={styles.NoEventsText}>Geen evenementen gevonden.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TopEventSection;
