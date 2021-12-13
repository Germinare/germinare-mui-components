import React from 'react'

import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { ITableComponentProp } from '../table.model'
import { isAuthorized } from '../../../common'

export default function TableHeadComponent(props: ITableComponentProp) {

  return (
    <TableHead>
      <TableRow>
        {props.columns
          .filter((c) => c.accessRule ? isAuthorized(c.accessRule) : true)
          .map((c, i) => (
              <TableCell key={i}><Typography variant="subtitle1"><b>{c.description}</b></Typography></TableCell>
          ))}
      </TableRow>
    </TableHead>
  )
}
