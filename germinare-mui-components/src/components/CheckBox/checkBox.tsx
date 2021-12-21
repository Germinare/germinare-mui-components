import React from 'react'
import Checkbox from '@mui/material/Checkbox';

export interface ICheckBoxComponentProp {
  checked?: boolean
  checkedIcon?: Element
  classes?:object
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  defaultChecked?: boolean
  disabled?:boolean
  disableRipple?:boolean
  icon?:Element
  id?:string
  indeterminate?:boolean
  indeterminateIcon?:Element
  inputProps?:object
  inputRef?:React.Ref<any>
  onChange?:(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  required?:boolean
  size?:"medium" | "small" | undefined
  sx?:object	
  value?:any
}

export default function CheckBoxComponent(props: ICheckBoxComponentProp) {
  return (
    <Checkbox {...props}/>
  )
}
