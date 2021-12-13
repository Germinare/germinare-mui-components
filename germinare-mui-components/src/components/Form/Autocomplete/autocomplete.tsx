import React from 'react'

import { UseControllerProps } from 'react-hook-form'

export interface IAutocompleteComponentProp
  extends UseControllerProps<any> {
}

export default function AutocompleteComponent(props: IAutocompleteComponentProp) {
  return props ? <div></div> : <div></div>
}
