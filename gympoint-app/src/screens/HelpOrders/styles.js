import styled from 'styled-components'

import ButtonComponent from '../../components/Button'
import HelpOrderCardComponent from './HelpOrderCard'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.dimLight};
  border: 1px solid green;
`

export const Content = styled.View`
  margin: 20px;
`

export const HelpOrderButton = styled(ButtonComponent)`
  margin-bottom: 10;
`

export const HelpOrdersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: 'blue',
  }
})`
  border: 3px solid red;
  margin-bottom: 100;
`

export const HelpOrderCard = styled(HelpOrderCardComponent)`
  margin-vertical: 5;
`
