import styled from 'styled-components'

import ButtonComponent from '../../components/Button'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.dimLight};
`

export const Content = styled.View`
  margin: 20px;
`

export const CheckinButton = styled(ButtonComponent)``

export const CheckinsList = styled.FlatList.attrs({
  contentContainerStyle: {
    borderWidth: 1,
    borderColor: 'orange'
  }
})`
  border: 1px solid blue;
`
