import React from 'react'

import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { StackButton } from './stackButonAdd.style'

export interface IStackButtonAddComponentProp {
  value?: string
  children?: any
  onClick?: () => any
}

export default function StackButtonAddComponent(props: IStackButtonAddComponentProp) {
  const defaultValue = ''
  const defaultOnClick = () => {}

  return (
    <StackButton direction="row" justifyContent="flex-end" spacing={2}>
      <Button
        startIcon={<AddCircleIcon />}
        onClick={props.onClick || defaultOnClick}
      >
        {props.children || props.value || defaultValue}
      </Button>
    </StackButton>
  )
}
