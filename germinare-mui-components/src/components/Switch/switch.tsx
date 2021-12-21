import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useController } from "react-hook-form";

export interface ISwitchComponentProp {
    name: string
    label: string
    control: any
    rules?: object
}

export default function SwitchComponent(props: ISwitchComponentProp) {
    const {
        field
    } = useController({
        name: props.name,
        control: props.control,
        rules: props.rules,
    })

    return (
        <FormControlLabel control={<Switch {...field} />} name={props.name} label={props.label} />
    );
}