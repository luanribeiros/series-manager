import axios from 'axios'
import NewSeries from './NewSeries';

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (NewSeries) => api.post('series', NewSeries)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)
export const deleteSeries = (id) => api.delete('series/'+id)

const apis = {
  loadGenres,
  saveSeries,
  loadSeriesByGenre,
  deleteSeries
}

export default apis