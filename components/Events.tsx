'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/Events.module.css';
import events from "@/app/events"; // Zorg ervoor dat dit het juiste pad naar je mock data is

// Definieer het type voor een evenement
interface Event {
  datum1: string;
  dag: string;
  nummerMaand: string;
  naam: string;
  stad: string;
  flyer: string;
  link: string; // Toegevoegd veld voor de link
}

const Events: React.FC = () => {
  const [eventList, setEventList] = useState<Event[]>([]); // Gebruik het Event type hier

  useEffect(() => {
    // Simuleer het ophalen van evenementen
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
            {events.map((event, index) => (
              <div
                key={index}
                className={styles.Event}
                onClick={() => (window.location.href = event.link)} // Navigeren naar de link in hetzelfde tabblad
                style={{ cursor: 'pointer' }} 
              >
                <img src={event.flyer} alt={event.naam} className={styles.Flyer} />
                <div className={styles.EventDetails}>
                  <h3 className={styles.EventName}>{event.naam}</h3>
                  <p className={styles.EventInfo}>
                    {event.nummerMaand}, {event.stad}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
