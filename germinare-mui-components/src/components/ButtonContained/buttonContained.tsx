import React from 'react'

import Button from '@mui/material/Button'

export interface IButtonContainedComponentProp {
  value?: string
  children?: any
  disabled?: boolean
  onClick?: () => any
}

export default function ButtonContainedComponent(
  props: IButtonContainedComponentProp
) {
  const defaultValue = ''
  const defaultOnClick = () => {}

  return (
    <Button
      variant="contained"
      onClick={props.onClick || defaultOnClick}
      disabled={props.disabled}
    >
      {props.children || props.value || defaultValue}
    </Button>
  )
}
