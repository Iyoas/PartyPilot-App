'use client';

import React from "react";
import styles from "../components/styles/Rules.module.css";

const Rules = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <h3 className={styles.Title}>Meld jouw event aan</h3>
      </div>
      <p className={styles.Description}>
        Oeps, hebben we je event gemist? Goed dat je het aanmeld! We gaan er meteen mee aan de slag. Na een snelle controle voegen we je event toe aan ons platform. Heb je vragen? Bericht ons gerust!
      </p>
      <h3 className={styles.Title}>Regels</h3>
      <ul className={styles.RulesList}>
        <li>Een * geeft aan dat het veld verplicht is.</li>
        <li>Als je geen flyer uploadt, gebruiken we automatisch onze eigen flyer.</li>
        <li>Voor vragen, wijzigingen of annuleringen van evenementen, stuur ons een bericht.</li>
      </ul>
    </div>
  );
};

export default Rules;
