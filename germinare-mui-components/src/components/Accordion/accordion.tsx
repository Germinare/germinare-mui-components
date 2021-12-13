import React from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export interface IAccordionComponentProp {
  children: any
  id: string
  title: string
  disabled?: boolean
  expanded?: string
  checked?: boolean
  onAccordionChange: (panel: string) => any
}

export default function AccordionComponent(props: IAccordionComponentProp) {
  return (
    <Accordion
      disabled={props?.disabled || false}
      expanded={props.expanded === props.id}
      onChange={() => props.onAccordionChange(props.id)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${props.id}-content`}
        id={`${props.id}-header`}
      >
        <Typography variant="h6">
          {props.title} &nbsp;{' '}
          {props?.checked ? <CheckCircleIcon color="success" /> : <div></div>}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  )
}
