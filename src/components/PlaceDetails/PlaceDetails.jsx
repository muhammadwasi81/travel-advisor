import React from 'react'
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating,
} from '@mui/material'
import useStyles from './styles.js'
import AddLocationIcon from '@mui/icons-material/AddLocation'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles()

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <Card elevation={6}>
      <CardMedia
        sx={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        title={place.name}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Rating name="readonly" value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        <Box
          my={1}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <LocalPhoneIcon sx={{ fontSize: '30px', color: '#000000' }} />{' '}
          {place.phone}
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <AddLocationIcon
              sx={{ fontSize: '30px', color: '#000000', mt: 1 }}
            />
            {place.address}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, '_blank')}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, '_blank')}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlaceDetails
