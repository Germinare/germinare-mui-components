import React from 'react'

import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import IconButton from '@mui/material/IconButton'

import { ModalContent, Header } from './modal.style'

export interface IModalComponentProp {
  children: any
  open: boolean
  onClose: () => void
  title?: string
  width?: number | string
  height?: number | string
  persistent?: boolean
}

export default function ModalComponent(props: IModalComponentProp) {
  const defaultWidth = '70%'
  const defaultHeight = 'auto'

  function handleClose() {
    console.log(props.persistent)
    if (props.persistent) return
    props.onClose()
  }

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent
        sx={{
          width: props.width || defaultWidth,
          height: props.height || defaultHeight,
        }}
      >
        <div>
          <Header>
            <Typography variant="h6">{props.title || ''}</Typography>
            <IconButton onClick={props.onClose}>
              <CloseRoundedIcon />
            </IconButton>
          </Header>
          {props.children}
        </div>
      </ModalContent>
    </Modal>
  )
}
