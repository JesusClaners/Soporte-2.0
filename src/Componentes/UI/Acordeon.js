import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../Styles/root.css";

const Acordeon = (props) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} justifyContent="center">
        <h3>Preguntas mas frecuentes</h3>
      </AccordionSummary>
      <AccordionDetails justifyContent="center">
        {props.children}
      </AccordionDetails>
    </Accordion>
  );
};

export default Acordeon;
