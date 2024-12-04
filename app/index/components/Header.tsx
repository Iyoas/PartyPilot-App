'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import the usePathname hook
import { IoMenu } from 'react-icons/io5';
import styles from './styles/Header.module.css';
import HamburgerMenu from '../components/HamburgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu toggled. Is open:', !isOpen);
  };

  
  const isPinkBackground = pathname === '/' || pathname.startsWith('/event') || pathname === '/events';

  return (
    <div className={`${isOpen ? styles.menuOpen : ''} ${isPinkBackground ? styles.headerHome : ''}`}>
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
      {isOpen && <HamburgerMenu toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Header;
