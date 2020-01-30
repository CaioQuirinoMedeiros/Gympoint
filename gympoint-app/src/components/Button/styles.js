import styled from 'styled-components'

import TextComponent from '../Text'

export const Wrapper = styled.TouchableOpacity.attrs(({ disabled }) => ({
  activeOpacity: disabled ? 1 : 0.75
}))`
  background: ${({ theme }) => theme.primary};
  height: 46;
  padding-horizontal: 20;
  border-radius: 4;
  elevation: ${({ disabled }) => (disabled ? 0 : 2)};
  opacity: ${({ disabled }) => (disabled ? 0.85 : 1)};

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
