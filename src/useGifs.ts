import { useQuery } from 'react-query'
import axios from 'axios'
import { Gif } from './types'

const API_KEY = '2vVTTOTDCPYTJrOaX3XXoYf4q7CVe0jG'
const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25`

const fetchGifs = async () => {
  const { data } = await axios.get(API_URL)
  return data.data
}

export const useGifs = () => {
  return useQuery<Gif[]>('gifs', fetchGifs)
}
