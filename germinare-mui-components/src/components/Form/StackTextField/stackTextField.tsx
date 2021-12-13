import React from 'react'

import { StackTextField } from './stackTextField.style'

interface IStackTextFieldComponentProp {
  children: any
}

export default function StackTextFieldComponent(props: IStackTextFieldComponentProp) {
  return (
    <StackTextField spacing={5} direction="row" justifyContent="space-between">
      {props.children}
    </StackTextField>
  )
}
