import styled from 'styled-components'

import ButtonComponent from '../../components/Button'
import HelpOrderCardComponent from './HelpOrderCard'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.dimLight};
`

export const Content = styled.View`
  flex: 1;
  margin: 20px 20px 0 20px;
`

export const HelpOrderButton = styled(ButtonComponent)`
  margin-bottom: 10;
`

export const HelpOrdersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 5
  }
})``

export const HelpOrderCard = styled(HelpOrderCardComponent)`
  margin-vertical: 5;
`
