import React from 'react'

import Stack from '@mui/material/Stack'

export interface IStackButtonComponentProp {
  children: any
}

export default function StackButtonComponent(props: IStackButtonComponentProp) {
  return (
    <Stack spacing={2} direction="row">
      {props.children}
    </Stack>
  )
}
