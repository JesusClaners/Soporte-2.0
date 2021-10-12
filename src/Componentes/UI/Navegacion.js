import Stack from "@mui/material/Stack";
import Tarjeta from "./Tarjeta";
import { NavLink } from "react-router-dom";
import "../Styles/root.css";

const Navegacion = () => {
  return (
    <Tarjeta>
      <Stack direction="row" spacing={1}>
        <button>
         
          <NavLink to="/Xbox"> <img src={"/xboxButton.png"} alt="Xbox"/>Xbox</NavLink>
        </button>

        <button>
        <NavLink to="/Playstation"> <img src={"/psButton.png"} alt="Ps4"/>Ps4</NavLink>
        </button>

        <button><NavLink to="/PC"><img src={"/pcButton.png"} alt="PC"/> PC</NavLink></button>

        <button><NavLink to="/Garena"><img src={"/garenaButton.png"} alt="Garena"/>Garena</NavLink></button>
      </Stack>
    </Tarjeta>
  );
};

export default Navegacion;
