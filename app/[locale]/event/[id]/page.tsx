'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import he from 'he';
import styles from './EventDetails.module.css';
import { ImInfo } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import { RiGroupLine } from "react-icons/ri";
import { IoTicket } from "react-icons/io5";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import { MdNotificationImportant } from "react-icons/md";
import TopEventSection from '@/src/components/TopEventSection';
import SocialCard from '@/src/components/SocialCard';
import { ImCross } from "react-icons/im"; // Het kruis-icoon

const BASE_IMAGE_URL = "https://partypilot.nl/"; // Zorg ervoor dat de juiste URL hier staat


const EventPage = () => {
  const { locale, id } = useParams(); // Haal zowel de locale als event_id uit de URL
  const router = useRouter();
  const [event, setEvent] = useState<any>(null);  // Typen aanpassen voor dynamische data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const flyerRef = useRef(null);

  // Haal de evenementen op via de API wanneer de component wordt geladen
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`/${locale}/api/fetchEvents`);  // Zorg ervoor dat we de locale gebruiken in de API URL
        if (!res.ok) throw new Error(`Kan evenementen niet laden, status: ${res.status}`);
        
        const data = await res.json();
    
        // Log de ontvangen evenementen data
        console.log('Ontvangen evenementen:', data.evenementen);
        console.log('Zoeken naar evenement met ID:', id);
    
        // Zorg ervoor dat je de juiste array doorzoekt
        const events = data.evenementen || [];  // Haal de evenementen op
        const foundEvent = events.find((event: any) => event.evenement_id === id);  // Zoek naar het event met de juiste ID
    
        if (foundEvent) {
          setEvent(foundEvent);
        } else {
          console.error("Event niet gevonden");
        }
      } catch (err) {
        console.error("Fout bij ophalen van evenementen:", err);
      }
    };
    
    if (id && locale) {
      fetchEvents(); // Haal de evenementen alleen op als er een id en locale is
    }
  }, [id, locale]);
  

  // Ga naar het volgende evenement
  const goToNextEvent = () => {
    const nextEventId = Number(id) + 1;
    router.push(`/${locale}/event/${nextEventId}`);  // Zorg ervoor dat we de locale meenemen in de URL
  };

  // Ga naar het vorige evenement
  const goToPreviousEvent = () => {
    const prevEventId = Number(id) - 1;
    router.push(`/${locale}/event/${prevEventId}`);  // Zorg ervoor dat we de locale meenemen in de URL
  };

  const handleFlyerClick = () => {
    console.log("Flyer URL:", `${BASE_IMAGE_URL}${event.event_image}`); // Controleer de URL in de console
    setModalImage(`${BASE_IMAGE_URL}${event.event_image}`);
    setIsModalOpen(true);
  };
  

  // Modal sluiten
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!event) {
    return <p>Loading event details...</p>;
  }

  // Functie om de datum te formatteren naar 'dag van de week, dagnummer maand' (bijv. 'vrijdag 7 maart')
  const formatDateForDayHeader = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('nl-NL', options);
  };

  // Functie om de datum te formatteren naar 'dagnummer maand' (bijv. '7 mar')
  const formatDateForEventInfo = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('nl-NL', options);
  };


  return (
    <div>
      <div className={`${styles.HeroSection} ${event.ticketlink ? '' : styles.NoBorderRadius}`}>
        <div className={styles.FlyerSection}>
          {/* Vorig evenement knop */}
          <button onClick={goToPreviousEvent} className={`${styles.ArrowButton} ${styles.LeftButton}`}>
            <IoIosArrowBack />
          </button>

          {/* Evenement flyer afbeelding */}
          <img
            src={`${BASE_IMAGE_URL}${event.event_image}`}
            alt={event.evenement_naam}
            className={styles.Flyer}
            ref={flyerRef}
            onClick={handleFlyerClick}
          />
          <h1 className={styles.EventName}>{event.evenement_naam}</h1>

          {/* Volgend evenement knop */}
          <button onClick={goToNextEvent} className={`${styles.ArrowButton} ${styles.RightButton}`}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

          {event.ticketlink && (
      <div className={styles.Disclaimer}>
        <div className={styles.DisclaimerContent}>
          <MdNotificationImportant />
          <span className={styles.DisclaimerText}>
            Voor ticketvragen, neem contact op met de organisator.
          </span>
        </div>
      </div>
    )}


      <div className={styles.Container}>
        <div className={styles.Box}>
          <div className={styles.Header}>
            <p className={styles.HeaderText}>Info</p>
            <ImInfo className={styles.Detail} />
          </div>
          <div className={styles.Section}>
            {/* Formatteer datum voor weergeven */}
            <p className={styles.Paragraph}><strong>Datum:</strong> {formatDateForDayHeader(event.datum)}</p>
            <p className={styles.Paragraph}>
              <strong>Tijd:</strong> {event.starttijd} - {event.eindtijd || 'onbekend'}
            </p>
            <p className={styles.Paragraph}><strong>Club:</strong> {event.locatie}</p>
            <p className={styles.Paragraph}><strong>Adres: </strong>{event.adres}</p>
            {event.muziekstijlen && event.muziekstijlen.trim() !== "" && (
              <p className={styles.Paragraph}><strong>Genre:</strong> {event.muziekstijlen}</p>
            )}

            {event.leeftijd && (
              <p className={styles.Paragraph}><strong>Leeftijd:</strong> {event.leeftijd}</p>
            )}
          </div>
        </div>

        <div className={styles.Box}>
          <div className={styles.Header}>
            <p className={styles.HeaderText}>Extra Info</p>
            <CgNotes className={styles.Detail} />
          </div>
          <div className={styles.Section}>
            <div>
              {event.extra_info && event.extra_info.trim() !== "" ? (
                event.extra_info.split(/<br\s*\/?>/g).map((line, index) =>
                  line.trim() ? <p key={index}>{line}</p> : <br key={index} />
                )
              ) : (
                <p>Geen extra info beschikbaar</p>
              )}
            </div>

          </div>
        </div>

        <div className={styles.Box}>
          <div className={styles.Header}>
            <p className={styles.HeaderText}>Line Up</p>
            <RiGroupLine className={styles.Detail} />
          </div>
          <div className={styles.Section}>
            {event.lineup && event.lineup.trim() !== "" ? (
              <ul className={styles.LineupList}>
                {event.lineup.split(/<br\s*\/?>/g).map((line, index) =>
                  line.trim() ? <li key={index}>{he.decode(line)}</li> : null
                )}
              </ul>
            ) : (
              <p>Line-up niet beschikbaar</p>
            )}
          </div>
        </div>

      </div>

      <TopEventSection />
      <SocialCard />

      {event.ticketlink && (
        <div className={styles.TicketContainer}>
          <a href={event.ticketlink} target="_blank" rel="noopener noreferrer">
            <button className={styles.TicketButton}>
              <IoTicket className={styles.TicketIcon} />
              Tickets
            </button>
          </a>
        </div>
      )}

      {/* Modal voor vergrote afbeelding */}
      {isModalOpen && (
        <div className={styles.ModalOverlay} onClick={closeModal}>
          <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className={styles.CloseButton}>
              <ImCross className={styles.CloseIcon} />
            </button>
            <img src={modalImage} alt="Vergrote flyer" className={styles.ModalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPage;
