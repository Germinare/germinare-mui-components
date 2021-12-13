import React from 'react'

import ptBRLocale from 'date-fns/locale/pt-BR'
import enLocale from 'date-fns/locale/en-US'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import { TextField } from '@mui/material'
import { useController, UseControllerProps } from 'react-hook-form'

const localeMap = {
  ptBR: ptBRLocale,
  en: enLocale,
}

const maskMap = {
  ptBR: '__/__/____',
  en: '__/__/____',
}

export interface IDatePickerComponentProp
  extends UseControllerProps<any> {
  control: any
  label: string
  fullWidth?: boolean
  // MUI properties below 
  leftArrowButtonText?: string
  rightArrowButtonText?: string
  allowSameDateSelection?: boolean // false
  clearable?: boolean // false
  disableCloseOnSelect?: boolean // `true` for Desktop, `false` for Mobile
  disabled?: boolean // false
  disableHighlightToday?: boolean // false
  disableOpenPicker?: boolean // false
  loading?: boolean // false
  open?: boolean // false
  readOnly?: boolean // false
  showDaysOutsideCurrentMonth?: boolean // false
  showTodayButton?: boolean // false
  showToolbar?: boolean // false
  maxDate?: any
  minDate?: any
  cancelText?: any
  clearText?: any // 'Clear'
  okText?: any // 'Ok'
  todayText?: any // 'Today'
  toolbarPlaceholder?: any // '-'
  toolbarTitle?: any // 'Select date'
  defaultCalendarMonth?: any
  openTo?: 'day' | 'month' | 'year'
  orientation?: 'landscape' | 'portrait'
  value?: any | Date | number | string
  onAccept?: () => any
  onClose?: () => any
  onError?: () => any
  onMonthChange?: () => any
  onOpen?: () => any
  onViewChange?: () => any
  onYearChange?: () => any
}

export default function DatePickerComponent(props: IDatePickerComponentProp) {
  // const { field, fieldState } = useController(props)
  const { field } = useController(props)

  function getLocale() {
    return 'ptBR'
  }

  return (
    <div>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        locale={localeMap[getLocale()]}
      >
        <DatePicker
          mask={maskMap[getLocale()]}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth={props.fullWidth}
            />
          )}
          clearText="Limpar"
          todayText="Hoje"
          toolbarTitle="Selecione a data"
          {...props}
          {...field}
        />
      </LocalizationProvider>
      {/* <p>{fieldState.isTouched && 'Touched'}</p>
      <p>{fieldState.isDirty && 'Dirty'}</p>
      <p>{fieldState.invalid ? 'invalid' : 'valid'}</p> */}
    </div>
  )
}
