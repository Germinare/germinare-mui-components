import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const ModalContent = styled(Box)(() => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  borderRadius: 5,
}))


export const Header = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: 5,
  paddingTop: 5,
  paddingLeft: 18,
}))
