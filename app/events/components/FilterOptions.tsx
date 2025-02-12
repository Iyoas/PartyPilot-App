'use client';
import React from 'react';
import { RxCross2 } from "react-icons/rx";
import styles from './styles/FilterOptions.module.css';

interface FilterOptionsProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ filters = [], onRemoveFilter }) => {
  if (!filters || filters.length === 0) return null;

  return (
    <div className={styles.FilterOptions}>
      {filters.map((filter, index) => (
        <div key={index} className={styles.FilterTag}>
          {filter}
          <button className={styles.RemoveButton} onClick={() => onRemoveFilter(filter)}>
            <RxCross2 className={styles.CrossIcon} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;
