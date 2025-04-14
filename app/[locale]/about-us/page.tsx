"use client";

import Layout from '../layout';
import styles from './about-us.module.css';

export default function AboutUs() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for handling the form
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.infoSections}>
          <section className={styles.section1}>
            <h2 className={styles.sectionTitle}>Wat is PartyPilot?</h2>
            <p className={styles.sectionText}>
                Hallo feestliefhebbers! Bij PartyPilot zijn we jouw piloot in de wereld van feesten en evenementen in Nederland. Of je nu een feestganger bent die altijd op zoek is naar de nieuwste hotspots, of een enthousiaste eventorganisator die zijn evenement in de schijnwerpers wil zetten, wij zijn er om je feestervaring te verrijken. PartyPilot is ontstaan uit liefde voor het nachtleven en de wens om feestgangers en eventorganisatoren samen te brengen op één levendig platform. 
            </p>
          </section>
      
          <section className={styles.section2}>
            <h2 className={styles.sectionTitle}>PartyPilot voor feestgangers</h2>
            <p className={styles.sectionText}>
                Hallo feestliefhebbers! Bij PartyPilot zijn we jouw piloot in de wereld van feesten en evenementen in Nederland. Of je nu een feestganger bent die altijd op zoek is naar de nieuwste hotspots, of een enthousiaste eventorganisator die zijn evenement in de schijnwerpers wil zetten, wij zijn er om je feestervaring te verrijken. PartyPilot is ontstaan uit liefde voor het nachtleven en de wens om feestgangers en eventorganisatoren samen te brengen op één levendig platform. 
            </p>
          </section> 
          
          <section className={styles.section3}>
            <h2 className={styles.sectionTitle}>PartyPilot voor organisatoren</h2>
            <p className={styles.sectionText}>
                Hallo feestliefhebbers! Bij PartyPilot zijn we jouw piloot in de wereld van feesten en evenementen in Nederland. Of je nu een feestganger bent die altijd op zoek is naar de nieuwste hotspots, of een enthousiaste eventorganisator die zijn evenement in de schijnwerpers wil zetten, wij zijn er om je feestervaring te verrijken. PartyPilot is ontstaan uit liefde voor het nachtleven en de wens om feestgangers en eventorganisatoren samen te brengen op één levendig platform. 
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}