"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import events from '@/app/events'; 
import styles from './EventDetails.module.css'; 
import { ImInfo } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import { RiGroupLine } from "react-icons/ri";
import { IoArrowBack  } from "react-icons/io5"

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
    <div className={styles.Container}>

      {/* Flyer en naam */}
      <div className={styles.FlyerSection}>
        <img src={event.flyer} alt={event.naam} className={styles.Flyer} />
        <h1 className={styles.EventName}>{event.naam}</h1>
      </div>

      
      <div className={styles.Box}>
      <div className={styles.Header}>
        <p className={styles.HeaderText}>Details</p> 
        <ImInfo   className={styles.Detail} />
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
        <CgNotes  className={styles.Detail} />
        </div>
      <div className={styles.Section}>
        <p>Dit is wat extra informatie over het event, zoals wat je mee moet nemen, dresscode, etc.</p>
      </div>
      </div>

      <div className={styles.Box}>
      <div className={styles.Header}>
        <p className={styles.HeaderText}>Line Up</p> 
        < RiGroupLine  className={styles.Detail} />
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
  );
};

export default EventPage;
