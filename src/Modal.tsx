import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Gif } from './types'

interface ModalProps {
  gif: Gif
  onClose: () => void
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
`

const ModalImage = styled.img`
  width: 100%;
  height: auto;
`

const ModalTitle = styled.h2`
  margin-top: 10px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  aria-label: 'Close modal'; // Add aria-label for screen readers
`

const Modal: React.FC<ModalProps> = ({ gif, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const lastFocusedElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    lastFocusedElementRef.current = document.activeElement as HTMLElement

    if (modalRef.current) {
      modalRef.current.focus()
    }

    return () => {
      if (lastFocusedElementRef.current) {
        lastFocusedElementRef.current.focus()
      }
    }
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  return (
    <ModalOverlay onClick={onClose} aria-modal="true">
      <ModalContent
        ref={modalRef}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalImage src={gif.images.original.url} alt={gif.title} />
        <ModalTitle>{gif.title}</ModalTitle>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
