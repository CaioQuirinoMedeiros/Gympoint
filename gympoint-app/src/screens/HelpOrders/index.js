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

  useEffect(() => {
    console.log('helpOrders: ', helpOrders)
  }, [helpOrders])

  function getHelpOrders () {
    dispatch(HelpOrdersActions.getRequest())
  }

  function handleCheckin () {
    // navigation.navigate('NewHelpOrder')
    getHelpOrders()
  }

  return (
    <Container>
      <Header />
      <Content>
        <HelpOrderButton onPress={handleCheckin} loading={creating}>
          Novo pedido de auxílio
        </HelpOrderButton>
        <HelpOrdersList
          data={helpOrders}
          keyExtractor={item => `${item.id}`}
          refreshing={fetching}
          onRefresh={getHelpOrders}
          renderItem={({ item }) => <HelpOrderCard helpOrder={item} />}
        />
      </Content>
    </Container>
  )
}

export default HelpOrders
