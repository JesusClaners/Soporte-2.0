import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./Boton.css"
const Boton = (props) => {
  return (
    <Button className="boton">
      <Typography className="boton__texto">
          {props.children}
      </Typography>
    </Button>
  );
};

export default Boton;
