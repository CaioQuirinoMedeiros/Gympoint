import styled from 'styled-components'

import ButtonComponent from '../../components/Button'
import CheckinCardComponent from './CheckinCard'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.dimLight};
`

export const Content = styled.View`
  margin: 20px;
`

export const CheckinButton = styled(ButtonComponent)`
  margin-bottom: 10;
`

export const CheckinsList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: 5
  }
})``

export const CheckinCard = styled(CheckinCardComponent)`
  margin-vertical: 5;
`
