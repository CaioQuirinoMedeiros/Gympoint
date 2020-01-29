import styled from 'styled-components'
import { RectButton } from 'react-native-gesture-handler'

import TextComponent from '../Text'

export const Container = styled(RectButton)`
  background: ${({ theme }) => theme.primary};
  height: 46;
  padding-horizontal: 20;
  border-radius: 4;

  align-items: center;
  justify-content: center;
`

export const Text = styled(TextComponent)`
  color: #fff;
  font-weight: bold;
  font-size: 16;
`
