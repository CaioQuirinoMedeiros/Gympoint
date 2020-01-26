import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'

import HelpOrdersActions from '~/store/modules/helpOrders/actions'

import HelpOrderOptions from './HelpOrderOptions'
import HelpOrdersTable from './HelpOrdersTable'
import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  HeaderActions,
  Content,
  Title
} from '~/pages/components'
import { SearchStudent } from './styles'

function HelpOrders () {
  const fetching = useSelector(({ helpOrders }) => helpOrders.fetching)
  const helpOrders = useSelector(({ helpOrders }) => helpOrders.data)

  const data = useMemo(() => helpOrders, [helpOrders])

  const columns = useMemo(
    () => [
      { Header: 'Aluno', accessor: 'student.name' },
      {
        accessor: props => <HelpOrderOptions {...props} />,
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
    dispatch(HelpOrdersActions.getRequest())
  }, [dispatch])

  return (
    <Container>
      <HeaderContainer>
        <Title>Pedidos de Auxílio</Title>
        <HeaderActions>
          <SearchStudent
            name='searchStudent'
            value={table.globalFilter}
            onChangeText={text => table.setGlobalFilter(text || undefined)}
          />
        </HeaderActions>
      </HeaderContainer>
      <Content>
        {fetching ? <Loading /> : <HelpOrdersTable table={table} />}
      </Content>
    </Container>
  )
}

export default HelpOrders
