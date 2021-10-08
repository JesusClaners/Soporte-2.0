import Stack from "@mui/material/Stack";
import Tarjeta from "./Tarjeta";
import { NavLink } from "react-router-dom";
import "../Styles/root.css"



const Navegacion = () => {
  return (
    
      <Tarjeta>
        <Stack direction="row" spacing={2} justifyContent="center">
          <button>
           <NavLink to="/Xbox">Xbox</NavLink>
          </button>

          <button>Ps4</button>

          <button>PC</button>

          <button>Garena</button>
        </Stack>
      </Tarjeta>

     
      
   
  );
};



export default Navegacion;
