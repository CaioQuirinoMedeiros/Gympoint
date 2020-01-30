import styled from 'styled-components/native'

import InputComponent from '../../components/Input'
import ButtonComponent from '../../components/Button'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.dimLight};
`

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  margin: 20px;
`

export const Input = styled(InputComponent).attrs({
  placeholder: 'Inclua seu pedido de auxílio',
  multiline: true,
  numberOfLines: 10,
  textAlignVertical: 'top',
  maxLength: 300
})`
  background: ${({ theme }) => theme.white};
  margin-bottom: 20px;
  flex: 0.5;
`

export const Button = styled(ButtonComponent)``
