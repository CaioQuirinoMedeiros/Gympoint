import React from 'react'

import Header from '~/components/Header'

import { Container } from './styles'

export default function App({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
