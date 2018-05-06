import axios from 'axios'
import NewSeries from './NewSeries';

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (NewSeries) => api.post('series', NewSeries)
export const loadSeriesByGenrew = (genre) => api.get('series?genre='+genre)

const apis = {
  loadGenres,
  saveSeries,
  loadSeriesByGenrew
}

export default apis