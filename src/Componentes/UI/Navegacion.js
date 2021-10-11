import Stack from "@mui/material/Stack";
import Tarjeta from "./Tarjeta";
import { NavLink } from "react-router-dom";
import "../Styles/root.css";

const Navegacion = () => {
  return (
    <Tarjeta>
      <Stack direction="row" spacing={1}>
        <button>
          <NavLink to="/Xbox">Xbox</NavLink>
        </button>

        <button>
        <NavLink to="/Playstation">Ps4</NavLink>
        </button>

        <button><NavLink to="/PC">PC</NavLink></button>

        <button><NavLink to="/Garena">Garena</NavLink></button>
      </Stack>
    </Tarjeta>
  );
};

export default Navegacion;
