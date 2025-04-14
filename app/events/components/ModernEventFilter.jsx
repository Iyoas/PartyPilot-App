import React, { useState, useEffect } from 'react';
import { Box, Button, Chip, Collapse, Divider, Stack, Typography, IconButton, Drawer, useMediaQuery } from '@mui/material';
import { FaFilter } from "react-icons/fa6";
import { useTheme } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import ClearIcon from '@mui/icons-material/Clear';
import { FaCalendar, FaSearch } from 'react-icons/fa';
import { FaPassport } from 'react-icons/fa6';
import { MdFestival } from 'react-icons/md';
import { FaMusic } from 'react-icons/fa6';
import { BiSolidParty } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import dayjs from 'dayjs';
import styles from './styles/ModernEventFilter.module.css';
import ActiveFilters from './ActiveFilters';

const ModernEventFilter = ({ onFilterChange, onSearch, onApplyFilters }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerms, setSearchTerms] = useState([]); // New state for search terms

  // State for all filter types
  const [selectedDateRanges, setSelectedDateRanges] = useState([]);
  const [selectedAgeRanges, setSelectedAgeRanges] = useState([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedHolidays, setSelectedHolidays] = useState([]);

  // Count of active filters
  const activeFilterCount = 
    selectedDateRanges.length + 
    selectedAgeRanges.length + 
    selectedEventTypes.length + 
    selectedGenres.length + 
    selectedLocations.length + 
    selectedHolidays.length +
    searchTerms.length; // Include search terms in filter count

  // Notify parent component about filter changes
  useEffect(() => {
    const filters = {
      search: searchTerms.join(' '), // Combine all search terms
      dates: selectedDateRanges,
      ages: selectedAgeRanges,
      eventTypes: selectedEventTypes,
      genres: selectedGenres,
      locations: selectedLocations,
      holidays: selectedHolidays
    };
    
    if (onFilterChange) {
      onFilterChange(filters);
    }

    if (onApplyFilters) {
      const filterArray = [
        ...searchTerms, // Add search terms to filters
        ...selectedDateRanges,
        ...selectedAgeRanges,
        ...selectedEventTypes, 
        ...selectedGenres,
        ...selectedLocations,
        ...selectedHolidays
      ];
      onApplyFilters(filterArray);
    }
  }, [
    searchTerms, // Listen for changes in searchTerms instead of searchTerm
    selectedDateRanges, 
    selectedAgeRanges, 
    selectedEventTypes, 
    selectedGenres, 
    selectedLocations, 
    selectedHolidays,
    onFilterChange,
    onApplyFilters
  ]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClearAll = () => {
    setSearchTerm('');
    setSearchTerms([]); // Clear all search terms
    setSelectedDateRanges([]);
    setSelectedAgeRanges([]);
    setSelectedEventTypes([]);
    setSelectedGenres([]);
    setSelectedLocations([]);
    setSelectedHolidays([]);
  };

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  // Toggle selection functions for each filter type
  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems && selectedItems.includes && selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...(selectedItems || []), item]);
    }
  };

  const handleDateRangeChange = (dates) => {
    if (dates && dates.length === 2 && dates[0] && dates[1]) {
      const start = dayjs(dates[0]);
      const end = dayjs(dates[1]);
      setSelectedDateRanges([start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')]);
      setShowDatePicker(false); // Close date picker after selection
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchTerm.trim()) {
      // Add the search term to the list of search terms if it doesn't already exist
      if (!searchTerms.includes(searchTerm.trim())) {
        setSearchTerms([...searchTerms, searchTerm.trim()]);
      }
      
      // Call onSearch with all search terms including the new one
      if (onSearch) {
        const allTerms = [...searchTerms, searchTerm.trim()];
        onSearch(allTerms.join(' '));
      }
      
      // Reset searchTerm so the user can enter a new term
      setSearchTerm('');
    }
  };

  // Remove a specific search term
  const handleRemoveSearchTerm = (termToRemove) => {
    const updatedTerms = searchTerms.filter(term => term !== termToRemove);
    setSearchTerms(updatedTerms);
    
    // Update the search in the parent component
    if (onSearch) {
      onSearch(updatedTerms.join(' '));
    }
  };

  // Filter options
  const ageOptions = ['16+', '18+', '21+', '23+', '30+', '40+'];
  const eventTypeOptions = ['club', 'festival', 'rave', 'concert', 'boatparty', 'beachparty', 'blockparty', 'outdoor', 'rooftop'];
  const genreOptions = [
    '00s', '70s', '80s', '90s', 'Acid Techno', 'Afro', 'Afro House', 'Afro Tech', 'Afrobeat', 'Amapiano',
    'Bachata', 'Baile Funk', 'Carribean', 'Classical', 'Classics', 'Dancehall', 'Deep House', 'Disco',
    'Disco House', 'Drum & Bass', 'Early Hardcore', 'Early Hardstyle', 'Early Rave', 'Early Terror',
    'EDM', 'Electric', 'Electro', 'Electronic', 'Eurodance', 'Freestyle', 'Funk', 'Garage House', 'Groove',
    'Guilty Pleasures', 'Hard Techno', 'Hard Trance', 'Hardcore', 'Hip-Hop', 'Hits', 'House', 'Jazz',
    'Latin', 'Latin House', 'Melodic Techno', 'Nederlands', 'Oldschool', 'Pop', 'R&B', 'Reggae', 'Tech House',
    'Techno', 'Trance', 'UK Garage'
  ].sort();
  const locationOptions = [
    'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven', 'Groningen', 'Maastricht', 'Tilburg',
    'Leiden', 'Delft', 'Arnhem', 'Nijmegen', 'Haarlem', 'Breda', 'Almere', 'Zwolle', 'Gouda',
    'Haarlemmermeer', 'Dordrecht', 'Enschede'
  ].sort();
  const holidayOptions = [
    'Koningsdag', 'Nieuwjaarsdag', 'Pasen', 'Kerstmis', 'Oudjaarsavond', 'Carnaval', 
    'Bevrijdingsdag', 'Pinksteren', 'Hemelvaart', 'Goede Vrijdag', 'Halloween'
  ];
  const dateOptions = [
    'Vandaag', 'Morgen', 'Dit weekend', 'Deze week', 'Volgende week', 
    'Deze maand', 'Volgende maand'
  ];

  const renderFilterSection = (title, icon, options, selectedItems, setSelectedItems, filterKey) => {
    const isActive = activeFilter === filterKey;
    
    return (
      <Box sx={{ mb: 1.5 }}>
        <div 
          onClick={() => toggleFilter(filterKey)}
          className={`${styles.sectionBox} ${isActive ? styles.sectionBoxActive : ''}`}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.iconStyle}>
              {icon}
            </span>
            <span className={styles.sectionHeader}>{title}</span>
          </Box>
          {isActive ? 
            <IoIosArrowUp className={styles.arrowUp} /> : 
            <IoIosArrowDown className={styles.arrowDown} />
          }
        </div>
      
        
        <Collapse in={isActive}>
          <div className={styles.chipsContainer}>
            {filterKey === 'datum' && (
              <>
                {dateOptions.map(option => (
                  <Chip
                    key={option}
                    label={option}
                    onClick={() => toggleSelection(option, selectedItems, setSelectedItems)}
                    className={selectedItems && selectedItems.includes && selectedItems.includes(option) ? 
                      styles.chipSelected : 
                      styles.chipUnselected
                    }
                    size="small"
                  />
                ))}
                <Button
                  variant="outlined"
                  className={styles.dateButton}
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  Selecteer specifieke data
                </Button>
                
                {showDatePicker && (
                  <Box sx={{ width: '100%', mt: 2 }}>
                    <DatePickerComponent
                      startDate={selectedDateRanges[0] ? dayjs(selectedDateRanges[0]) : null}
                      endDate={selectedDateRanges[1] ? dayjs(selectedDateRanges[1]) : null}
                      onChange={handleDateRangeChange}
                      onClose={() => setShowDatePicker(false)}
                    />
                  </Box>
                )}
              </>
            )}
            
            {filterKey !== 'datum' && options && options.map && options.map(option => (
              <Chip
                key={option}
                label={option}
                onClick={() => toggleSelection(option, selectedItems, setSelectedItems)}
                className={selectedItems && selectedItems.includes && selectedItems.includes(option) ? 
                  styles.chipSelected : 
                  styles.chipUnselected
                }
                size="small"
              />
            ))}
          </div>
        </Collapse>
      </Box>
    );
  };

  const searchBar = (
    <form className={styles.searchContainer} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Zoek op stad, event, artiest..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className={styles.searchButton}>
        <FaSearch />
      </button>
    </form>
  );

  const filterContent = (
    <Box className={isMobile ? styles.mobileContentBox : styles.contentBox}>
      <div className={styles.headerBox}>
        <Typography variant="h6" component="h2" className={styles.filterTitle}>
          Filter op:
        </Typography>
        {isMobile && (
          <IconButton onClick={toggleDrawer} className={styles.closeIcon}>
            <CloseIcon />
          </IconButton>
        )}
      </div>

      <Box className={styles.filtersBox}>
        {renderFilterSection(
          'Datum', 
          <FaCalendar />, 
          [], 
          selectedDateRanges, 
          setSelectedDateRanges, 
          'datum'
        )}
        <Divider className={styles.divider} />
        
        {renderFilterSection(
          'Leeftijd', 
          <FaPassport />, 
          ageOptions, 
          selectedAgeRanges, 
          setSelectedAgeRanges, 
          'leeftijd'
        )}
        <Divider className={styles.divider} />
        
        {renderFilterSection(
          'Type Event', 
          <MdFestival />, 
          eventTypeOptions, 
          selectedEventTypes, 
          setSelectedEventTypes, 
          'type'
        )}
        <Divider className={styles.divider} />
        
        {renderFilterSection(
          'Genre', 
          <FaMusic />, 
          genreOptions, 
          selectedGenres, 
          setSelectedGenres, 
          'genre'
        )}
        <Divider className={styles.divider} />
        
        {renderFilterSection(
          'Locatie', 
          <FaLocationDot />, 
          locationOptions, 
          selectedLocations, 
          setSelectedLocations, 
          'locatie'
        )}
        <Divider className={styles.divider} />
        
        {renderFilterSection(
          'Feestdagen', 
          <BiSolidParty />, 
          holidayOptions, 
          selectedHolidays,
          setSelectedHolidays,
          'feestdagen'
        )}
      </Box>

      {activeFilterCount > 0 && (
        <Box sx={{ px: 1, mb: 1 }}>
          <Button 
            variant="outlined" 
            onClick={handleClearAll}
            startIcon={<ClearIcon />}
            className={styles.clearButton}
          >
            Wis alle filters
          </Button>
        </Box>
      )}
    </Box>
  );
  
  const renderActiveFilters = () => {
    const allSelectedItems = [
      ...selectedDateRanges.map(item => ({ type: 'Datum', value: item })),
      ...selectedAgeRanges.map(item => ({ type: 'Leeftijd', value: item })),
      ...selectedEventTypes.map(item => ({ type: 'Type Event', value: item })),
      ...selectedGenres.map(item => ({ type: 'Genre', value: item })),
      ...selectedLocations.map(item => ({ type: 'Locatie', value: item })),
      ...selectedHolidays.map(item => ({ type: 'Feestdag', value: item }))
    ];
    
    if (allSelectedItems.length === 0 && searchTerms.length === 0) return null;
    
    return (
      <Box className={styles.activeFiltersBox}>
        <Typography variant="body2" className={styles.activeFiltersTitle}>
          Geselecteerd:
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="nowrap" useFlexGap>
          {/* Display all search terms as chips */}
          {searchTerms.map((term, index) => (
            <Chip
              key={`search-term-${index}`}
              label={`Zoekterm: ${term}`}
              onDelete={() => handleRemoveSearchTerm(term)}
              className={styles.activeFilterChip}
              size="medium"
            />
          ))}
          
          {/* Display all other filters */}
          {allSelectedItems.map((filter, index) => (
            <Chip
              key={`${filter.type}-${filter.value}-${index}`}
              label={`${filter.type}: ${filter.value}`}
              onDelete={() => {
                switch(filter.type) {
                  case 'Datum':
                    setSelectedDateRanges(selectedDateRanges.filter(item => item !== filter.value));
                    break;
                  case 'Leeftijd':
                    setSelectedAgeRanges(selectedAgeRanges.filter(item => item !== filter.value));
                    break;
                  case 'Type Event':
                    setSelectedEventTypes(selectedEventTypes.filter(item => item !== filter.value));
                    break;
                  case 'Genre':
                    setSelectedGenres(selectedGenres.filter(item => item !== filter.value));
                    break;
                  case 'Locatie':
                    setSelectedLocations(selectedLocations.filter(item => item !== filter.value));
                    break;
                  case 'Feestdag':
                    setSelectedHolidays(selectedHolidays.filter(item => item !== filter.value));
                    break;
                  default:
                    break;
                }
              }}
              className={styles.activeFilterChip}
              size="medium"
            />
          ))}
        </Stack>
      </Box>
    );
  };

  return (
    <>
      <div className={styles.filterControls}>
        {searchBar}
        {isMobile && (
          <Button 
            variant="contained" 
            onClick={toggleDrawer}
            className={styles.filterButton}
            sx={{ ml: 1, minWidth: 'auto', boxShadow: 'none' }}
          >
            <FaFilter />
            {activeFilterCount > 0 ? 
              <span style={{ marginLeft: '2px' }}>{activeFilterCount}</span> : 
              null
            }
          </Button>
        )}
      </div>

      {isMobile && (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={toggleDrawer}
          PaperProps={{
            className: styles.drawerPaper
          }}
        >
          {filterContent}
        </Drawer>
      )}

      {!isMobile && (
        <Box className={styles.filterBox}>
          {filterContent}
        </Box>
      )}

      {renderActiveFilters()}
    </>
  );
};

export default ModernEventFilter;