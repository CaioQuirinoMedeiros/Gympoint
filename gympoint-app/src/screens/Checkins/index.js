import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CheckinsActions from '../../store/modules/checkins/actions'

import Header from '../../components/Header'

import {
  Container,
  Content,
  CheckinButton,
  CheckinsList,
  CheckinCard
} from './styles'

function Checkins () {
  const checkins = useSelector(({ checkins }) => checkins.data)
  const fetching = useSelector(({ checkins }) => checkins.fetching)
  const creating = useSelector(({ checkins }) => checkins.creating)

  const dispatch = useDispatch()

  useEffect(() => {
    getCheckins()
  }, [])

  useEffect(() => {
    console.log('checkins: ', checkins)
  }, [checkins])

  function getCheckins () {
    dispatch(CheckinsActions.getRequest())
  }

  function handleCheckin () {
    dispatch(CheckinsActions.createRequest())
  }

  return (
    <Container>
      <Header />
      <Content>
        <CheckinButton onPress={handleCheckin} loading={creating}>
          Novo check-in
        </CheckinButton>
        <CheckinsList
          data={checkins}
          keyExtractor={item => `${item.id}`}
          refreshing={fetching}
          onRefresh={getCheckins}
          renderItem={({ item }) => <CheckinCard checkin={item} />}
        />
      </Content>
    </Container>
  )
}

export default Checkins
