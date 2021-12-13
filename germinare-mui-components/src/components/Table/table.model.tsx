export interface ColumnDefinition {
  field: string
  description: string
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  accessRule?: boolean // use -> accessRule: (permissions: string[]) => boolean
}

export interface RowDefinition<T> {
  id: string
  data: T | any
  isCheckboxChecked?: boolean
  isRadioChecked?: boolean
}

export interface ITableComponentProp {
  rows: RowDefinition<any>[]
  columns: ColumnDefinition[]
  isCheckboxColumn?: boolean
  isRadioColumn?: boolean
  size?: 'medium' | 'small'
  isEmpty?: boolean
  isEmptyText?: string
  isEmptySVG?: string
}
