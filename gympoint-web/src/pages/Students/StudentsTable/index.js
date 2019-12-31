import React from 'react'

import { Table } from './styles'

function StudentsTable({ table }) {
  return (
    <Table {...table.getTableProps()}>
      <thead>
        {table.headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...table.getTableBodyProps()}>
        {table.rows.map(row => {
          table.prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default StudentsTable
