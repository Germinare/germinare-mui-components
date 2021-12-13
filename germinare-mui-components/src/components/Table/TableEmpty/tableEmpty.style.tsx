import TableCell from '@mui/material/TableCell'

import { styled } from '@mui/material/styles'

export const TableCellColumn = styled(TableCell)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const Image = styled('img')(() => ({
  width: '30%',
}))
