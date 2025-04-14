'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/Events.module.css';
import Link from 'next/link';
import { IoTicket } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";

interface Event {
  evenement_id: string;
  datum: string;
  stad: string;
  evenement_naam: string;
  event_image: string;
  ticketlink?: string;
}

interface EventsProps {
  locale: string;
}

// Basis URL voor afbeeldingen
const BASE_IMAGE_URL = "https://partypilot.nl/";

const Events: React.FC<EventsProps> = ({ locale }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`/${locale}/api/fetchEvents`);
        if (!res.ok) throw new Error("Kan data niet laden");
        const data = await res.json();
        setEvents(data.evenementen);
      } catch (err) {
        setError("Fout bij laden van evenementen");
        console.error("Fout bij ophalen van evenementen:", err);
      }
    };

    fetchEvents();
  }, [locale]);

  const formatDateForEventInfo = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('nl-NL', options).replace('.', '');
  };

  if (error) return <p className={styles.Error}>{error}</p>;
  if (!events.length) return <p className={styles.Loading}>Laden...</p>;

  const limitedEvents = events.slice(0, 10);

  return (
    <div>
      <p className={styles.Events}>Ontdek Feestjes</p>
      <div className={styles.EventsList}>
        {limitedEvents.map((event, index) => {
          const imageUrl =
            event.event_image.startsWith("http")
              ? event.event_image
              : `${BASE_IMAGE_URL}${event.event_image}`;

          return (
            <React.Fragment key={event.evenement_id}>
              {index !== 0 && <hr className={styles.EventDivider} />}
              <Link href={`/event/${event.evenement_id}`}>
                <div className={styles.Event} style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={imageUrl} alt={event.evenement_naam} className={styles.Flyer} />
                  <div className={styles.EventDetails} style={{ marginLeft: '10px', flex: 1 }}>
                    <h3 className={styles.EventName}>{event.evenement_naam}</h3>
                    <div className={styles.EventInfoContainer} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <p className={styles.EventInfo}>
                        {formatDateForEventInfo(event.datum)}, {event.stad}
                      </p>
                      {event.ticketlink && (
                        <Link href={event.ticketlink} passHref>
                          <button className={styles.TicketButton}>
                            Ticket <IoTicket className={styles.TicketIcon} />
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>

      <Link href="/events">
        <button className={styles.EventButton}>
          Volledige agenda <BsJournalBookmark />
        </button>
      </Link>
    </div>
  );
};

export default Events;
