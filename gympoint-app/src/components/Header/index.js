import React from 'react'
import { withNavigation } from 'react-navigation'

import { Container, Logo, BackButton } from './styles'

function Header ({ navigation, canGoBack }) {
  return (
    <Container>
      {canGoBack && <BackButton onPress={() => navigation.goBack()} />}
      <Logo />
    </Container>
  )
}

export default withNavigation(Header)
