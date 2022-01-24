import React, { useState } from 'react';
import useStyles from './styles.js';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
} from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const places = [
    { name: 'Cool Place' },
    { name: 'Best Beer' },
    { name: 'Best Steak' },
    { name: 'Cool Place' },
    { name: 'Best Beer' },
    { name: 'Best Steak' },
    { name: 'Cool Place' },
    { name: 'Best Beer' },
    { name: 'Best Steak' },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h4">
        Food & Dining around you
      </Typography>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
        className={classes.formControl}
      >
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
