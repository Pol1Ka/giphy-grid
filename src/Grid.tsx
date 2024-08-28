import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Gif } from './types'

interface GridProps {
  gifs?: Gif[]
  onClick: (gif: Gif) => void
  isLoading: boolean
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
`

const GridItem = styled.div`
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
  cursor: pointer;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  object-fit: cover;
`

const Title = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 8px;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`

const Grid: React.FC<GridProps> = ({ gifs, onClick, isLoading }) => {
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    gif: Gif,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick(gif)
    }
  }
  if (isLoading || !gifs) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    )
  }

  return (
    <GridContainer>
      {gifs.map((gif) => (
        <GridItem
          key={gif.id}
          tabIndex={0}
          role="button"
          aria-label={`Open modal for ${gif.title}`}
          onClick={() => onClick(gif)}
          onKeyDown={(event) => handleKeyDown(event, gif)}
        >
          <Image src={gif.images.original.url} alt={gif.title} />
          <Title>{gif.title}</Title>
        </GridItem>
      ))}
    </GridContainer>
  )
}

export default Grid
