'use client';
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import FilterOptions from './FilterOptions';
import FilterMenu from './FilterMenu';
import styles from './styles/FilterSection.module.css';

const FilterSection: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]); // Array van filters
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false); // Of het filtermenu open is

  const handleRemoveFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const handleSearch = (searchTerm: string) => {
    if (searchTerm && !filters.includes(searchTerm)) {
      setFilters([...filters, searchTerm]);
    }
  };

  const handleApplyFilters = (appliedFilters: string[]) => {
    setFilters(appliedFilters);  // Update de filters in FilterSection
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <div>
      {/* HeroSection met zoekfunctionaliteit */}
      <HeroSection onSearch={handleSearch} onApplyFilters={handleApplyFilters} />
      
      {/* FilterMenu */}
      <FilterMenu 
        isOpen={isFilterMenuOpen}
        closeMenu={toggleFilterMenu}
        onApplyFilters={handleApplyFilters}
      />
      
      {/* FilterOpties met geselecteerde filters */}
      <FilterOptions filters={filters} onRemoveFilter={handleRemoveFilter} />
    </div>
  );
};

export default FilterSection;
