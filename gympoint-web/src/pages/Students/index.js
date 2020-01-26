import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'

import StudentActions from '~/store/modules/students/actions'

import StudentOptions from './StudentOptions'
import StudentTable from './StudentsTable'
import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  HeaderActions,
  Content,
  Title
} from '~/pages/components'
import { AddStudentButton, SearchStudent } from './styles'

function Students ({ history }) {
  const fetching = useSelector(({ students }) => students.fetching)
  const students = useSelector(({ students }) => students.data)

  const data = useMemo(() => students, [students])

  const columns = useMemo(
    () => [
      { Header: 'Nome', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Idade', accessor: 'age' },
      {
        accessor: props => <StudentOptions {...props} />,
        id: 'actions',
        disableSortBy: true
      }
    ],
    []
  )

  const table = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(StudentActions.getRequest())
  }, [dispatch])

  function handleAddStudent () {
    history.push('students/register')
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Gerenciando Alunos</Title>
        <HeaderActions>
          <AddStudentButton onClick={handleAddStudent}>
            Cadastrar
          </AddStudentButton>
          <SearchStudent
            name='searchStudent'
            value={table.globalFilter}
            onChangeText={text => table.setGlobalFilter(text || undefined)}
          />
        </HeaderActions>
      </HeaderContainer>
      <Content>
        {fetching ? <Loading /> : <StudentTable table={table} />}
      </Content>
    </Container>
  )
}

export default Students
