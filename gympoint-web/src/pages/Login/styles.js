import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

import FieldComponent from '~/components/Inputs/Field'
import FullButtonComponent from '~/components/Buttons/FullButton'

export const Container = styled.section`
  background: ${({ theme }) => theme.primary};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginForm = styled(FormikForm)`
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

export const Field = styled(FieldComponent)`
  margin-bottom: 1rem;
`

export const Button = styled(FullButtonComponent)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const TesteToast = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 1rem;
  }

  span {
    color: #666;
    margin-bottom: 2px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    font-size: 15px;
    margin-top: 2rem;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`
