import React from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import { useController, UseControllerProps } from 'react-hook-form'

export interface ISelectComponentProp extends UseControllerProps<any> {
  label: string
  items: MenuItemProps[]
  required?: boolean
  maxHeight?: number
  minWidth?: number
  fullWidth?: boolean
}

export function MenuItemComponent(props: ISelectComponentProp) {
  return props.items.map((item, i) => <MenuItem key={i} {...item} />)
}

export default function SelectComponent(props: ISelectComponentProp) {
  const { field } = useController(props)

  const defaultMaxHeight = 300
  const defaultMinWidth = 150
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: props.maxHeight || defaultMaxHeight,
        minWidth: props.minWidth || defaultMinWidth,
      },
    },
  }

  return (
    <FormControl
      fullWidth={props.fullWidth}
      sx={{ m: 1, minWidth: props.minWidth || defaultMinWidth }}
    >
      <InputLabel>{props.label}</InputLabel>

      <Select MenuProps={MenuProps} {...props} {...field} autoWidth>
        {props.required ? (
          <div></div>
        ) : (
          <MenuItem value=""><em>&nbsp;</em></MenuItem>
        )}
      </Select>
    </FormControl>
  )
}
