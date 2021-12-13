import React from 'react'

import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { ColumnDefinition, ITableComponentProp, RowDefinition } from '../../table.model'
import { isAuthorized } from '../../../../common'

export default function TableRowComponent(props: ITableComponentProp) {
  function getData(row: RowDefinition<any>, column: ColumnDefinition) {
    return row?.data[column.field] ? `${row.data[column.field]}` : `-`
  }

  return (
    <div>
      {props.rows.map((row, i) => (
        <TableRow
          key={`${i}${row.id}`}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {props.columns
            .filter((c) => c.accessRule ? isAuthorized(c.accessRule) : true)
            .map((column, j) => (
              <TableCell
                key={`${j}${column.field}`}
                align={column?.align || 'inherit'}
              >
                {getData(row, column)}
              </TableCell>
            ))}
        </TableRow>
      ))}
    </div>
  )
}
