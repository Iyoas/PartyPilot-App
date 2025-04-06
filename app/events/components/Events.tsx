'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/Events.module.css';
import Link from 'next/link';
import { IoTicket } from "react-icons/io5";

interface Event {
  evenement_id: string;
  datum: string;
  stad: string;
  evenement_naam: string;
  event_image: string;
  ticketlink?: string;
  genre?: string; // Add these properties to match your filter categories
  leeftijd?: string;
  eventType?: string;
  holiday?: string;
}

// Basis URL voor afbeeldingen
const BASE_IMAGE_URL = "https://partypilot.nl/";

const Events: React.FC<{ filters: any }> = ({ filters }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(50); // Start met 50 evenementen

  // Haal evenementen op bij laden van de component
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

  // Apply filters when events or filters change
  useEffect(() => {
    if (!events.length) return;
    
    let result = [...events];
    
    // Filter by dates
    if (filters.dates && filters.dates.length) {
      // Handle predefined date ranges
      if (filters.dates.includes('Vandaag')) {
        const today = new Date().toISOString().split('T')[0];
        result = result.filter(event => event.datum === today);
      } else if (filters.dates.includes('Morgen')) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        result = result.filter(event => event.datum === tomorrowStr);
      } else if (filters.dates.includes('Dit weekend')) {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const daysUntilWeekend = dayOfWeek <= 5 ? 5 - dayOfWeek : 0;
        const thisWeekend = new Date();
        thisWeekend.setDate(today.getDate() + daysUntilWeekend);
        const weekendStart = thisWeekend.toISOString().split('T')[0];
        const weekendEnd = new Date(thisWeekend);
        weekendEnd.setDate(weekendEnd.getDate() + 1);
        const weekendEndStr = weekendEnd.toISOString().split('T')[0];
        result = result.filter(event => 
          event.datum === weekendStart || event.datum === weekendEndStr
        );
      } else if (filters.dates.includes('Deze week')) {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        
        result = result.filter(event => {
          const eventDate = new Date(event.datum);
          return eventDate >= startOfWeek && eventDate <= endOfWeek;
        });
      } else if (filters.dates.length === 2 && filters.dates[0].includes('-') && filters.dates[1].includes('-')) {
        // Specific date range selected from datepicker
        const startDate = new Date(filters.dates[0]);
        const endDate = new Date(filters.dates[1]);
        
        result = result.filter(event => {
          const eventDate = new Date(event.datum);
          return eventDate >= startDate && eventDate <= endDate;
        });
      }
    }
    
    // Filter by locations
    if (filters.locations && filters.locations.length) {
      result = result.filter(event => 
        filters.locations.some(location => event.stad === location)
      );
    }
    
    // Filter by genres
    if (filters.genres && filters.genres.length) {
      result = result.filter(event => 
        event.genre && filters.genres.some(genre => 
          event.genre.toLowerCase().includes(genre.toLowerCase())
        )
      );
    }
    
    // Filter by age restrictions
    if (filters.ages && filters.ages.length) {
      result = result.filter(event => 
        event.leeftijd && filters.ages.some(age => 
          event.leeftijd === age
        )
      );
    }
    
    // Filter by event types
    if (filters.eventTypes && filters.eventTypes.length) {
      result = result.filter(event => 
        event.eventType && filters.eventTypes.some(type => 
          event.eventType.toLowerCase().includes(type.toLowerCase())
        )
      );
    }
    
    // Filter by holidays
    if (filters.holidays && filters.holidays.length) {
      result = result.filter(event => 
        event.holiday && filters.holidays.some(holiday => 
          event.holiday.toLowerCase().includes(holiday.toLowerCase())
        )
      );
    }

    // Filter by search term
    if (filters.search) {
      result = result.filter(event => 
        event.evenement_naam.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.stad.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    setFilteredEvents(result);
  }, [events, filters]);

  // Use filteredEvents instead of sortedEvents for display
  const sortedEvents = [...filteredEvents].sort((a, b) => 
    new Date(a.datum).getTime() - new Date(b.datum).getTime()
  );
  const visibleEvents = sortedEvents.slice(0, visibleCount);

  // Groepeer alleen de zichtbare evenementen per datum
  const groupedEvents = visibleEvents.reduce((acc: Record<string, Event[]>, event) => {
    if (!acc[event.datum]) {
      acc[event.datum] = [];
    }
    acc[event.datum].push(event);
    return acc;
  }, {});

  // Rest of your code remains the same
  const formatDateForDayHeader = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
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
      {filteredEvents.length === 0 ? (
        <div className={styles.NoResultsMessage}>
          <p>Geen evenementen gevonden voor de geselecteerde filters.</p>
          <p>Probeer andere filtercriteria te selecteren.</p>
        </div>
      ) : (
        <>
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
                      <Link href={`/event/${event.evenement_id}`}>
                        <div className={styles.Event} style={{ display: 'flex', alignItems: 'center' }}>
                          <img src={imageUrl} alt={event.evenement_naam} className={styles.Flyer} />
                          <div className={styles.EventDetails} style={{ marginLeft: '10px', flex: 1 }}>
                            <h3 className={styles.EventName}>{event.evenement_naam}</h3>
                            <div className={styles.EventInfoContainer} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <p className={styles.EventInfo}>
                                {formatDateForEventInfo(event.datum)}, {event.stad}
                              </p>
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
            ))}
          </div>

          {/* "Laad meer"-knop onder de hele lijst */}
          {visibleCount < filteredEvents.length && (
            <button className={styles.LoadMoreButton} onClick={loadMoreEvents}>
              Laad meer...
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Events;
