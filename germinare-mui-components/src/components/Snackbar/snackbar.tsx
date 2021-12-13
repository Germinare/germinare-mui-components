import React, { SyntheticEvent, MouseEvent, Fragment, forwardRef } from 'react'

import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export interface ISnackbarComponentProp {
  open: boolean
  message: string
  severity: 'error' | 'warning' | 'info' | 'success'
  onClose: () => any
  autoHideDuration?: number
}

export default function SnackbarComponent(props: ISnackbarComponentProp) {
  const vertical = 'top'
  const horizontal = 'center'

  function handleClose(event: SyntheticEvent | MouseEvent, reason?: string) {
    if (event && reason === 'clickaway') return
    props.onClose()
  }

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  )

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.autoHideDuration || 6000}
      onClose={handleClose}
      action={action}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert
        onClose={handleClose}
        severity={props.severity || 'info'}
        sx={{ width: '100%' }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}
