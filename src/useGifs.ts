import { useQuery } from 'react-query'
import axios from 'axios'
import { Gif } from './types'

const API_KEY = '2vVTTOTDCPYTJrOaX3XXoYf4q7CVe0jG'

const fetchGifs = async (query: string) => {
  const url = query
    ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25`
    : `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25`
  const { data } = await axios.get(url)
  return data.data
}

export const useGifs = (query: string) => {
  return useQuery<Gif[]>(['gifs', query], () => fetchGifs(query), {
    enabled: !!query || query === '',
  })
}
