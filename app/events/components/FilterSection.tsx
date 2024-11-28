'use client';

import React, { useState } from 'react';
import HeroSection from './HeroSection';
import FilterOptions from './FilterOptions';
import styles from './styles/FilterSection.module.css';

interface FilterSectionProps {}

const FilterSection: React.FC<FilterSectionProps> = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleRemoveFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const handleSearch = (searchTerm: string) => {
    if (searchTerm && !filters.includes(searchTerm)) {
      setFilters([...filters, searchTerm]);
    }
  };

  return (
    <div>
      <HeroSection onSearch={handleSearch} />
      <FilterOptions filters={filters} onRemoveFilter={handleRemoveFilter} />
    </div>
  );
};

export default FilterSection;
