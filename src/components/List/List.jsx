import React, { useState, useEffect, createRef } from 'react'
import useStyles from './styles.js'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
  CircularProgress,
} from '@mui/material'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles()

  const [elRefs, setElRefs] = useState([])

  // TODO: new method of console.log
  // console.log({ childClicked })

  //TODO: _ in map means we don't use 1st parameter need the 2nd One
  useEffect(() => {
    console.log('refs', { childClicked })
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    )
  }, [places])

  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h4">
        Food & Dining around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
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
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

export default List
