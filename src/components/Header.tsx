'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';
import styles from './styles/Header.module.css';
import HamburgerMenu from '@/app/[locale]/index/components/HamburgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const strippedPath = pathname?.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '') || '/';
  const isPinkBackground =
    strippedPath === '/' ||
    strippedPath.startsWith('/event') ||
    strippedPath === '/events';

  return (
    <div className={`${isOpen ? styles.menuOpen : ''} ${isPinkBackground ? styles.headerHome : ''}`}>
      {!isOpen && (
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link href="/events">
              <Image
                src="/images/logo.svg"
                alt="Site Logo"
                width={225}
                height={225}
                priority
              />
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
