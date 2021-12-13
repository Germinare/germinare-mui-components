import React from 'react'

import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import imgBook from '../../../assets/images/img_book.svg'
import { TableCellColumn, Image } from './tableEmpty.style'

export interface ITableEmptyComponentProp {
  isEmptyText?: string
  isEmptySVG?: string
}

export default function TableEmptyComponent(props: ITableEmptyComponentProp) {
  return (
    <TableBody>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCellColumn>
          <Image src={props?.isEmptySVG || imgBook} />
          <Typography variant="body1">
            {props?.isEmptyText || `Não há dados para visualizar.`}
          </Typography>
        </TableCellColumn>
      </TableRow>
    </TableBody>
  )
}
