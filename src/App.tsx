// App.tsx
import React, { useState } from 'react'

import { useGifs } from './useGifs'
import Grid from './Grid'
import Modal from './Modal'
import SearchBar from './SearchBar'
import { Gif } from './types'
import useSearch from './useSearch'

const App: React.FC = () => {
  const { searchQuery, handleSearch } = useSearch()
  const { data: gifs, isLoading } = useGifs(searchQuery)
  const [selectedGif, setSelectedGif] = useState<Gif | null>(null)

  return (
    <div>
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <Grid gifs={gifs} onClick={setSelectedGif} isLoading={isLoading} />
      {selectedGif && (
        <Modal gif={selectedGif} onClose={() => setSelectedGif(null)} />
      )}
    </div>
  )
}

export default App
