import React from 'react'

import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { ITableComponentProp } from '../../table.model'
import { isAuthorized } from '../../../../common'

export default function TableRowEmptyComponent(props: ITableComponentProp) {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {props.columns
        .filter((c) => c.accessRule ? isAuthorized(c.accessRule) : true)
        .map((column, j) => (
          <TableCell
            key={`${j}${column.field}`}
            align={column?.align || 'inherit'}
          >
            -
          </TableCell>
        ))}
    </TableRow>
  )
}
