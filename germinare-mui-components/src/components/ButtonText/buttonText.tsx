import React from 'react'

import Button from '@mui/material/Button'

export interface IButtonTextComponentProp {
  value?: string
  children?: any
  disabled?: boolean
  onClick?: () => any
}

export default function ButtonTextComponent(props: IButtonTextComponentProp) {
  const defaultValue = ''
  const defaultOnClick = () => {}

  return (
    <Button
      variant="text"
      onClick={props.onClick || defaultOnClick}
      disabled={props.disabled}
    >
      {props.children || props.value || defaultValue}
    </Button>
  )
}
