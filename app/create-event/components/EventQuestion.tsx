"use client";
import React from "react";
import styles from "../components/styles/EventQuestion.module.css";

const EventQuestion = () => {
    return (
      <div className={styles.formContainer}>
        <form action="add_event.php" method="post" enctype="multipart/form-data" acceptCharset="utf-8">
          {/* Jouw Naam */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Jouw Naam*</label>
            <input
              id="name"
              name="name"
              type="text"
              maxLength={50}
              className={styles.formControl}
              required
            />
          </div>
  
          {/* Jouw Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Jouw Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={50}
              className={styles.formControl}
              required
            />
          </div>
  
          {/* Jouw Nummer */}
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>Jouw Nummer (niet verplicht)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              maxLength={15}
              className={styles.formControl}
              pattern="^[0-9]{10,15}$"
              title="Voer een geldig Nederlands telefoonnummer in Bijv. '0612345678'"
              placeholder="Bijv. 0612345678"
            />
          </div>
  
          {/* Evenement Naam */}
          <div className={styles.formGroup}>
            <label htmlFor="event" className={styles.formLabel}>Evenement Naam*</label>
            <input
              id="event"
              name="event"
              type="text"
              maxLength={50}
              className={styles.formControl}
              required
            />
          </div>
  
          {/* Datum */}
          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.formLabel}>Datum*</label>
            <input
              id="date"
              name="date"
              type="date"
              className={`${styles.formControl} ${styles.dateInput}`}
              required
            />
          </div>
  
          {/* Start Tijd */}
          <div className={styles.formGroup}>
            <label htmlFor="start-time" className={styles.formLabel}>Start Tijd*</label>
            <input
              id="start-time"
              name="start-time"
              type="time"
              className={`${styles.formControl} ${styles.timeInput}`}
              required
            />
          </div>
  
          {/* Eind Tijd */}
          <div className={styles.formGroup}>
            <label htmlFor="end-time" className={styles.formLabel}>Eind Tijd</label>
            <input
              id="end-time"
              name="end-time"
              type="time"
              className={`${styles.formControl} ${styles.timeInput}`}
            />
          </div>
  
          {/* Clubnaam */}
          <div className={styles.formGroup}>
            <label htmlFor="club" className={styles.formLabel}>Clubnaam*</label>
            <input
              id="club"
              name="club"
              type="text"
              maxLength={50}
              className={styles.formControl}
              required
            />
          </div>
  
          {/* Land */}
          <div className={styles.formGroup}>
            <label htmlFor="country" className={styles.formLabel}>Land*</label>
            <select
              id="country"
              name="country"
              className={styles.formControl}
            >
              <option value="netherlands">Nederland</option>
            </select>
          </div>
  
          {/* Stad */}
          <div className={styles.formGroup}>
            <label htmlFor="city" className={styles.formLabel}>Stad*</label>
            <input
              id="city"
              name="city"
              type="text"
              maxLength={50}
              className={styles.formControl}
              required
            />
          </div>
  
          {/* Adres */}
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.formLabel}>Adres*</label>
            <input
              id="address"
              name="address"
              type="text"
              maxLength={50}
              className={styles.formControl}
              required
            />
          </div>
  
          {/* Genres */}
          <div className={styles.formGroup}>
            <label htmlFor="genres" className={styles.formLabel}>Genres</label>
            <input
              id="genres"
              name="genres"
              type="text"
              maxLength={50}
              className={styles.formControl}
              placeholder="'house, afro, techno'"
            />
          </div>
  
          {/* Min Leeftijd */}
          <div className={styles.formGroup}>
            <label htmlFor="max-age" className={styles.formLabel}>Min Leeftijd</label>
            <select
              id="max-age"
              name="max-age"
              className={styles.formControl}
            >
              <option value="">Kies een leeftijd</option>
              <option value="16+">16+</option>
              <option value="18+">18+</option>
              <option value="21+">21+</option>
              <option value="23+">23+</option>
              <option value="25+">25+</option>
              <option value="27+">27+</option>
              <option value="30+">30+</option>
              <option value="40+">40+</option>
            </select>
          </div>
  
          {/* Flyer */}
          <div className={styles.formGroup}>
            <label htmlFor="flyer" className={styles.formLabel}>Flyer (geen pdf)</label>
            <input
              id="flyer"
              name="flyer"
              type="file"
              maxLength={50}
              className={styles.formControl}
            />
          </div>
  
          {/* Extra Informatie */}
          <div className={styles.formGroup}>
            <label htmlFor="extra-info" className={styles.formLabel}>Extra Informatie</label>
            <textarea
              id="extra-info"
              name="extra-info"
              className={styles.formControl}
              rows={5}
            />
          </div>
  
          {/* Line-up */}
          <div className={styles.formGroup}>
            <label htmlFor="line-up" className={styles.formLabel}>Line-up</label>
            <textarea
              id="line-up"
              name="line-up"
              className={styles.formControl}
              rows={5}
            />
          </div>
  
          {/* Ticketlink */}
          <div className={styles.formGroup}>
            <label htmlFor="ticket-link" className={styles.formLabel}>Ticketlink</label>
            <input
              id="ticket-link"
              name="ticket"
              type="url"
              className={styles.formControl}
            />
          </div>
  
          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Indienen
          </button>
        </form>
      </div>
    );
  };
  
  export default EventQuestion;