import React, { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ModernFilter from './ModernFilter';

const ExampleUsage = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    rating: '',
    location: '',
  });
  
  // This would be your venue data from your API or state
  const [venues] = useState([
    { id: 1, name: 'Downtown Bar', category: 'Bar', priceRange: '$$', rating: '4+ Stars', location: 'Downtown' },
    { id: 2, name: 'The Best Club', category: 'Club', priceRange: '$$$', rating: '5 Stars', location: 'Midtown' },
    { id: 3, name: 'Garden Restaurant', category: 'Restaurant', priceRange: '$$', rating: '3+ Stars', location: 'Suburbs' },
    // More venues...
  ]);
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  
  // Filter the venues based on selected filters
  const filteredVenues = venues.filter(venue => {
    return (
      (!filters.category || venue.category === filters.category) &&
      (!filters.priceRange || venue.priceRange === filters.priceRange) &&
      (!filters.rating || venue.rating === filters.rating) &&
      (!filters.location || venue.location === filters.location)
    );
  });
  
  return (
    <Container>
      <Typography variant="h4" component="h1" sx={{ mt: 4, mb: 3 }}>
        Find Your Perfect Venue
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <ModernFilter onFilterChange={handleFilterChange} />
        </Grid>
        
        <Grid item xs={12} md={9}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Showing {filteredVenues.length} venues
          </Typography>
          
          {/* Your venue cards/list would go here */}
          {filteredVenues.map(venue => (
            <div key={venue.id} style={{
              padding: '16px',
              marginBottom: '16px',
              border: '1px solid #eee',
              borderRadius: '8px'
            }}>
              <Typography variant="h6">{venue.name}</Typography>
              <Typography variant="body2">
                {venue.category} • {venue.priceRange} • {venue.rating} • {venue.location}
              </Typography>
            </div>
          ))}
          
          {filteredVenues.length === 0 && (
            <Typography variant="body1" sx={{ textAlign: 'center', py: 4 }}>
              No venues match your filters. Try adjusting your search criteria.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExampleUsage;