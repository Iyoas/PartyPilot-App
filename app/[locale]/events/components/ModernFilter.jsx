import React, { useState, useEffect } from 'react';
import { Box, Button, Chip, FormControl, InputLabel, MenuItem, Select, Stack, Typography, IconButton, Drawer, useMediaQuery, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import ClearIcon from '@mui/icons-material/Clear';

const ModernFilter = ({ onFilterChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    rating: '',
    location: '',
  });
  const [activeFilters, setActiveFilters] = useState([]);

  // List of available options for each filter type
  const filterOptions = {
    category: ['Restaurant', 'Bar', 'Club', 'Event Space', 'Outdoor'],
    priceRange: ['$', '$$', '$$$', '$$$$'],
    rating: ['5 Stars', '4+ Stars', '3+ Stars'],
    location: ['Downtown', 'Uptown', 'Midtown', 'Suburbs']
  };

  // Update active filters when filters change
  useEffect(() => {
    const newActiveFilters = [];
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        newActiveFilters.push({ type: key, value });
      }
    });
    setActiveFilters(newActiveFilters);
    
    // Notify parent component about filter changes
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRemoveFilter = (filterType) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: ''
    }));
  };

  const handleClearAll = () => {
    setFilters({
      category: '',
      priceRange: '',
      rating: '',
      location: '',
    });
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const filterContent = (
    <Box sx={{ p: 3, width: isMobile ? '100%' : '350px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" component="h2" fontWeight="bold">
          Filters
        </Typography>
        {isMobile && (
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Stack spacing={3}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            label="Category"
          >
            <MenuItem value=""><em>Any</em></MenuItem>
            {filterOptions.category.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth variant="outlined">
          <InputLabel>Price Range</InputLabel>
          <Select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
            label="Price Range"
          >
            <MenuItem value=""><em>Any</em></MenuItem>
            {filterOptions.priceRange.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth variant="outlined">
          <InputLabel>Rating</InputLabel>
          <Select
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
            label="Rating"
          >
            <MenuItem value=""><em>Any</em></MenuItem>
            {filterOptions.rating.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth variant="outlined">
          <InputLabel>Location</InputLabel>
          <Select
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            label="Location"
          >
            <MenuItem value=""><em>Any</em></MenuItem>
            {filterOptions.location.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button 
          variant="outlined" 
          color="primary" 
          onClick={handleClearAll}
          startIcon={<ClearIcon />}
        >
          Clear All Filters
        </Button>
      </Stack>
    </Box>
  );

  return (
    <>
      {/* Mobile view: Filter button and drawer */}
      {isMobile && (
        <>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={toggleDrawer}
            startIcon={<FilterListIcon />}
            sx={{ mb: 2 }}
          >
            Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
          </Button>
          
          <Drawer
            anchor="bottom"
            open={open}
            onClose={toggleDrawer}
            PaperProps={{
              sx: { 
                borderTopLeftRadius: '16px', 
                borderTopRightRadius: '16px',
                maxHeight: '90vh'
              }
            }}
          >
            {filterContent}
          </Drawer>
        </>
      )}

      {/* Desktop view: Always visible filter panel */}
      {!isMobile && (
        <Box sx={{ 
          border: `1px solid ${theme.palette.divider}`, 
          borderRadius: 2, 
          overflow: 'hidden',
          mb: 3
        }}>
          {filterContent}
        </Box>
      )}

      {/* Active filter chips - shown in both mobile and desktop views */}
      {activeFilters.length > 0 && (
        <Box sx={{ mb: 3, mt: 1 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {activeFilters.map((filter) => (
              <Chip
                key={filter.type}
                label={`${filter.type.charAt(0).toUpperCase() + filter.type.slice(1)}: ${filter.value}`}
                onDelete={() => handleRemoveFilter(filter.type)}
                color="primary"
                variant="outlined"
                sx={{ m: 0.5 }}
              />
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
};

export default ModernFilter;