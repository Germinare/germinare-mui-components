import React from 'react'

import Button from '@mui/material/Button'

export interface IButtonOutlinedComponentProp {
  value?: string
  children?: any
  disabled?: boolean
  onClick?: () => any
}

export default function ButtonOutlinedComponent(
  props: IButtonOutlinedComponentProp
) {
  const defaultValue = ''
  const defaultOnClick = () => {}

  return (
    <Button
      variant="outlined"
      onClick={props.onClick || defaultOnClick}
      disabled={props.disabled}
    >
      {props.children || props.value || defaultValue}
    </Button>
  )
}
