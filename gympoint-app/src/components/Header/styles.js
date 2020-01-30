import styled from 'styled-components'
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/MaterialIcons'

import logo from '../../../assets/logo.png'

export const Container = styled.View`
  elevation: 3;
  padding: 10px;
  padding-top: ${Constants.statusBarHeight + 10};
  background: ${({ theme }) => theme.white};
  position: relative;
`

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain'
})`
  height: 30;
  width: 150;
  align-self: center;
`

export const BackButton = styled(Icon).attrs(({ theme }) => ({
  name: 'chevron-left',
  color: theme.ink,
  size: 30
}))`
  position: absolute;
  bottom: 0;
  padding: 8px;
`
