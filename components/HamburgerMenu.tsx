'use client';

import React from 'react';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import styles from './styles/HamburgerMenu.module.css';
import styles2 from './styles/Header.module.css';
import { MdOutlineArrowForwardIos,MdOutlineFestival } from "react-icons/md";
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
      <a href="#add" className={styles.special}>Event toevoegen <IoTicketSharp /> </a>
        <a href="#agenda">Party Agenda <MdOutlineArrowForwardIos className={styles.right_arrow}/> </a>
        <a href="#services">Over ons<MdOutlineArrowForwardIos className={styles.right_arrow}/> </a>
        <a href="#contact">Contact <MdOutlineArrowForwardIos className={styles.right_arrow}/> </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
