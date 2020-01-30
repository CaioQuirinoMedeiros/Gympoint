import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialIcons'

import TextComponent from '../../../components/Text'

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75
})`
  padding: 15px 15px 20px;
  border-radius: 4;
  border-width: 1;
  border-color: ${({ theme }) => theme.dim};
  background: ${({ theme }) => theme.white};
`

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10;
`

export const StatusWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CheckIcon = styled(Icon).attrs(({ theme, answered }) => ({
  name: 'check-circle',
  color: answered ? theme.positive : theme.dimDark,
  size: 16
}))`
  margin-right: 8;
`

export const Status = styled(TextComponent)`
  color: ${({ theme, answered }) =>
    answered ? theme.positive : theme.dimDark};
  font-weight: bold;
`

export const Timestamp = styled(TextComponent)`
  color: ${({ theme }) => theme.inkLight};
`

export const Preview = styled(TextComponent).attrs({
  numberOfLines: 3
})`
  line-height: 24;
`
