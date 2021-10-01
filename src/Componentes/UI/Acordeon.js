import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Acordeon.css';

const Acordeon = (props) => {
  return (
    
      <Accordion className="acordeon">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          justifyContent="center"
        >
          <Typography className="acordeon__texto" >Preguntas mas frecuentes</Typography>
        </AccordionSummary>
        <AccordionDetails justifyContent="center">
          {props.children}
        </AccordionDetails>
      </Accordion>
    
  );
}

export default Acordeon;