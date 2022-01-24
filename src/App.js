import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@mui/material'
import { getPlaceData } from './api/index'
import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Map from './components/Map/Map.jsx'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'

const App = () => {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    getPlaceData().then((data) => {
      console.log('places data: ', data)
      setPlaces(data)
    })
  }, [])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sx={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  )
}

export default App
