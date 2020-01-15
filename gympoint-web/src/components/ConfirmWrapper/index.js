import React, { useEffect, useRef, useState, useCallback } from 'react'

import { Wrapper } from './styles'

function ConfirmWrapper({ children, onClick }) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const timeout = useRef()

  const closeConfirmation = useCallback(() => {
    clearTimeout(timeout.current)
    setConfirmOpen(false)
    window.removeEventListener('click', closeConfirmation)
  }, [])

  function handleClick() {
    if (confirmOpen) {
      onClick()
      setConfirmOpen(false)
    }

    setConfirmOpen(!confirmOpen)
  }

  useEffect(() => {
    return closeConfirmation
  }, [closeConfirmation])

  useEffect(() => {
    if (confirmOpen) {
      window.addEventListener('click', closeConfirmation)
      timeout.current = setTimeout(closeConfirmation, 5000)
    }
  }, [closeConfirmation, confirmOpen])

  return (
    <Wrapper onClick={handleClick} open={confirmOpen}>
      {children}
    </Wrapper>
  )
}

export default ConfirmWrapper
