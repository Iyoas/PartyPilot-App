import React from 'react';
import { Chip, Stack, Typography } from '@mui/material';
import styles from './ActiveFilters.module.css';

const ActiveFilters = ({ filters, onRemoveFilter }) => {
  const {
    searchTerms = [],
    selectedDateRanges = [],
    selectedAgeRanges = [],
    selectedEventTypes = [],
    selectedGenres = [],
    selectedLocations = [],
    selectedHolidays = []
  } = filters;

  const filterMap = [
    { type: 'Zoekterm', key: 'searchTerms', items: searchTerms },
    { type: 'Datum', key: 'selectedDateRanges', items: selectedDateRanges },
    { type: 'Leeftijd', key: 'selectedAgeRanges', items: selectedAgeRanges },
    { type: 'Type Event', key: 'selectedEventTypes', items: selectedEventTypes },
    { type: 'Genre', key: 'selectedGenres', items: selectedGenres },
    { type: 'Locatie', key: 'selectedLocations', items: selectedLocations },
    { type: 'Feestdag', key: 'selectedHolidays', items: selectedHolidays }
  ];

  const hasFilters = filterMap.some(group => group.items.length > 0);
  if (!hasFilters) return null;

  return (
    <>
      <h1>Actieve filters</h1> {/* Zorg ervoor dat deze altijd zichtbaar is */}
      {hasFilters && (
        <div className={styles.activeFiltersContainer}>
          <Typography variant="body2" className={styles.title}>Actieve filters:</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {filterMap.map(group => (
              group.items.map((item, index) => (
                <Chip
                  key={`${group.type}-${item}-${index}`}
                  label={`${group.type}: ${item}`}
                  onDelete={() => onRemoveFilter(group.key, item)}
                  className={styles.filterChip}
                  size="medium"
                />
              ))
            ))}
          </Stack>
        </div>
      )}
    </>
  );
};

export default ActiveFilters;
