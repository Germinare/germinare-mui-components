import React from 'react'
import { Autocomplete, TextField } from "@mui/material";
import { useController } from "react-hook-form";

export interface IAutocompleteComponentProp {
    name: string
    label: string
    control: any
    width?: number
    variant?: "standard" | "filled" | "outlined"
    rules?: object
    defaultValue?: any
    options: object[]
    fullWidth?: boolean
    disabled?: boolean
    multiple?: boolean
}

export default function AutocompleteComponent(props: IAutocompleteComponentProp) {
    const {
        field
    } = useController({
        name: props.name,
        control: props.control,
        rules: props.rules,
        defaultValue: props.defaultValue
    })

    return (
        <Autocomplete
            id={props.name}
            options={props.options}
            multiple={props.multiple}
            renderInput={() => <TextField {...props} {...field} label={props.label} variant={props.variant || 'outlined'} defaultValue={props.defaultValue} disabled={props.disabled} fullWidth={props.fullWidth} />}
        />
    )
}