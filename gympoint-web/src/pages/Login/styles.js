import styled from 'styled-components'

import TextInputComponent from '~/components/Inputs/TextInput'
import FullButtonComponent from '~/components/Buttons/FullButton'

export const Container = styled.section`
  background: ${({ theme }) => theme.primary};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginWindow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${({ theme }) => theme.white};
  border-radius: 5px;
  box-shadow: 0 0 12px -2px #666;
  min-width: 33rem;
`

export const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-align: center;
  margin-bottom: 2rem;
`

export const Input = styled(TextInputComponent)`
  margin-bottom: 1rem;
`

export const Button = styled(FullButtonComponent)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
