import React from 'react';
import Image from 'next/image';
import styles from './styles/Header.module.css'; 


const Header = () => {
  return (
          <div className={styles.logo}>  
            <Image
                  src="/images/logo.svg" // Pad naar je logo in de public map
                  alt="Site Logo"
                  width={250} // Pas de breedte aan naar behoefte
                  height={250} // Pas de hoogte aan naar behoefte
                />
          </div>
  );
};

export default Header;
