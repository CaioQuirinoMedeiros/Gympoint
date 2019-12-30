import React, { useState } from 'react'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  AddStudentButton,
  SearchStudent,
  Content
} from './styles'

export default function Students() {
  const [searchStudent, setSearchStudent] = useState('')

  React.useEffect(() => {
    console.log(searchStudent)
  }, [searchStudent])

  return (
    <Container>
      <HeaderContainer>
        <Title>Gerenciando alunos</Title>
        <HeaderActions>
          <AddStudentButton>Cadastrar</AddStudentButton>
          <SearchStudent name='searchStudent' onChangeText={setSearchStudent} />
        </HeaderActions>
      </HeaderContainer>
      <Content>ALUNOS</Content>
    </Container>
  )
}
