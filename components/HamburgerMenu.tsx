'use client'; // Dit markeert dit bestand als een Client Component

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Zorg ervoor dat je react-icons hebt geïnstalleerd
import styles from './styles/HamburgerMenu.module.css'; 

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.hamburgerContainer} onClick={toggleMenu}>
        <GiHamburgerMenu className={styles.hamburger} />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
