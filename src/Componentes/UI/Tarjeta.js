import Card  from "@mui/material/Card";
import "../Styles/root.css"

const Tarjeta = (props) => {
    
  
    return <Card className="tarjeta">{props.children}</Card>;
  };
  
  export default Tarjeta;