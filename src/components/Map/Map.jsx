import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import useStyles from './styles.js';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');

  const coordinates = {
    lat: 0,
    lng: 0,
  };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAHVOtK9Xi6p6bJrZuDTqqmcW8BY4hoWEY' }}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
