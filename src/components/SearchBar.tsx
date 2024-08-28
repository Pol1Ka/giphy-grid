import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`

interface SearchBarProps {
  searchQuery: string
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearch }) => {
  const [query, setQuery] = React.useState(searchQuery)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for GIFs..."
        value={query}
        onChange={handleInputChange}
      />
    </SearchContainer>
  )
}

export default SearchBar
