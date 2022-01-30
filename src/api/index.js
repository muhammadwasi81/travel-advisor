import axios from 'axios'

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        },
      }
    )
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      `https://community-open-weather-map.p.rapidapi.com/weather`,
      {
        params: {
          lon: lng,
          lat: lat,
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
        },
      }
    )

    console.log(data)
    return data
  } catch (err) {
    console.log(err.message)
  }
}
