import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  method: 'GET',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '91b11831e3msh9122937e710b495p1e0085jsn4bf51f1fe23f',
  },
}

export const getPlaceData = async () => {
  try {
    // request
    const {
      data: { data },
    } = await axios.get(URL, options)
    return data
  } catch (err) {
    console.trace(err.message)
  }
}
