'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/Events.module.css';
import Link from 'next/link';
import { IoTicket } from "react-icons/io5";
import { useParams } from 'next/navigation';

interface Event {
  evenement_id: string;
  datum: string;
  stad: string;
  evenement_naam: string;
  event_image: string;
  ticketlink?: string;
}

// Basis URL voor afbeeldingen
const BASE_IMAGE_URL = "https://partypilot.nl/";

interface EventsProps {
  setEventCount: (count: number) => void;
}

const Events: React.FC<EventsProps> = ({ setEventCount }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(50);

  const { locale } = useParams();

  useEffect(() => {
    if (locale) {
      const fetchEvents = async () => {
        try {
          const res = await fetch(`/${locale}/api/fetchEvents`);
          if (!res.ok) throw new Error("Kan data niet laden");
          const data = await res.json();
          setEvents(data.evenementen);
          setEventCount(data.evenementen.length);
        } catch (err) {
          setError("Fout bij laden van evenementen");
          console.error("Fout bij ophalen van evenementen:", err);
        }
      };

      fetchEvents();
    }
  }, [locale, setEventCount]);

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.datum).getTime() - new Date(b.datum).getTime()
  );
  const visibleEvents = sortedEvents.slice(0, visibleCount);

  const groupedEvents = visibleEvents.reduce((acc: Record<string, Event[]>, event) => {
    if (!acc[event.datum]) {
      acc[event.datum] = [];
    }
    acc[event.datum].push(event);
    return acc;
  }, {});

  const formatDateForDayHeader = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    };
    return date.toLocaleDateString('nl-NL', options);
  };

  const formatDateForEventInfo = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('nl-NL', options).replace('.', '');
  };

  const loadMoreEvents = () => {
    setVisibleCount((prevCount) => prevCount + 50);
  };

  if (error) return <p className={styles.Error}>{error}</p>;
  if (!events.length) return <p className={styles.Loading}>Laden...</p>;

  return (
    <div>
      <p className={styles.Events}>Ontdek Feestjes</p>
      <div className={styles.EventsList}>
        {Object.entries(groupedEvents).map(([date, events]) => (
          <div key={date} className={styles.EventGroup}>
            <div className={styles.DayHeader}>{formatDateForDayHeader(date)}</div>
            {events.map((event, index) => {
              const imageUrl =
                event.event_image.startsWith("http") || event.event_image.startsWith("https")
                  ? event.event_image
                  : `${BASE_IMAGE_URL}${event.event_image}`;

              return (
                <React.Fragment key={event.evenement_id}>
                  {index !== 0 && <hr className={styles.EventDivider} />}
                  
                  <Link href={`/${locale}/event/${event.evenement_id}`}>
                    <div className={styles.Event} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                      <img src={imageUrl} alt={event.evenement_naam} className={styles.Flyer} />
                      <div className={styles.EventDetails} style={{ marginLeft: '10px', flex: 1 }}>
                        <h3 className={styles.EventName}>{event.evenement_naam}</h3>
                        <div
                          className={styles.EventInfoContainer}
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <p className={styles.EventInfo}>
                            {formatDateForEventInfo(event.datum)}, {event.stad}
                          </p>
                          {event.ticketlink && (
                            <a href={event.ticketlink} target="_blank" rel="noopener noreferrer">
                              <button className={styles.TicketButton}>
                                Ticket <IoTicket className={styles.TicketIcon} />
                              </button>
                            </a>
                          )}
                        </div>
                      </div>
                      </div>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>

      {visibleCount < events.length && (
        <button className={styles.LoadMoreButton} onClick={loadMoreEvents}>
          Laad meer...
        </button>
      )}
    </div>
  );
};

export default Events;
