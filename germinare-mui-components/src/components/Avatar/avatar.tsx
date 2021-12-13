import React from 'react'

import Avatar from '@mui/material/Avatar'
import PersonIcon from '@mui/icons-material/Person'

export interface IAvatarComponentProp {
  alt: string
  src: string
  variant?: 'circular' | 'rounded' | 'square'
  width?: number
  height?: number
  iconFontSize?: number
  srcSet?: string
  sizes?: string
  sx?: object
  imgProps?: object
  classes?: object
  component?: any
  children?: any
}

export default function AvatarComponent({
  alt,
  src,
  srcSet,
  sizes,
  sx,
  imgProps,
  classes,
  component,
  children,
  width = 120,
  height = 120,
  iconFontSize = 100,
  variant = 'circular',
}: IAvatarComponentProp) {
  function applySx() {
    let newRx = sx || {}
    newRx = width ? Object.assign(newRx, { width }) : newRx
    newRx = height ? Object.assign(newRx, { height }) : newRx
    return newRx
  }

  return (
    <Avatar
      variant={variant}
      alt={alt}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      sx={applySx()}
      imgProps={imgProps}
      classes={classes}
      component={component}
    >
      {children ? children : <PersonIcon sx={{ fontSize: iconFontSize }} />}
    </Avatar>
  )
}
