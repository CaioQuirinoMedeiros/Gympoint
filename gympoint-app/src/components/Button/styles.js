import styled from 'styled-components'
import { RectButton } from 'react-native-gesture-handler'

import TextComponent from '../Text'

export const Wrapper = styled(RectButton).attrs(({ disabled }) => ({
  underlayColor: 'orange',
  rippleColor: disabled ? 'transparent' : null
}))`
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
  font-size: 17;
`

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.white
}))`
  position: absolute;
  right: 10;
`
