import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Grid from './Grid'
import { Gif } from '../types'
import { describe, it, expect, vi } from 'vitest'

describe('Grid Component', () => {
  const gifs = [
    {
      id: '1',
      title: 'GIF 1',
      images: { original: { url: 'https://example.com/1.gif' } },
    } as Gif,
    {
      id: '2',
      title: 'GIF 2',
      images: { original: { url: 'https://example.com/2.gif' } },
    } as Gif,
  ]

  it('should render GIFs and make them focusable', () => {
    render(<Grid gifs={gifs} onClick={() => {}} isLoading={false} />)

    const gifItems = screen.getAllByRole('button')
    expect(gifItems.length).toBe(gifs.length)

    gifItems.forEach((gifItem) => {
      expect(gifItem).toHaveAttribute('tabIndex', '0')
    })
  })

  it('should open the modal when pressing Enter or Space', () => {
    const handleClick = vi.fn()
    render(<Grid gifs={gifs} onClick={handleClick} isLoading={false} />)

    const gifItem = screen.getAllByRole('button')[0]

    fireEvent.keyDown(gifItem, { key: 'Enter', code: 'Enter' })
    expect(handleClick).toHaveBeenCalled()

    fireEvent.keyDown(gifItem, { key: ' ', code: 'Space' })
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
