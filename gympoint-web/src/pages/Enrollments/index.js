/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'

import { formatDate } from '~/utils/helpers/date'
import EnrollmentsActions from '~/store/modules/enrollments/actions'

import EnrollmentOptions from './EnrollmentOptions'
import EnrollmentsTable from './EnrollmentsTable'
import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  AddButton,
  Content,
  Check
} from './styles'

function Enrollments({ history }) {
  const fetching = false
  const enrollments = useSelector(({ enrollments }) => enrollments.data)

  const dispatch = useDispatch()

  const data = useMemo(() => enrollments, [enrollments])

  const columns = useMemo(
    () => [
      { Header: 'Aluno', accessor: 'student.name' },
      { Header: 'Plano', accessor: 'plan.title' },
      {
        Header: 'Início',
        accessor: 'start_date',
        Cell: ({ cell: { value } }) => formatDate(value)
      },
      {
        Header: 'Término',
        accessor: 'end_date',
        Cell: ({ cell: { value } }) => formatDate(value)
      },
      {
        Header: 'Ativa',
        accessor: 'active',
        Cell: ({ cell: { value } }) => (
          <Check className={value ? 'active' : undefined} />
        )
      },
      {
        accessor: props => <EnrollmentOptions {...props} />,
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

  useEffect(() => {
    dispatch(EnrollmentsActions.getRequest())
  }, [])

  function handleAddEnrollment() {
    history.push('enrollments/register')
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Gerenciando Matrículas</Title>
        <HeaderActions>
          <AddButton onClick={handleAddEnrollment}>Cadastrar</AddButton>
        </HeaderActions>
      </HeaderContainer>
      <Content>
        {fetching ? <Loading /> : <EnrollmentsTable table={table} />}
      </Content>
    </Container>
  )
}

export default Enrollments
