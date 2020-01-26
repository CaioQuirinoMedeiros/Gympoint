import React from 'react'

import { Container } from './styles'

function Modal ({ visible, close, children }) {
  function handleClick (e) {
    if (e.target === e.currentTarget) {
      close()
    }
  }

  React.useEffect(() => {
    const body = document.body
    if (visible) {
      body.classList.add('no-scroll')
    } else {
      body.classList.remove('no-scroll')
    }
  }, [visible])

  return visible ? (
    <Container onMouseDown={handleClick}>{children}</Container>
  ) : null
}

export default Modal
