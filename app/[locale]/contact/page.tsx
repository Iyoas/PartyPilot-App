"use client";

import Layout from '../layout';
import styles from './EventDetails.module.css';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logiva voor het handelen van de form
  };

  return (
    <Layout>
      <div className={styles.container}>
        {/* Info Sections */}
        <div className={styles.infoSections}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Vragen of onduidelijkheden?</h2>
            <p className={styles.sectionText}>
              Heb je vragen of is er iets niet duidelijk op de site? Stuur ons dan gerust een bericht via een van onze social media kanelen of e-mail ons.
            </p>
          </section>
      
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Vragen over een event of tickets?</h2>
            <p className={styles.sectionText}>
              Voor vragen over een event of tickets kun je direct de eventorganisatie contacteren. Wij bieden alleen een overzicht van de feesten en zijn niet verantwoordelijk voor ticketverkoop of organisatie.
            </p>
          </section>
        </div>

        {/* Contact Form */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Stuur ons een bericht!</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Naam</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Onderwerp</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Bericht</label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
                rows={5}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Verstuur
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}