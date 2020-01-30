import styled from 'styled-components'

import TextComponent from '../../../components/Text'

export const Card = styled.View`
  padding: 15px;
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

export const Status = styled(TextComponent)`
  color: ${({ theme, answered }) => (answered ? theme.positive : theme.dimDark)};
  font-weight: bold;
`

export const Timestamp = styled(TextComponent)`
  color: ${({ theme }) => theme.inkLight};
`

export const Preview = styled(TextComponent)``
