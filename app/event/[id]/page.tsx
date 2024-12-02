"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import events from '@/app/events'; 
import styles from './EventDetails.module.css'; 
import { ImInfo } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import { RiGroupLine } from "react-icons/ri";
import TopEventSection from '@/app/index/components/TopEventSection';
import SocialCard from '@/app/index/components/SocialCard';
import { IoTicket } from "react-icons/io5";

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = events.find((e) => e.id === Number(id));
    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return <p>Loading event details...</p>;
  }

  return (
    <div>
      <div className={styles.HeroSection}>
        <div className={styles.FlyerSection}>
          <img src={event.flyer} alt={event.naam} className={styles.Flyer} />
          <h1 className={styles.EventName}>{event.naam}</h1>
        </div>
      </div>

      <div className={styles.Container}>
        <div className={styles.Box}>
          <div className={styles.Header}>
            <p className={styles.HeaderText}>Info</p> 
            <ImInfo className={styles.Detail} />
          </div>
          <div className={styles.Section}>
            <p className={styles.Paragraph}><strong>Datum:</strong> {event.dag}, {event.nummerMaand}</p>
            <p className={styles.Paragraph}><strong>Tijd:</strong> 20:00 - 02:00</p>
            <p className={styles.Paragraph}><strong>Locatie:</strong> {event.stad}</p>
            <p className={styles.Paragraph}><strong>Adres:</strong> Some street, 1234 AB {event.stad}</p>
            <p className={styles.Paragraph}><strong>Genre:</strong> House, Techno</p>
          </div>
        </div>

        {/* Extra info */}
        <div className={styles.Box}>
          <div className={styles.Header}>
            <p className={styles.HeaderText}>Extra Info</p> 
            <CgNotes className={styles.Detail} />
          </div>
          <div className={styles.Section}>
            <p>Dit is wat extra informatie over het event, zoals wat je mee moet nemen, dresscode, etc.</p>
          </div>
        </div>

        {/* Line-up */}
        <div className={styles.Box}>
          <div className={styles.Header}>
            <p className={styles.HeaderText}>Line Up</p> 
            <RiGroupLine className={styles.Detail} />
          </div>
          <div className={styles.Section}>
            <ul className={styles.LineupList}>
              <li>DJ 1</li>
              <li>DJ 2</li>
              <li>DJ 3</li>
            </ul>
          </div>
        </div>
      </div>

      <TopEventSection />
        <SocialCard />

              {event.ticket && (
        <div className={styles.TicketContainer}>
          <a href={event.ticket} target="_blank" rel="noopener noreferrer">
            <button className={styles.TicketButton}>
              <IoTicket className={styles.TicketIcon} />
              Tickets
            </button>
          </a>
        </div>
      )}

    </div>
  );
};

export default EventPage;
