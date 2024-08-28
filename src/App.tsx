// App.tsx
import React, { useState } from 'react'

import { useGifs } from './components/useGifs'
import Grid from './components/Grid'
import Modal from './components/Modal'
import SearchBar from './components/SearchBar'
import useSearch from './components/useSearch'

import { Gif } from './types'

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
