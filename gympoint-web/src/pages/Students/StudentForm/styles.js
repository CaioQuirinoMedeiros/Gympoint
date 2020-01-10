import styled from 'styled-components'
import { Form as UnformForm } from '@rocketseat/unform'

import FormInputComponent from '~/components/Inputs/FormInput'

export const Form = styled(UnformForm)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
  border-radius: 5px;
  padding: 2rem;
`

export const Input = styled(FormInputComponent)`
  margin-top: 1rem;
`

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    flex-grow: 1;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`
