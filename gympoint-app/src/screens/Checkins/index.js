import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../components/Header'

import {
  Container,
  Content,
  CheckinButton,
  CheckinsList,
  CheckinCard
} from './styles'

const data = [
  {
    id: 1,
    createdAt: 'Há 4 dias'
  },
  {
    id: 2,
    createdAt: 'Há 1 semana'
  },
  {
    id: 3,
    createdAt: 'Ontem às 20h'
  }
]

function Checkins () {
  function handleCheckin () {
    console.log('checkin')
  }

  return (
    <Container>
      <Header />
      <Content>
        <CheckinButton onPress={handleCheckin}>Novo check-in</CheckinButton>
        <CheckinsList
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <CheckinCard checkin={item} />}
        />
      </Content>
    </Container>
  )
}

export default Checkins
