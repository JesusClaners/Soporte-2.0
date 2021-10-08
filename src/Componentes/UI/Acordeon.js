import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Styles/root.css';

const Acordeon = (props) => {
  return (
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          justifyContent="center"
        >
          <h2 >Preguntas mas frecuentes</h2>
        </AccordionSummary>
        <AccordionDetails justifyContent="center">
          {props.children}
        </AccordionDetails>
      </Accordion>
    
  );
}

export default Acordeon;