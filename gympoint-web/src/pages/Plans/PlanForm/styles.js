import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

import FieldComponent from '~/components/Inputs/Field'
import CurrencyFieldComponent from '~/components/Inputs/CurrencyField'
import CurrencyComponent from '~/components/Inputs/Currency'

export const Form = styled(FormikForm)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
  border-radius: 5px;
  padding: 2rem;
`

export const Field = styled(FieldComponent)``

export const Currency = styled(CurrencyComponent)``

export const CurrencyField = styled(CurrencyFieldComponent)``

export const InputsWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  > * {
    flex-grow: 1;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`
