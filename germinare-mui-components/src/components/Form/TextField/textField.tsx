import React from 'react'

import TextField from '@mui/material/TextField'
import { useController, UseControllerProps } from 'react-hook-form'
import InputMask from 'react-input-mask'

export interface ITextFieldComponentProp extends UseControllerProps<any> {
  label: string
  fullWidth?: boolean
  mask?: any
  onChange?: (value: any) => void
  onBlur?: (value: any) => void
}

export default function TextFieldComponent(props: ITextFieldComponentProp) {
  /* 
    Warning: A component is changing an uncontrolled input to be controlled. 
    This is likely caused by the value changing from undefined to a defined value, 
    which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. 
    More info: https://reactjs.org/link/controlled-components
  */
  const { field } = useController(props)

  function onChange(value: any) {
    if (props?.onChange) props.onChange(value)
  }

  function onBlur(value: any) {
    if (props?.onBlur) props.onBlur(value)
  }

  const TextFieldMask = () => (
    <InputMask mask={props.mask} onBlur={onBlur} onChange={onChange}>
      <TextField
        name={field.name}
        ref={field.ref}
        value={field.value}
        label={props.label}
        fullWidth={props.fullWidth}
      />
    </InputMask>
  )

  return props?.mask ? <TextFieldMask /> : <TextField {...props} {...field} />
}
