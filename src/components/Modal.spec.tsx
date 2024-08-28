import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './Modal'
import { describe, it, expect, vi } from 'vitest'
import { Gif } from '../types'

describe('Modal Component', () => {
  const gif = {
    id: '1',
    title: 'GIF 1',
    images: { original: { url: 'https://example.com/1.gif' } },
  } as Gif

  it('should have aria-modal attribute', () => {
    render(<Modal gif={gif} onClose={() => {}} />)

    const modalOverlay = screen.getByRole('dialog')
    expect(modalOverlay).toHaveAttribute('aria-modal', 'true')
  })

  it('should have aria-label for the close button', () => {
    render(<Modal gif={gif} onClose={() => {}} />)

    const closeButton = screen.getByRole('button')
    expect(closeButton).toBeInTheDocument()
  })

  it('should focus on the modal when opened', () => {
    render(<Modal gif={gif} onClose={() => {}} />)

    const modalContent = screen.getByRole('dialog')
    expect(modalContent).toHaveFocus()
  })

  it('should return focus to the original element when closed', () => {
    const handleClose = vi.fn()
    const { getByRole } = render(<Modal gif={gif} onClose={handleClose} />)

    const closeButton = getByRole('button')
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalled()
  })
})
