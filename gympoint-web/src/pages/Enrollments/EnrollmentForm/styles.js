import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

import SelectStudentComponent from '~/components/SelectStudent'
import SelectPlanComponent from '~/components/SelectPlan'

export const Form = styled(FormikForm)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
  border-radius: 5px;
  padding: 2rem;
`

export const SelectStudent = styled(SelectStudentComponent)`
  margin-bottom: 5px;
`

export const SelectPlan = styled(SelectPlanComponent)`
  margin-bottom: 5px;
`

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
