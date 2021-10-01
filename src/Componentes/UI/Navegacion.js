import Stack from "@mui/material/Stack";
import Boton from "./BotonSimple";
import Tarjeta from "./Tarjeta";
import { NavLink } from "react-router-dom";


const Navegacion= () => {
  return (
    <Tarjeta>
    <Stack direction="row" spacing={2} justifyContent="center">
      <Boton>
        <NavLink to= '/Xbox'>Xbox
        </NavLink>
        </Boton>

      <Boton>Ps4</Boton>

      <Boton>PC</Boton>

      <Boton>Garena</Boton>
    </Stack>
    </Tarjeta>
  );
};

export default Navegacion;
