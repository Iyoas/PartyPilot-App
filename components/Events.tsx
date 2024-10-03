'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/Events.module.css';
import events from "@/app/events"; // Zorg ervoor dat dit het juiste pad naar je mock data is
import Link from 'next/link'; // Importeer de Link component

// Definieer het type voor een evenement
interface Event {
  datum1: string;
  dag: string;
  nummerMaand: string;
  naam: string;
  stad: string;
  flyer: string;
  link: string; // Dit veld is nu niet meer nodig
}

const Events: React.FC = () => {
  const [eventList, setEventList] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setEventList(events);
    };

    fetchEvents();
  }, []);

  // Groepeer evenementen per datum1
  const groupedEvents = eventList.reduce((acc: any, event) => {
    if (!acc[event.datum1]) {
      acc[event.datum1] = []; // Maak een nieuwe array voor deze datum
    }
    acc[event.datum1].push(event); // Voeg het evenement toe aan de array
    return acc;
  }, {});

  return (
    <div>
      <p className={styles.Events}>Ontdek Feestjes</p>
      <div className={styles.EventsList}>
        {Object.entries(groupedEvents).map(([date, events]) => (
          <div key={date} className={styles.EventItem}>
            <div className={styles.DayHeader}>{date}</div>
            {events.map((event) => (
              <Link key={event.id} href={`/event/${event.id}`}> 
                <div className={styles.Event} style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={event.flyer} alt={event.naam} className={styles.Flyer} />
                  <div className={styles.EventDetails} style={{ marginLeft: '10px' }}>
                    <h3 className={styles.EventName}>{event.naam}</h3>
                    <p className={styles.EventInfo}>
                      {event.nummerMaand}, {event.stad}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
