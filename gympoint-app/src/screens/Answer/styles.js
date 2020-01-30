import styled from 'styled-components/native'

import TextComponent from '../../components/Text'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.dimLight};
`

export const Box = styled.View`
  background: ${({ theme }) => theme.white};
  border-radius: 4;
  padding: 12px 20px 0;
  margin: 20px;
`

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled(TextComponent)`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15;
  margin-vertical: 8;
`

export const Timestamp = styled(TextComponent)`
  color: ${({ theme }) => theme.inkLight};
`

export const Content = styled(TextComponent)`
  margin-bottom: 20px
`
