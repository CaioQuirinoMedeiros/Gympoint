import React from 'react'

import Header from '~/components/Header'

import { Container, Content } from './styles'

export default function App({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  )
}
