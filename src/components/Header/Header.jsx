import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useStyles } from './styles.js'
import Search from '@mui/icons-material/Search'

const Header = ({ setCoordinates }) => {
  const [autoComplete, setAutoComplete] = useState(null)
  const classes = useStyles()

  const onLoad = (autoC) => {
    setAutoComplete(autoC)
  }

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat()
    const lng = autoComplete.getPlace().geometry.location.lng()

    setCoordinates({ lat, lng })
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography
              variant="h6"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Explore new places
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.searchIconWrapper}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  className={classes.InputBase}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
