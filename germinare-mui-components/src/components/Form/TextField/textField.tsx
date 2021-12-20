import TextField from '@mui/material/TextField'
import React from 'react'
import { useController } from "react-hook-form";

export interface ITextFieldComponentProp {
    fullWidth?: boolean
    name: string
    control: any
    width?: number | string
    value?: string
    disabled?: boolean
    label: string
    onBlur?: any
    variant?: 'outlined' | 'standard' | 'filled'
    rules?: object
    defaultValue?: string
}

export default function TextFieldComponent(props: ITextFieldComponentProp) {
    const {
        field ,
    } = useController({
        name:props.name,
        control:props.control,
        rules: props.rules,
        defaultValue: props.defaultValue,
    });

    return (
        <TextField {...props} { ...field } variant={props.variant || 'outlined'} />
    )
}