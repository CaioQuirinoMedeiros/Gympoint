/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'

import { formatStringDate } from '~/utils/helpers/date'
import EnrollmentsActions from '~/store/modules/enrollments/actions'

import EnrollmentOptions from './EnrollmentOptions'
import EnrollmentsTable from './EnrollmentsTable'
import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  Content
} from '~/pages/components'
import { AddButton, Check } from './styles'

function Enrollments ({ history }) {
  const fetching = useSelector(({ enrollments }) => enrollments.fetching)
  const enrollments = useSelector(({ enrollments }) => enrollments.data)

  const dispatch = useDispatch()

  const data = useMemo(() => enrollments, [enrollments])

  const sorting = React.useCallback((props1, props2) => {
    return props2.values.active ? 1 : -1
  })

  const columns = useMemo(
    () => [
      { Header: 'Aluno', accessor: 'student.name' },
      { Header: 'Plano', accessor: 'plan.title' },
      {
        Header: 'Início',
        accessor: 'start_date',
        Cell: ({ cell: { value } }) => formatStringDate(value)
      },
      {
        Header: 'Término',
        accessor: 'end_date',
        Cell: ({ cell: { value } }) => formatStringDate(value)
      },
      {
        Header: 'Ativa',
        accessor: 'active',
        Cell: ({ cell: { value } }) => (
          <Check className={value ? 'active' : undefined} />
        ),
        sortType: sorting
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

  function handleAddEnrollment () {
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
