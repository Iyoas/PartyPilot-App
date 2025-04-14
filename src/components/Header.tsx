'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';  // Importeer Link van Next.js
import styles from './styles/Header.module.css';
import HamburgerMenu from '@/app/index/components/HamburgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Effect om de overflow van de body aan te passen wanneer het menu open of gesloten is
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // voorkomt scrollen wanneer het menu open is
    } else {
      document.body.style.overflow = 'auto'; // laat scrollen toe wanneer het menu gesloten is
    }

    return () => {
      document.body.style.overflow = 'auto'; // zorg ervoor dat de overflow wordt hersteld wanneer de component wordt unmounted
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isPinkBackground = pathname === '/' || pathname.startsWith('/event') || pathname === '/events';

  return (
    <div className={`${isOpen ? styles.menuOpen : ''} ${isPinkBackground ? styles.headerHome : ''}`}>
      {!isOpen && (
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link href="/events">  {/* Voeg een Link toe rond de afbeelding van het logo */}
              <a>
                <Image
                  src="/images/logo.svg"
                  alt="Site Logo"
                  width={225}
                  height={225}
                  priority
                />
              </a>
            </Link>
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
