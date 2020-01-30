import styled from 'styled-components'

import TextComponent from '../../../components/Text'

export const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  border-radius: 4;
  border-width: 1;
  border-color: ${({ theme }) => theme.dim};
  background: ${({ theme }) => theme.white};
`

export const Title = styled(TextComponent)`
  font-weight: bold;
  font-size: 16;
`

export const Timestamp = styled(TextComponent)`
  color: ${({ theme }) => theme.inkLight};
`
