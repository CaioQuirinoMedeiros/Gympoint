import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable } from 'react-table'

import StudentActions from '~/store/modules/student/actions'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  AddStudentButton,
  SearchStudent,
  Content,
  Table,
  Student
} from './styles'

export default function Students() {
  const [searchStudent, setSearchStudent] = useState('')
  const table = useTable({
    columns: [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' }
    ],
    data: [
      { name: 'Caiao', age: 22 },
      { name: 'Aécio', age: 21 },
      { name: 'Gabriel', age: 25 }
    ],

  })

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
        <Table {...table.getTableProps()}>
          <thead>
            {table.headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...table.getTableBodyProps()}>
            {table.rows.map(row => {
              table.prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </Table>
        {/* <Student student={{ name: 'Nome', email: 'E-mail', age: 'Idade' }} />
        {students.map(student => (
          <Student key={student.id} student={student} />
        ))} */}
      </Content>
    </Container>
  )
}
