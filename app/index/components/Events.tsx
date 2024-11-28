'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/Events.module.css';
import events from "@/app/events"; 
import Link from 'next/link'; 
import { BsJournalBookmark } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";

interface Event {
  id: string;
  datum1: string;
  dag: string;
  nummerMaand: string;
  naam: string;
  stad: string;
  flyer: string;
  ticket?: string; // Optioneel veld voor ticketlink
}

const Events: React.FC = () => {
  const [eventList, setEventList] = useState<Event[]>([]);

  useEffect(() => {
    // Beperk de evenementenlijst tot de eerste 10
    const limitedEvents = events.slice(0, 10); 
    setEventList(limitedEvents);
  }, []);

  return (
    <div className={styles.EventList}>
      <p className={styles.Events}>Ontdek Feestjes</p>
      <div className={styles.EventsList}>
        {eventList.map((event, index) => (
          <React.Fragment key={event.id}>
            {index !== 0 && <hr className={styles.EventDivider} />}
            <Link href={`/event/${event.id}`}>
              <div className={styles.Event} style={{ display: 'flex', alignItems: 'center' }}>
                <img src={event.flyer} alt={event.naam} className={styles.Flyer} />
                <div className={styles.EventDetails} style={{ marginLeft: '10px', flex: 1 }}>
                  <h3 className={styles.EventName}>{event.naam}</h3>
                  <p className={styles.EventInfo}>
                    {event.nummerMaand}, {event.stad}
                  </p>
                </div>
                {event.ticket && (
                  <Link href={event.ticket} passHref>
                    <button className={styles.TicketButton}>
                      Ticket <IoTicket className={styles.TicketIcon} />
                    </button>
                  </Link>
                )}
              </div>
            </Link>
          </React.Fragment>
        ))}
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
