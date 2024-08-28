import React from 'react'
import styled from 'styled-components'
import { Gif } from './types'

interface GridProps {
  gifs: Gif[]
  onClick: (gif: Gif) => void
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

const Grid: React.FC<GridProps> = ({ gifs, onClick }) => {
  return (
    <GridContainer>
      {gifs.map((gif) => (
        <GridItem key={gif.id} onClick={() => onClick(gif)}>
          <Image src={gif.images.original.url} alt={gif.title} />
          <Title>{gif.title}</Title>
        </GridItem>
      ))}
    </GridContainer>
  )
}

export default Grid
