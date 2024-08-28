import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { debounce } from 'lodash'

const useSearch = (initialQuery = '') => {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryParam = searchParams.get('query') || initialQuery
  const [searchQuery, setSearchQuery] = useState(queryParam)

  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ query: searchQuery })
    } else {
      setSearchParams({})
    }
  }, [searchQuery, setSearchParams])

  const handleSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query)
    }, 500),
    [],
  )

  return { searchQuery, handleSearch }
}

export default useSearch
