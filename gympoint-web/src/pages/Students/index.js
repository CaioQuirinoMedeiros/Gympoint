import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import StudentActions from '~/store/modules/student/actions'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  AddStudentButton,
  SearchStudent,
  Content,
  Student
} from './styles'

export default function Students() {
  const [searchStudent, setSearchStudent] = useState('')

  const fetching = useSelector(({ student }) => student.fetching)
  const students = useSelector(({ student }) => student.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(StudentActions.getRequest())
  }, [dispatch])

  return (
    <Container>
      <HeaderContainer>
        <Title>Gerenciando alunos</Title>
        <HeaderActions>
          <AddStudentButton>Cadastrar</AddStudentButton>
          <SearchStudent name='searchStudent' onChangeText={setSearchStudent} />
        </HeaderActions>
      </HeaderContainer>
      <Content>
        <Student student={{ name: 'Nome', email: 'E-mail', age: 'Idade' }} />
        {students.map(student => (
          <Student key={student.id} student={student} />
        ))}
      </Content>
    </Container>
  )
}
