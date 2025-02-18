// SearchFilter.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/FilterMenu.module.css';

const SearchFilter = () => {
  const router = useRouter();

  // Dit stuurt de gebruiker naar de zoekpagina
  const handleSearchRedirect = () => {
    router.push('#search-section'); // Dit zorgt ervoor dat we naar de sectie met de zoekbalk gaan
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterOptionSearchFilter} onClick={handleSearchRedirect}>
        <div className={styles.FilterRow}>
          <span className={styles.dateFilterText}>
            Kun je je filter niet vinden? Klik dan hier!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
