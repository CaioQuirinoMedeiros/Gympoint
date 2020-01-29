import styled from 'styled-components'

import logo from '../../../assets/icon.png'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image.attrs({
  source: logo
})``