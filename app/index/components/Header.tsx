'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import styles from './styles/Header.module.css';
import HamburgerMenu from '../components/HamburgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu toggled. Is open:', !isOpen);
  };

  return (
    <div className={isOpen ? styles.menuOpen : ''}> 
      {!isOpen && (
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.svg"
              alt="Site Logo"
              width={225}
              height={225}
              priority 
            />
          </div>
          <div className={styles.hamburgerContainer} onClick={toggleMenu}>
            <IoMenu className={styles.hamburger} />
          </div>
        </div>
      )}
      {isOpen && <HamburgerMenu toggleMenu={toggleMenu} />} {/* Pass the toggleMenu prop */}
    </div>
  );
};

export default Header;
