import Card  from "@mui/material/Card";
import "./Tarjeta.css"

const Tarjeta = (props) => {
    
  
    return <Card className="tarjeta">{props.children}</Card>;
  };
  
  export default Tarjeta;