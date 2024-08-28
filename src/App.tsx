import React, { useState } from 'react'
import { useGifs } from './useGifs'
import Grid from './Grid'
import Modal from './Modal'
import { Gif } from './types'

const App: React.FC = () => {
  const { data: gifs, isLoading } = useGifs()
  const [selectedGif, setSelectedGif] = useState<Gif | null>(null)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {gifs && <Grid gifs={gifs} onClick={setSelectedGif} />}
      {selectedGif && (
        <Modal gif={selectedGif} onClose={() => setSelectedGif(null)} />
      )}
    </>
  )
}

export default App
