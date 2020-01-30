import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../components/Header'

import { Container, Content, CheckinButton } from './styles'

function Checkins () {
  function handleCheckin () {
    console.log('checkin')
  }

  return (
    <Container>
      <Header />
      <Content>
        <CheckinButton onPress={handleCheckin}>Novo check-in</CheckinButton>
      </Content>
    </Container>
  )
}

export default Checkins
