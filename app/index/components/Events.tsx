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

// Basis URL voor afbeeldingen
const BASE_IMAGE_URL = "https://partypilot.nl/";

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Haal de evenementen op bij het laden van de component
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/fetchEvents");
        if (!res.ok) throw new Error("Kan data niet laden");
        const data = await res.json();
        setEvents(data.evenementen);
      } catch (err) {
        setError("Fout bij laden van evenementen");
        console.error("Fout bij ophalen van evenementen:", err);
      }
    };

    fetchEvents();
  }, []);

  // Functie om de datum te formatteren naar 'dagnummer maand' (bijv. '7 mar')
  const formatDateForEventInfo = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };

    // Verkrijg de datum in het gewenste formaat
    const formattedDate = date.toLocaleDateString('nl-NL', options);

    // Verwijder de punt die soms aan het einde van de datum staat
    return formattedDate.replace('.', '');
  };

  if (error) return <p className={styles.Error}>{error}</p>;
  if (!events.length) return <p className={styles.Loading}>Laden...</p>;

  // Beperk de lijst van evenementen tot de eerste 10
  const limitedEvents = events.slice(0, 10);

  return (
    <div>
      <p className={styles.Events}>Ontdek Feestjes</p>
      <div className={styles.EventsList}>
        {limitedEvents.map((event, index) => {
          // Controleer of de afbeelding al een volledig pad heeft
          const imageUrl =
            event.event_image.startsWith("http") || event.event_image.startsWith("https")
              ? event.event_image // Als het al een volledige URL is
              : `${BASE_IMAGE_URL}${event.event_image}`; // Voeg de basis-URL toe als dat niet het geval is

          return (
            <React.Fragment key={event.evenement_id}>
              {index !== 0 && <hr className={styles.EventDivider} />}
              <Link href={`/event/${event.evenement_id}`}>
                <div className={styles.Event} style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={imageUrl} alt={event.evenement_naam} className={styles.Flyer} />
                  <div className={styles.EventDetails} style={{ marginLeft: '10px', flex: 1 }}>
                    <h3 className={styles.EventName}>{event.evenement_naam}</h3>
                    {/* Datum en stad in 1 div */}
                    <div className={styles.EventInfoContainer} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <p className={styles.EventInfo}>
                        {formatDateForEventInfo(event.datum)}, {event.stad}
                      </p>
                      {/* Ticket button ook in dezelfde row */}
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

      {/* Knop naar de volledige agenda */}
      <Link href="/events">
        <button className={styles.EventButton}>
          Volledige agenda <BsJournalBookmark />
        </button>
      </Link>
    </div>
  );
};

export default Events;
