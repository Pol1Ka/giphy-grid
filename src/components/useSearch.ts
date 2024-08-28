import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { debounce } from 'lodash'

const useSearch = (
  initialQuery = '',
): {
  searchQuery: string
  handleSearch: (query: string) => void
} => {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query)
    }, 500),
    [],
  )

  return { searchQuery, handleSearch }
}

export default useSearch
