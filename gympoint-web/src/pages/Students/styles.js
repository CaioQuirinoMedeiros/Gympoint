import styled from 'styled-components'

import FullButtonComponent from '~/components/Buttons/FullButton'
import InputComponent from '~/components/Inputs/Input'

export const AddStudentButton = styled(FullButtonComponent).attrs({
  icon: 'plus'
})``

export const SearchStudent = styled(InputComponent).attrs({
  placeholder: 'Buscar aluno'
})`
  padding: 0;
  margin-left: 1.5rem;
`
