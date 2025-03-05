"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import events from '@/app/events';
import styles from './EventDetails.module.css';
import { ImInfo } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import { RiGroupLine } from "react-icons/ri";
import { IoTicket } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import TopEventSection from '@/app/index/components/TopEventSection';
import SocialCard from '@/app/index/components/SocialCard';
import { ImCross } from "react-icons/im"; // Het kruis-icoon

const EventPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const flyerRef = useRef(null);

  useEffect(() => {
    const foundEvent = events.find((e) => e.id === Number(id));
    setEvent(foundEvent);
  }, [id]);

  const goToNextEvent = () => {
    const nextEvent = events.find((e) => e.id === Number(id) + 1);
    if (nextEvent) router.push(`/event/${nextEvent.id}`);
  };

  const goToPreviousEvent = () => {
    const prevEvent = events.find((e) => e.id === Number(id) - 1);
    if (prevEvent) router.push(`/event/${prevEvent.id}`);
  };

  const handleFlyerClick = () => {
    setModalImage(event.flyer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!event) {
    return <p>Loading event details...</p>;
  }

  return (
    <div>
      <div className={styles.HeroSection}>
        <div className={styles.FlyerSection}>
          {/* Previous Event Button */}
          <button onClick={goToPreviousEvent} className={`${styles.ArrowButton} ${styles.LeftButton}`}>
            <IoIosArrowBack />
          </button>

          {/* Event Flyer Image */}
          <img
            src={event.flyer}
            alt={event.naam}
            className={styles.Flyer}
            ref={flyerRef}
            onClick={handleFlyerClick}
          />
          <h1 className={styles.EventName}>{event.naam}</h1>

          {/* Next Event Button */}
          <button onClick={goToNextEvent} className={`${styles.ArrowButton} ${styles.RightButton}`}>
            <IoIosArrowForward />
          </button>
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

        <div className={styles.Box}>
          <div className={styles.Header}>
            <p className={styles.HeaderText}>Extra Info</p>
            <CgNotes className={styles.Detail} />
          </div>
          <div className={styles.Section}>
            <p>Dit is wat extra informatie over het event, zoals wat je mee moet nemen, dresscode, etc.</p>
          </div>
        </div>

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
