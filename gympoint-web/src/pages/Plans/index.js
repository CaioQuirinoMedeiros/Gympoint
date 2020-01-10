/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'

import { currencyFormatter } from '~/utils/helpers/currency'
import PlansActions from '~/store/modules/plans/actions'

import PlanOptions from './PlanOptions'
import PlansTable from './PlansTable'
import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  AddButton,
  Content
} from './styles'

function Plans({ history }) {
  const fetching = false
  const plans = useSelector(({ plans }) => plans.data)

  const dispatch = useDispatch()

  const data = useMemo(() => plans, [plans])

  const columns = useMemo(
    () => [
      { Header: 'Título', accessor: 'title' },
      { Header: 'Duração', accessor: row => `${row.duration} meses` },
      {
        Header: 'Valor / Mês',
        accessor: row => currencyFormatter(row.price)
      },
      {
        accessor: props => <PlanOptions {...props} />,
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
    dispatch(PlansActions.getRequest())
  }, [])

  function handleAddPlan() {
    history.push('plans/register')
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Gerenciando planos</Title>
        <HeaderActions>
          <AddButton onClick={handleAddPlan}>Cadastrar</AddButton>
        </HeaderActions>
      </HeaderContainer>
      <Content>{fetching ? <Loading /> : <PlansTable table={table} />}</Content>
    </Container>
  )
}

export default Plans
