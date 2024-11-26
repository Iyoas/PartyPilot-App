'use client';

import React from 'react';
import styles from './styles/Events.module.css';
import events from "@/app/events"; 
import Link from 'next/link';
import { IoTicket } from "react-icons/io5";

interface Event {
  id: string;
  datum1: string;
  dag: string;
  nummerMaand: string;
  naam: string;
  stad: string;
  flyer: string;
}

const Events: React.FC = () => {
  const groupedEvents = events.reduce((acc: Record<string, Event[]>, event) => {
    if (!acc[event.datum1]) {
      acc[event.datum1] = [];
    }
    acc[event.datum1].push(event);
    return acc;
  }, {});

  return (
    <div>
      <p className={styles.Events}>Ontdek Feestjes</p>
      <div className={styles.EventsList}>
        {Object.entries(groupedEvents).map(([date, events]) => (
          <div key={date} className={styles.EventGroup}>
            <div className={styles.DayHeader}>{date}</div>
            {events.map((event, index) => (
              <React.Fragment key={event.id}>
                {index !== 0 && <hr className={styles.EventDivider} />}
                <Link href={`/event/${event.id}`}>
                  <div className={styles.Event} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={event.flyer} alt={event.naam} className={styles.Flyer} />
                    <div className={styles.EventDetails} style={{ marginLeft: '10px' }}>
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
        ))}
      </div>
    </div>
  );
};

export default Events;
