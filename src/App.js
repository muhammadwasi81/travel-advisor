import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@mui/material'
import { getPlacesData } from './api/index'
import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Map from './components/Map/Map.jsx'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'

const App = () => {
  const [places, setPlaces] = useState([])
  const [childClicked, setChildClicked] = useState(null)

  const [coordinates, setCoordinates] = useState({})

  const [isLoading, setIsLoading] = useState(false)
  const [coords, setCoords] = useState({})
  const [bounds, setBounds] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      setPlaces(data)
      setIsLoading(false)
    })
  }, [coordinates, bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sx={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
