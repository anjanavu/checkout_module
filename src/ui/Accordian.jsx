import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Accordian = () => {
  return (
    <div style={{ width: '100%' }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          Order Summary
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <span>X Lows DUNE </span>
            <span>Lows Camel / 6</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Accordian
