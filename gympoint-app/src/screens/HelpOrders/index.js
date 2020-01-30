import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import HelpOrdersActions from '../../store/modules/helpOrders/actions'

import Header from '../../components/Header'

import {
  Container,
  Content,
  HelpOrderButton,
  HelpOrdersList,
  HelpOrderCard
} from './styles'

function HelpOrders ({ navigation }) {
  const helpOrders = useSelector(({ helpOrders }) => helpOrders.data)
  const fetching = useSelector(({ helpOrders }) => helpOrders.fetching)
  const creating = useSelector(({ helpOrders }) => helpOrders.creating)

  const dispatch = useDispatch()

  useEffect(() => {
    getHelpOrders()
  }, [])

  function getHelpOrders () {
    dispatch(HelpOrdersActions.getRequest())
  }

  function handleNewHelpOrder () {
    navigation.navigate('NewHelpOrder')
  }

  function handleHelpOrder (helpOrder) {
    navigation.navigate('Answer', { helpOrder })
  }

  return (
    <Container>
      <Header />
      <Content>
        <HelpOrderButton onPress={handleNewHelpOrder} loading={creating}>
          Novo pedido de auxílio
        </HelpOrderButton>
        <HelpOrdersList
          data={helpOrders}
          keyExtractor={item => `${item.id}`}
          refreshing={fetching}
          onRefresh={getHelpOrders}
          renderItem={({ item }) => (
            <HelpOrderCard
              helpOrder={item}
              onPress={() => handleHelpOrder(item)}
            />
          )}
        />
      </Content>
    </Container>
  )
}

export default HelpOrders
