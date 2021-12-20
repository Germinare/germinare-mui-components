import React from 'react'

import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

import TableHeadComponent from './TableHead/tableHead'
import TableBodyComponent from './TableBody/tableBody'
import TableEmptyComponent from './TableEmpty/tableEmpty'
import { ITableComponentProp } from './table.model'

export default function TableComponent(props: ITableComponentProp) {
  return (
    <TableContainer component={Paper}>
        {props?.isEmpty ? (
          <Table sx={{ minWidth: 650 }} size={props?.size || 'medium'}>
            <TableEmptyComponent isEmptyText={props.isEmptyText} />
          </Table>
        ) : (
          <Table sx={{ minWidth: 650 }} size={props?.size || 'medium'}>
            <TableHeadComponent {...props} />
            <TableBodyComponent {...props} />
          </Table>
        )}
    </TableContainer>
  )
}
