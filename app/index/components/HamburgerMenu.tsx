'use client';

import React from 'react';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import styles from './styles/HamburgerMenu.module.css';
import styles2 from './styles/Header.module.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";

interface HamburgerMenuProps {
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleMenu }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.HeaderOfMenu}>
        <div className={styles2.logo}>
          <Image
            src="/images/logo.svg"
            alt="Site Logo"
            width={225}
            height={225}
            priority 
          />
        </div>
        <div className={styles.CrossContainer} onClick={toggleMenu}>
          <RxCross1 className={styles.cross} />
        </div>
      </div>
      <div className={styles.menuList}>
        <a href="http://localhost:3000/events" className={styles.special}>Event toevoegen <IoTicketSharp /> </a>
        <a href="http://localhost:3000/events">Party Agenda <MdOutlineArrowForwardIos className={styles.right_arrow}/> </a>
        <a href="http://localhost:3000/about-us">Over ons<MdOutlineArrowForwardIos className={styles.right_arrow}/> </a>
        <a href="http://localhost:3000/contact">Contact <MdOutlineArrowForwardIos className={styles.right_arrow}/> </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
