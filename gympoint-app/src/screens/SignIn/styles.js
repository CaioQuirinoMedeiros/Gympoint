import styled from 'styled-components'

import ButtonComponent from '../../components/Button'
import InputComponent from '../../components/Input'
import logo from '../../../assets/icon.png'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  justify-content: center;
`

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain'
})`
  align-self: center;
  width: 130;
  height: 130;
  margin-bottom: 20;
`

export const Input = styled(InputComponent).attrs({
  placeholder: 'ID de cadastro',
  keyboardType: 'numeric'
})`
  margin-bottom: 20;
`

export const Button = styled(ButtonComponent)``
