import React from 'react'

import TableBody from '@mui/material/TableBody'
import TableRowComponent from './TableRow/TableRow'
import TableRowEmptyComponent from './TableRowEmpty/tableRowEmpty'
import { ITableComponentProp } from '../table.model'

export default function TableBodyComponent(props: ITableComponentProp) {
  return (
    <TableBody>
      {props?.rows?.length ? (
        <TableRowComponent {...props} />
      ) : (
        <TableRowEmptyComponent {...props} />
      )}
    </TableBody>
  )
}
