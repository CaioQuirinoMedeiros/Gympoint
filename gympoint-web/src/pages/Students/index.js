/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'

import StudentActions from '~/store/modules/student/actions'

import StudentOptions from './StudentOptions'
import StudentTable from './StudentsTable'
import Loading from '~/components/Loading'

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
  const fetching = useSelector(({ student }) => student.fetching)
  const students = useSelector(({ student }) => student.data)

  const data = useMemo(() => students, [students])

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Age', accessor: 'age' },
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
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <Title>Gerenciando alunos</Title>
        <HeaderActions>
          <AddStudentButton>Cadastrar</AddStudentButton>
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
